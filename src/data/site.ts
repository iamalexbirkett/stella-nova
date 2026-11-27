export const site = {
  name: 'Stella Nova',
  legalName: 'Stella Nova Inc.',
  url: 'https://stellanovainc.com',
  tagline: 'Organic growth research & advisory',
  description:
    'Stella Nova is an organic growth research and advisory firm. Alex Birkett helps investors, their portfolio companies, and ambitious brands find their way through AI search and build the experimentation muscle that turns a strong brand into the category leader.',
  // Web3Forms access key (https://web3forms.com). It's meant to be public; it only lets the form send to your inbox.
  formKey: '',
  founder: {
    name: 'Alex Birkett',
    url: 'https://www.alexbirkett.com',
  },
};

export const nav = [
  { href: '/work-with-me', label: 'Work with me' },
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
];

export type Offer = {
  slug: string;
  name: string;
  short: string;
  price: string;
  priceValue: number;
  priceUnit?: 'MON' | 'ANN';
  bestFor: string;
  format: string;
  lede: string;
  intro: string[];
  forWho: { title: string; body: string }[];
  includes: { title: string; body: string }[];
  process: { title: string; body: string }[];
  leaveWith: string[];
  faq: { q: string; a: string }[];
  seats?: { total: number; open: number | null };
};

export const offers: Offer[] = [
  {
    slug: 'training',
    name: 'Training & workshops',
    short: 'Working sessions that teach your team how AI search actually works, then put them to work in the room.',
    price: 'From $5k',
    priceValue: 5000,
    bestFor: 'VC & PE portfolios, marketing and leadership teams',
    format: 'Half-day, full-day, or a multi-session cohort',
    lede: 'Your team learns how AI search actually works, then does the work in the room.',
    intro: [
      'Most AI-search training is a slide deck of screenshots and a list of tips that expire in a month. This isn’t that.',
      'Every session is built around your companies, your categories, and the questions your buyers are actually typing into ChatGPT, Perplexity, Gemini and Google. We look at real answers, take apart why some brands get named and others don’t, and leave with experiments your team owns.',
    ],
    forWho: [
      {
        title: 'Investors and their portfolios',
        body: 'Run one program across your portfolio so every marketing team learns the new rules at the same time, and the operating partners get a shared language for what good looks like.',
      },
      {
        title: 'In-house marketing teams',
        body: 'SEO, content, PR and product marketing teams who need to stop guessing and start running a coordinated organic program built for answer engines.',
      },
      {
        title: 'Leadership teams',
        body: 'CEOs, CMOs and boards deciding where to place bets. A clear-eyed briefing on what’s changing, what’s hype, and what to fund.',
      },
    ],
    includes: [
      { title: 'How answer engines choose', body: 'How large language models and AI search surfaces find, weigh and cite sources, and what that means for which brands get recommended.' },
      { title: 'Measuring without fooling yourself', body: 'How to track AI visibility honestly: prompt sets, sampling, share of voice, and why most dashboards overstate what they know.' },
      { title: 'Earning the citation', body: 'What gets pages, research and third-party coverage cited, and how to build a program around it.' },
      { title: 'The experimentation habit', body: 'How to design, run and read organic experiments so your team learns faster than the market changes.' },
      { title: 'From visibility to revenue', body: 'Tying AI search to pipeline and revenue, so the program survives its first budget review.' },
    ],
    process: [
      { title: 'Scoping call', body: 'We agree on audience, goals and format. I review your sites and categories before we meet.' },
      { title: 'Custom build', body: 'I pull real AI answers for your categories so the session runs on your data, not generic examples.' },
      { title: 'The session', body: 'Teaching, live teardown, and working time. Every team builds its own prioritized experiment list.' },
      { title: 'Follow-through', body: 'Materials, the recording, and a written summary of each team’s next moves.' },
    ],
    leaveWith: [
      'A shared, accurate model of how AI search works',
      'A prioritized list of experiments each team owns',
      'Session materials and the recording',
      'A written readout for leadership or operating partners',
    ],
    faq: [
      { q: 'Remote or in person?', a: 'Either. Most half-day sessions run remotely; full-day workshops and portfolio offsites work best in person.' },
      { q: 'Can you run this across multiple portfolio companies at once?', a: 'Yes. That’s one of the most common formats. Companies learn together, then break out to work on their own categories.' },
      { q: 'Is this technical?', a: 'It’s built for marketers and operators, not engineers. Technical topics come up where they matter, explained in plain language.' },
    ],
  },
  {
    slug: 'audits',
    name: 'Audits & roadmaps',
    short: 'Find out where you actually stand in AI search, who’s winning the answers, and what to do first.',
    price: 'From $15k',
    priceValue: 15000,
    bestFor: 'Brands planning their next year; investors in diligence or value creation',
    format: 'Fixed-scope engagement',
    lede: 'Find out where you actually stand in AI search, who’s winning your answers, and what to do first.',
    intro: [
      'You can’t prioritize what you haven’t measured. Most companies know their keyword rankings to the decimal and have no idea whether ChatGPT recommends them, a competitor, or nobody at all.',
      'An audit gives you an honest baseline, a clear view of the gaps, and a roadmap ranked by impact, so the next quarter goes to the work that moves the number.',
    ],
    forWho: [
      {
        title: 'Brands',
        body: 'Teams that want a defensible plan for AI search before they hire, reallocate budget, or sign another agency.',
      },
      {
        title: 'Investors',
        body: 'A clear read on a company’s organic position for diligence, the first 100 days, or a value-creation plan.',
      },
    ],
    includes: [
      { title: 'AI visibility baseline', body: 'Where you show up, and how you’re described, across ChatGPT, Perplexity, Gemini, Claude and Google’s AI surfaces for the prompts your buyers actually use.' },
      { title: 'Competitive gap analysis', body: 'Who gets named instead of you, for which questions, and why.' },
      { title: 'Source landscape', body: 'The publications, reviews, communities and pages that shape the answers in your category, and where you’re missing.' },
      { title: 'Site readiness', body: 'Whether AI crawlers can reach, parse and trust your site: technical access, structure, and how clearly your company is defined.' },
      { title: 'Organic search health', body: 'Traditional search still feeds the answer engines. Where you’re strong, where you’re leaking, and what’s at risk.' },
      { title: 'Prioritized roadmap', body: 'Every recommendation ranked by impact and effort, with owners and the experiment that proves it worked.' },
    ],
    process: [
      { title: 'Kickoff', body: 'Goals, competitors, the questions that matter to your buyers, and access to analytics and search data.' },
      { title: 'Research', body: 'Prompt sampling across AI platforms, competitive and source analysis, technical and organic review.' },
      { title: 'Readout', body: 'A working session with your team and leadership. Findings first, then the plan.' },
      { title: 'Roadmap handoff', body: 'The full report and a roadmap your team can start on Monday.' },
    ],
    leaveWith: [
      'An honest AI visibility baseline you can re-measure',
      'A clear view of who’s winning your answers and why',
      'A ranked roadmap with owners and experiments',
      'A leadership-ready readout',
    ],
    faq: [
      { q: 'How long does it take?', a: 'Most audits run three to five weeks, depending on the number of markets, products and competitors in scope.' },
      { q: 'Can my team execute the roadmap?', a: 'That’s the point. It’s written for your team. If you want help, it rolls naturally into advisory or fractional leadership.' },
      { q: 'Do you need access to our tools?', a: 'Read access to analytics and Search Console helps. Everything else I bring.' },
    ],
  },
  {
    slug: 'advisory',
    name: 'Ongoing advisory',
    short: 'A senior operator in your corner every month, with quarterly assessments so the plan never drifts.',
    price: 'From $5k/mo',
    priceValue: 5000,
    priceUnit: 'MON',
    bestFor: 'Teams with execution capacity who want senior judgment',
    format: 'Monthly retainer, optional quarterly assessments',
    lede: 'A senior operator in your corner every month, and a quarterly reset so the plan never drifts.',
    intro: [
      'You have a team and they’re good. What they don’t have is someone who has run this play across dozens of companies, can spot the wrong turn early, and will tell you plainly when something isn’t working.',
      'Advisory gives your leadership and organic team direct access to that judgment, paired with quarterly assessments that re-measure where you stand and reset the roadmap.',
    ],
    forWho: [
      {
        title: 'Marketing leaders',
        body: 'CMOs and heads of growth who own the number and want a sparring partner who’s seen the patterns.',
      },
      {
        title: 'Organic and content teams',
        body: 'Teams executing well who need sharper strategy, better experiments, and an outside read on results.',
      },
      {
        title: 'Portfolio operators',
        body: 'Operating partners who want one advisor across several companies instead of a different agency at each.',
      },
    ],
    includes: [
      { title: 'Monthly strategy sessions', body: 'Working sessions with leadership and the team on priorities, results and next bets.' },
      { title: 'Direct access', body: 'Async access for decisions that shouldn’t wait for the next meeting.' },
      { title: 'Experiment review', body: 'Design, sanity-check and read your organic experiments, then make the call on what to scale.' },
      { title: 'Quarterly assessments', body: 'Re-measure AI visibility and organic performance, then refresh the roadmap.' },
      { title: 'Team and hiring', body: 'Help shaping the team, writing roles, and interviewing the people who’ll run this long-term.' },
    ],
    process: [
      { title: 'Baseline', body: 'We start with an audit or a review of your existing data so advice is grounded in where you actually are.' },
      { title: 'Cadence', body: 'Monthly sessions plus async support, scoped to the team and decisions in front of you.' },
      { title: 'Quarterly reset', body: 'Re-measure, review what worked, kill what didn’t, and re-rank the roadmap.' },
    ],
    leaveWith: [
      'Faster, better-informed decisions',
      'An experimentation practice your team runs on its own',
      'A roadmap that stays current as the market shifts',
      'A stronger team than when we started',
    ],
    faq: [
      { q: 'Is there a minimum term?', a: 'Advisory works best over at least two quarters, long enough for experiments to read out and the habits to stick.' },
      { q: 'Do you do the hands-on work?', a: 'Advisory is strategy, review and coaching. If you need someone running the program day to day, that’s fractional leadership.' },
      { q: 'Can we add quarterly assessments later?', a: 'Yes. Many teams start with monthly advisory and add assessments once the baseline is set.' },
    ],
  },
  {
    slug: 'fractional',
    name: 'Fractional AEO leadership',
    short: 'I join your team and run organic growth and AI search like I own the number. Two companies at a time.',
    price: 'From $150k/yr',
    priceValue: 150000,
    priceUnit: 'ANN',
    bestFor: 'Companies where organic and AI search are strategic',
    format: 'Embedded leadership, annual engagement',
    lede: 'I join your team and run organic growth and AI search like I own the number.',
    intro: [
      'Some companies don’t need advice. They need someone to lead: set the strategy, run the team and agencies, build the operating system, and report to the board on what it’s returning.',
      'I take this on for two companies at a time, total. That limit is the product. It’s how I stay close enough to the work to actually move it.',
    ],
    forWho: [
      {
        title: 'Companies between leaders',
        body: 'You need senior organic and AI search leadership now, and the right full-time hire is months away.',
      },
      {
        title: 'Portfolio companies at an inflection point',
        body: 'A value-creation plan depends on organic growth and there’s no time for a learning curve.',
      },
      {
        title: 'Brands making a category bet',
        body: 'You intend to be the name AI answers give in your category, and you want someone accountable for getting there.',
      },
    ],
    includes: [
      { title: 'Strategy and roadmap ownership', body: 'I own the organic and AI search strategy, the roadmap, and the trade-offs.' },
      { title: 'Team and agency leadership', body: 'Lead your in-house team and manage agencies and freelancers against clear standards.' },
      { title: 'An experimentation operating system', body: 'Build the cadence, tooling and rituals that turn experimentation into a habit, not a project.' },
      { title: 'Measurement and reporting', body: 'AI visibility, organic pipeline and revenue reporting that leadership and the board actually trust.' },
      { title: 'Hire your successor', body: 'Recruit, onboard and hand off to your permanent leader when the time is right.' },
    ],
    process: [
      { title: 'Fit conversation', body: 'With only two seats, we both need to be sure. We talk about goals, team and what success looks like.' },
      { title: 'First 30 days', body: 'Audit, team assessment, and a 90-day plan with clear targets.' },
      { title: 'Operate', body: 'Weekly leadership, monthly reporting, quarterly resets. I run the program alongside your team.' },
      { title: 'Hand off', body: 'Build the team and system to the point where it runs without me.' },
    ],
    leaveWith: [
      'An organic and AI search program that compounds',
      'A team that knows how to run it',
      'Reporting the board trusts',
      'A permanent leader ready to take it forward',
    ],
    faq: [
      { q: 'Why only two?', a: 'Because this is real leadership, not a retainer with a bigger title. Two is the number where I can stay close enough to the work to own the outcome.' },
      { q: 'What if both seats are taken?', a: 'Get in touch anyway. I keep a short waitlist, and an audit or advisory engagement is often the right first step.' },
      { q: 'How much time do you commit?', a: 'Enough to lead: regular presence with the team, weekly leadership involvement, and availability for the decisions that matter.' },
    ],
    seats: { total: 2, open: null },
  },
];

export const proofPoints = [
  { figure: '$4M+', label: 'in ARR attributed to the blog program I helped grow at Jasper' },
  { figure: '20+', label: 'experiments a quarter from the program I built from scratch at Workato' },
  { figure: '2×', label: 'blog traffic at CXL, where I also helped launch CXL Institute' },
  { figure: '35+', label: 'people at the organic growth agency I co-founded and scaled' },
];

export const helpedGrow = ['LinkedIn', 'HubSpot', 'SAP', 'Workato', 'Jasper', 'Gem', 'Search Party'];

export const appearances = [
  { kind: 'Podcast', title: 'SEO Strategies for the New Search World', where: 'Buying Online Businesses, ep. 293' },
  { kind: 'Podcast', title: 'The Impact of AI on Content, Search, Learning, and More', where: 'Learning to Change' },
  { kind: 'Video', title: 'Conversion Rate Optimization the Right Way', where: 'Interview' },
  { kind: 'Video', title: 'How to Win and Manage Enterprise Clients', where: 'Interview' },
  { kind: 'Talk', title: 'Growth marketing panel', where: 'Growth Marketing Stage' },
  { kind: 'Talk', title: 'sTARTUp Day', where: 'Tartu, 2019' },
  { kind: 'Course', title: 'Landing-Page Optimization for Email Marketing', where: 'MarketingProfs' },
  { kind: 'Webinar', title: 'Conversion World, Commerce Now, Content Promotion Summit', where: 'Online conferences' },
];

export const bylines = ['CXL', 'HubSpot', 'Optimizely', 'Shopify', 'Amplitude', 'KlientBoost', 'Instapage', 'Typeform', 'Litmus', 'Kameleoon'];
