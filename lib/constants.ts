export const SITE = {
  name: "Eleware AI",
  tagline: "Turning LinkedIn into a predictable pipeline.",
  url: "https://eleware.ai",
  calendly: "https://calendly.com/abdullahhijazi69/discovery-call-eleware-ai",
  linkedin: "https://www.linkedin.com/in/abdullah-hijazi-836143260/",
  founder: {
    name: "Abdullah Hijazi",
    role: "Founder, Eleware AI",
    location: "Islamabad, Pakistan",
  },
} as const;

export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Method", href: "#method" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
] as const;

export const HERO = {
  eyebrow: "Done For You",
  headlineWhite: "Your calendar.",
  headlinePurple: "Full of qualified calls.",
  subhead:
    "We run your entire LinkedIn outreach system end-to-end. You show up to calls. We handle everything else.",
  audienceTag: "For executive & leadership consultants",
  primaryCTA: "Book your free call",
  stats: [
    { value: "20+", label: "qualified calls" },
    { value: "50 days", label: "guaranteed" },
    { value: "6mo+", label: "avg retention" },
  ],
} as const;

export const PROBLEM = {
  number: "01",
  eyebrow: "The Problem",
  headline: "Your pipeline is inconsistent. Not your service.",
  body: [
    "You're exceptional at what you do — but chasing leads wastes your best hours.",
    "You post, you reach out, you follow up — but the pipeline stays unpredictable.",
    "Every week without a booked call is revenue you'll never get back.",
  ],
  stat: { value: "1–3%", label: "avg booked-call rate, cold outreach" },
} as const;

export const WHAT_WE_DO = {
  number: "02",
  eyebrow: "What We Do",
  headline: "We run it. You show up to the call.",
  subhead:
    "Every part of your LinkedIn system — managed end-to-end by our team.",
  services: [
    "LinkedIn profile optimised for executive-level credibility",
    "Ideal client targeting & Dream 20 prospect list built monthly",
    "Personalised outreach sequences managed for you",
    "Objection handling & DM conversation management",
    "Qualified appointments booked directly to your calendar",
    "Weekly Loom update + bi-weekly strategy call",
  ],
} as const;

export const METHOD = {
  number: "03",
  eyebrow: "Our Method",
  headline: "We don't pitch. We build trust — one gate at a time.",
  gates: [
    {
      id: "G1",
      title: "Attention",
      description: "We break their scroll with a human, specific opener.",
    },
    {
      id: "G2",
      title: "Relevance",
      description:
        "We mirror their situation back. They see themselves in the message.",
    },
    {
      id: "G3",
      title: "Discovery",
      description: "We ask the right questions. They open up.",
    },
    {
      id: "G4",
      title: "Proof",
      description: "We share a peer result. Scepticism drops.",
    },
    {
      id: "G5",
      title: "Offer",
      description: "We present your service — framed around their outcome.",
    },
    {
      id: "G6",
      title: "Commitment",
      description: "They book. You show up.",
    },
  ],
} as const;

export const WHAT_YOU_GET = {
  number: "04",
  eyebrow: "What You Get",
  headline: "Predictable pipeline. No guesswork.",
  timeline: [
    {
      milestone: "Week 1",
      description: "Profile optimised, targeting locked, outreach live",
    },
    {
      milestone: "Month 1",
      description: "4–6 qualified calls booked — pipeline building",
    },
    {
      milestone: "Month 2",
      description: "8–12 qualified calls per month, consistently",
    },
    {
      milestone: "Month 3+",
      description: "Predictable, scalable lead flow — ready to grow",
    },
  ],
  stats: [
    { value: "20+", label: "qualified calls in 50 days" },
    { value: "30-40%", label: "booked-call rate" },
    { value: "6mo+", label: "average client retention" },
  ],
} as const;

export const FOUNDER = {
  eyebrow: "Meet The Founder",
  name: "Abdullah Hijazi",
  role: "Founder, Eleware AI",
  bio: [
    "I started Eleware AI because I was tired of seeing world-class consultants struggle with inconsistent pipelines while doing world-class work.",
    "While running outreach across multiple US-based client accounts, I saw the same pattern: great service, terrible pipeline. So I built the system I wished existed.",
    "Today, we run done-for-you LinkedIn appointment setting for coaches, B2B founders, and executive consultants — and we guarantee outcomes, not effort.",
  ],
  stats: [
    { value: "2,700+", label: "personalised connections sent" },
    { value: "32%", label: "average acceptance rate" },
    { value: "215+", label: "positive replies generated" },
  ],
  imageSrc: "/images/abdullah.jpg",
  imageAlt: "Abdullah Hijazi, Founder of Eleware AI",
} as const;

export const CLIENT_RESULT = {
  number: "05",
  eyebrow: "Client Result",
  headline: "0 to 4 qualified calls per week. In 30 days.",
  topStats: [
    { value: "4+", label: "calls/week" },
    { value: "30", label: "days" },
    { value: "6+", label: "months retained" },
  ],
  problems: {
    title: "The Problem",
    items: [
      "Profile not optimised — low acceptance rate",
      "Weak positioning, generic openers",
      "Reaching wrong people — wrong price point",
      "Couldn't convert DMs into booked calls",
    ],
  },
  solutions: {
    title: "What We Did",
    items: [
      "Full profile audit & rewrite",
      "Rebuilt ICP — right prospects, right price",
      "Rewrote openers — personal, not salesy",
      "DM tone trained to build trust first",
    ],
  },
  testimonials: [
    {
      quote: "Placeholder testimonial — replace with real quote.",
      name: "Client Name",
      role: "Role",
      company: "Company",
      metric: "Specific result",
    },
    {
      quote: "Placeholder testimonial — replace with real quote.",
      name: "Client Name",
      role: "Role",
      company: "Company",
      metric: "Specific result",
    },
  ],
} as const;

export const LIVE_RESULTS = {
  number: "06",
  eyebrow: "Live Results",
  headline: "Real dashboards. Real numbers. Real clients.",
  subhead:
    "Anonymized snapshots from active client accounts — currently running. Names removed for privacy. Numbers untouched.",
  aggregateStats: [
    { value: "2,700+", label: "Connections sent across all accounts" },
    { value: "874+", label: "Total accepted invitations" },
    { value: "215+", label: "Positive replies generated" },
    { value: "5+", label: "Active client accounts" },
  ],
  // Mixed real PNGs + SVG placeholders. dashboard-1 is the real anonymized
  // screenshot at .png; dashboard-2 and dashboard-3 are still SVG mockups
  // until you provide their PNGs. To replace either remaining placeholder:
  // drop dashboard-N.png into /public/images/dashboards/ and change the
  // "src" below from ".svg" to ".png".
  dashboards: [
    {
      src: "/images/dashboards/dashboard-1.png",
      alt: "Anonymized client dashboard — 30 day performance",
      label: "Executive Coach",
      duration: "30 days",
      highlights: [
        { value: "335", label: "invites sent" },
        { value: "119", label: "accepted (35%)" },
        { value: "25", label: "replies" },
      ],
    },
    {
      src: "/images/dashboards/dashboard-2.svg",
      alt: "Anonymized client dashboard — 4 month performance",
      label: "Leadership Consultant",
      duration: "4 months",
      highlights: [
        { value: "1,235", label: "invites sent" },
        { value: "422", label: "accepted (34%)" },
        { value: "121", label: "replies" },
      ],
    },
    {
      src: "/images/dashboards/dashboard-3.svg",
      alt: "Anonymized client dashboard — 30 day performance",
      label: "B2B Founder",
      duration: "30 days",
      highlights: [
        { value: "366", label: "invites sent" },
        { value: "113", label: "accepted (31%)" },
        { value: "25", label: "replies" },
      ],
    },
  ],
} as const;

export const WHO_ITS_FOR = {
  number: "07",
  eyebrow: "Who This Is For",
  headline: "Built for consultants who are ready to scale.",
  forYou: {
    title: "For You",
    items: [
      "Executive or leadership consultant with a $3,000+ offer",
      "Already getting results — pipeline is just inconsistent",
      "Done with generic outreach that damages your brand",
      "Want qualified calls without building a sales team",
    ],
  },
  notForYou: {
    title: "Not For You",
    items: [
      "You're still figuring out your offer or niche",
      "You want overnight results without a real service",
      "You're not willing to show up to discovery calls",
    ],
  },
} as const;

export const GUARANTEE = {
  number: "08",
  eyebrow: "Our Guarantee",
  headline: "20+ qualified calls in 50 days.",
  subheadline: "Or we work free until we deliver.",
  body: "No excuses. No fine print. No grey areas.",
  terms: [
    "Minimum 3-month engagement",
    "Month-to-month available after",
    "$3,000+ offer required",
    "Performance add-on: +$100 per qualified call above guarantee",
  ],
} as const;

export const FAQS = [
  {
    q: "How fast will I see results?",
    a: "Most clients see their first qualified call within the first 2 weeks. Our 50-day guarantee ensures you see real outcomes within that window.",
  },
  {
    q: "Do I need to be active on LinkedIn?",
    a: "No. We handle 100% of the outreach. You only show up to the booked calls.",
  },
  {
    q: "What if you don't deliver?",
    a: "If we don't book 20+ qualified calls in 50 days, we keep working — at no extra cost — until we do.",
  },
  {
    q: "Who handles the actual conversations?",
    a: "Our trained appointment setters, working from your profile under your brand voice. You review messaging weekly via Loom updates.",
  },
  {
    q: "What's the investment?",
    a: "We share pricing on the discovery call once we understand your offer and ICP. Minimum offer requirement: $3,000+.",
  },
  {
    q: "Can you work with my existing CRM?",
    a: "Yes. We integrate with HubSpot, Pipedrive, GoHighLevel, and most major CRMs.",
  },
  {
    q: "What's the engagement length?",
    a: "Minimum 3 months to allow the system to deliver. Month-to-month available after.",
  },
] as const;

export const FINAL_CTA = {
  eyebrow: "Ready?",
  headline: "Let's fill your calendar.",
  subhead: "Book a free 20-minute discovery call.",
  body: "No pitch — just clarity on what's blocking your pipeline and whether we're the right fit.",
  cta: "Book your free call",
  calendlyDisplay: "calendly.com/abdullahhijazi69/discovery-call-eleware-ai",
} as const;

export const FOOTER_DATA = {
  tagline: "Turning LinkedIn into a predictable pipeline.",
  links: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Method", href: "#method" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ],
  copyright: `© ${new Date().getFullYear()} Eleware AI. All rights reserved.`,
  attribution: "eleware.ai · Abdullah Hijazi · Founder",
} as const;
