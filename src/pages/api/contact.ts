import type { APIRoute } from 'astro';

export const prerender = false;

const env = (key: string): string | undefined =>
  (typeof process !== 'undefined' ? process.env[key] : undefined) ?? (import.meta.env[key] as string | undefined);

const clean = (v: FormDataEntryValue | null, max: number) => String(v ?? '').trim().slice(0, max);
const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const POST: APIRoute = async ({ request, redirect }) => {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  const fail = (error: string, status = 400) =>
    wantsJson ? Response.json({ error }, { status }) : new Response(error, { status });

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail('Invalid submission.');
  }

  // Bots fill the hidden field or submit inhumanly fast; pretend success so they don't retry.
  const elapsed = Number(form.get('t') || 0);
  if (clean(form.get('website'), 200) || (elapsed > 0 && elapsed < 2500)) {
    return wantsJson ? Response.json({ ok: true }) : redirect('/contact/thanks', 303);
  }

  const name = clean(form.get('name'), 120);
  const email = clean(form.get('email'), 200);
  const company = clean(form.get('company'), 160);
  const role = clean(form.get('role'), 80);
  const interests = form.getAll('interest').map((v) => clean(v, 40)).filter(Boolean);
  const message = clean(form.get('message'), 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return fail('Please add your name, a valid email, and a message.');
  }

  const fields: [string, string][] = [
    ['Name', name],
    ['Email', email],
    ['Company', company || '—'],
    ['With', role || '—'],
    ['Interested in', interests.join(', ') || '—'],
  ];
  const text = `${fields.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${message}`;
  const html = `<table>${fields
    .map(([k, v]) => `<tr><td style="padding:2px 12px 2px 0;color:#8C8B86">${k}</td><td>${escapeHtml(v)}</td></tr>`)
    .join('')}</table><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`;

  const apiKey = env('RESEND_API_KEY');
  const to = env('CONTACT_TO_EMAIL');
  if (!apiKey || !to) {
    if (import.meta.env.DEV) {
      console.log('[contact] (dev, not sent)\n' + text);
      return wantsJson ? Response.json({ ok: true }) : redirect('/contact/thanks', 303);
    }
    console.error('[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set');
    return fail('The form isn’t connected yet. Please try again shortly.', 503);
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env('CONTACT_FROM_EMAIL') || 'Stella Nova <onboarding@resend.dev>',
      to: [to],
      reply_to: email,
      subject: `Stella Nova inquiry: ${name}${company ? ` (${company})` : ''}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error('[contact] Resend error', res.status, await res.text());
    return fail('Something went wrong sending that. Please try again.', 502);
  }

  return wantsJson ? Response.json({ ok: true }) : redirect('/contact/thanks', 303);
};
