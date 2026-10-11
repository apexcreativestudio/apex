export interface ServiceDetail {
  slug: string;
  title: string;
  category: 'BRAND' | 'CREATIVE' | 'DIGITAL' | 'GROWTH';
  shortDescription: string;
  heroStatement: string;
  capabilities: string[];
  deliverables: string[];
  process: { step: string; name: string; desc: string }[];
  whyItMatters: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  // 1. BRANDING
  {
    slug: 'branding',
    title: 'Branding',
    category: 'BRAND',
    shortDescription: 'Engineering unshakeable visual identity systems, brand governance, and strategic positioning.',
    heroStatement: 'A brand is not a logo. It is a precise visual language and emotional contract engineered to command attention.',
    capabilities: [
      'Brand Strategy & Positioning Blueprint',
      'Primary & Secondary Logo System Architecture',
      'Official Signature Color Science & Palette Design',
      'Typography Hierarchy & Custom Font Governance',
      'Brand Governance Portals & Clear-Space Guidelines'
    ],
    deliverables: [
      'Master Visual Identity Specification PDF',
      'High-Resolution Vector Logo Lockup Assets',
      'Centralized Digital Brand Token Portal',
      'Comprehensive Clear-Space & Usage Protocol'
    ],
    process: [
      { step: '01', name: 'Audit & Positioning', desc: 'Deconstructing industry visual signals and defining your unique market space.' },
      { step: '02', name: 'Identity Synthesis', desc: 'Crafting geometric wordmarks, color science, and typographic hierarchy.' },
      { step: '03', name: 'System Governance', desc: 'Packaging non-negotiable rules and asset maps for global consistency.' }
    ],
    whyItMatters: 'In a noisy digital landscape, precise brand identity eliminates confusion and establishes instant market authority.'
  },

  // 2. GRAPHIC DESIGN
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    category: 'CREATIVE',
    shortDescription: 'High-impact visual art direction for print, digital media, packaging, and editorial graphics.',
    heroStatement: 'Transforming complex ideas into bold, precise graphic visual statements.',
    capabilities: [
      'Editorial & Publication Layout Design',
      'Packaging & Product Surface Design',
      'Marketing Key Visual Art Direction',
      'Vector Illustration & Iconography Systems',
      'Exhibition & Event Surface Graphics'
    ],
    deliverables: [
      'Print-Ready High-Res Master Files',
      'Vector Graphics & Custom Icon Sets',
      'Digital Banner & Surface Assets',
      'Production Print Specifications'
    ],
    process: [
      { step: '01', name: 'Concept Grid', desc: 'Establishing spatial grid structure, composition, and visual focal points.' },
      { step: '02', name: 'Art Direction', desc: 'Executing bold typography, photography treatment, and geometric balance.' },
      { step: '03', name: 'Production Polish', desc: 'Exporting print-ready PDF/X vectors and color-profiled digital files.' }
    ],
    whyItMatters: 'Precise graphic design ensures every brand collateral touchpoint feels intentional and expensive.'
  },

  // 3. SOCIAL MEDIA MARKETING
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    category: 'GROWTH',
    shortDescription: 'Strategic content architecture, visual feed design, and community engagement systems.',
    heroStatement: 'Building social media presence through editorial visual craft and disciplined campaign scheduling.',
    capabilities: [
      'Social Visual Language & Feed Design',
      'Editorial Content Calendar Architecture',
      'Channel-Specific Motion Graphics & Reels',
      'Community Engagement Frameworks',
      'Social Campaign Strategy & Execution'
    ],
    deliverables: [
      'Monthly Visual Content Libraries',
      'Custom Motion Reels & Short-Form Video',
      'Copywriting & Hashtag Taxonomies',
      'Performance Analytics Dashboards'
    ],
    process: [
      { step: '01', name: 'Channel Blueprint', desc: 'Defining channel-specific visual tone, posting rhythms, and pillar topics.' },
      { step: '02', name: 'Content Production', desc: 'Creating high-production short-form video, motion cards, and carousels.' },
      { step: '03', name: 'Execution & Iteration', desc: 'Deploying content, analyzing engagement signals, and refining creative.' }
    ],
    whyItMatters: 'Social channels are the daily front door of modern brands; visual craft builds lasting trust.'
  },

  // 4. PERFORMANCE MARKETING
  {
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    category: 'GROWTH',
    shortDescription: 'Data-driven paid media campaigns across search, social, and display channels.',
    heroStatement: 'Fusing high-converting visual creative with rigorous audience targeting and algorithmic optimization.',
    capabilities: [
      'Multi-Channel Paid Search & Social Architecture',
      'Conversion Rate Creative Optimization (CRO)',
      'Audience Segmentation & Intent Targeting',
      'A/B Creative Testing Pipelines',
      'ROAS & CAC Measurement Frameworks'
    ],
    deliverables: [
      'Ad Creative Matrices (Static & Video)',
      'Campaign Architecture Diagrams',
      'Custom Conversion Landing Pages',
      'Real-Time Performance Dashboards'
    ],
    process: [
      { step: '01', name: 'Funnel Audit', desc: 'Mapping audience intent signals and high-converting landing touchpoints.' },
      { step: '02', name: 'Creative Testing', desc: 'Deploying variant hooks, headlines, and visual assets to test resonance.' },
      { step: '03', name: 'Algorithmic Scaling', desc: 'Allocating capital to winning creatives and optimizing bidding algorithms.' }
    ],
    whyItMatters: 'Performance marketing without high-end creative fails to stand out; combining both yields sustainable growth.'
  },

  // 5. SEO
  {
    slug: 'seo',
    title: 'SEO (Search Engine Optimization)',
    category: 'GROWTH',
    shortDescription: 'Technical search engine optimization, content architecture, and authority building.',
    heroStatement: 'Engineering organic search visibility through technical precision, structured data, and high-value content.',
    capabilities: [
      'Technical SEO Audit & Infrastructure Optimization',
      'Semantic Keyword Research & Entity Mapping',
      'On-Page Schema Markup & Structured Data',
      'Content Architecture & Internal Link Topology',
      'Core Web Vitals & Speed Optimization'
    ],
    deliverables: [
      'Technical SEO Remediation Roadmap',
      'Structured Schema.org Implementations',
      'Content Gap Analysis Reports',
      'Monthly Organic Growth Analytics'
    ],
    process: [
      { step: '01', name: 'Technical Audit', desc: 'Inspecting indexability, crawl budget, canonicals, and Core Web Vitals.' },
      { step: '02', name: 'Keyword Topology', desc: 'Mapping high-intent search queries to dedicated landing page architectures.' },
      { step: '03', name: 'Authority Engine', desc: 'Publishing comprehensive authority content and optimizing structured data.' }
    ],
    whyItMatters: 'Organic search creates a defensible, long-term compound asset that brings qualified intent visitors.'
  },

  // 6. CONTENT MARKETING
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    category: 'CREATIVE',
    shortDescription: 'Authority-building editorial strategy, long-form articles, whitepapers, and brand journalism.',
    heroStatement: 'Positioning your brand as an industry thought leader through deep, strategic editorial storytelling.',
    capabilities: [
      'Editorial Strategy & Publication Planning',
      'Long-Form Research Articles & Case Insights',
      'Whitepapers, Ebooks & Industry Reports',
      'Content Distribution & Syndication Frameworks',
      'Brand Journalism & Executive Thought Leadership'
    ],
    deliverables: [
      'Quarterly Editorial Calendars',
      'Fully Researched & Formatted Articles',
      'Downloadable PDF Guides & Whitepapers',
      'Repurposed Social Content Kits'
    ],
    process: [
      { step: '01', name: 'Topic Discovery', desc: 'Uncovering deep industry pain points, search trends, and narrative opportunities.' },
      { step: '02', name: 'Editorial Writing', desc: 'Crafting authoritative, well-researched prose aligned with brand voice.' },
      { step: '03', name: 'Multi-Channel Distribution', desc: 'Formatting articles for web, email newsletters, and executive LinkedIn posts.' }
    ],
    whyItMatters: 'High-value editorial content builds deep customer trust long before a sales conversation begins.'
  },

  // 7. DIGITAL ADVERTISING
  {
    slug: 'digital-advertising',
    title: 'Digital Advertising',
    category: 'GROWTH',
    shortDescription: 'High-impact display ads, programmatic visual campaigns, and digital billboard placements.',
    heroStatement: 'Capturing market attention across high-traffic digital networks with striking visual creative.',
    capabilities: [
      'Programmatic Display Ad Creative Design',
      'Rich Media & Interactive HTML5 Ads',
      'Retargeting & Sequential Messaging Pipelines',
      'Native Advertising Strategy',
      'Digital Out-Of-Home (DOOH) Creative'
    ],
    deliverables: [
      'Multi-Format Display Ad Packages',
      'Animated HTML5 & Motion Ad Banners',
      'Campaign Retargeting Architecture',
      'Ad Performance Measurement Reports'
    ],
    process: [
      { step: '01', name: 'Placement Mapping', desc: 'Identifying high-impact publisher environments and ad dimensions.' },
      { step: '02', name: 'Ad Creative Design', desc: 'Designing attention-grabbing visual typography and clear CTA buttons.' },
      { step: '03', name: 'Deployment & Optim', desc: 'Launching across DSPs, monitoring CTR, and refreshing creative variants.' }
    ],
    whyItMatters: 'Digital advertising extends brand reach into key digital venues with consistent visual authority.'
  },

  // 8. WEBSITE DESIGN
  {
    slug: 'website-design',
    title: 'Website Design',
    category: 'DIGITAL',
    shortDescription: 'Next-gen web design, responsive UI/UX architecture, design token systems, and web flagships.',
    heroStatement: 'Crafting modern, responsive web flagships that wow visitors with stunning aesthetics and seamless UX.',
    capabilities: [
      'Bespoke Web UI/UX Architecture',
      'Design Token Systems & Component Libraries',
      'Responsive Desktop & Mobile Layout Engineering',
      'Interactive Micro-Animations & Page Motion',
      'Accessibility (WCAG) & Speed Optimization'
    ],
    deliverables: [
      'Figma Master Component Design File',
      'Production-Ready Next.js & React Code',
      'Design System Documentation',
      'Lighthouse 90+ Speed & Accessibility Compliance'
    ],
    process: [
      { step: '01', name: 'UX Blueprint', desc: 'Wireframing user journeys, information architecture, and core CTA paths.' },
      { step: '02', name: 'UI & Motion Design', desc: 'Applying Montserrat/Inter typography, color tokens, and subtle motion.' },
      { step: '03', name: 'Frontend Build', desc: 'Building responsive, accessible React components with zero performance bloat.' }
    ],
    whyItMatters: 'Your website is your global flagship digital headquarters; exceptional design converts visitors into clients.'
  },

  // 9. E-COMMERCE
  {
    slug: 'ecommerce',
    title: 'E-Commerce Experience',
    category: 'DIGITAL',
    shortDescription: 'High-converting digital storefronts, product configurators, and seamless checkout flows.',
    heroStatement: 'Building digital shopping experiences that combine editorial visual presentation with frictionless commerce.',
    capabilities: [
      'Custom Storefront UI/UX Architecture',
      'Interactive 3D & 360° Product Showcase',
      'Frictionless Cart & Checkout Flow Design',
      'Inventory & ERP System Integration',
      'Mobile-First Commerce Optimization'
    ],
    deliverables: [
      'Bespoke E-Commerce Storefront Code',
      'Product Detail Page (PDP) Layout Templates',
      'Custom Cart Drawer & Micro-Interactions',
      'Analytics & Conversion Tracking Setup'
    ],
    process: [
      { step: '01', name: 'Shopping Journey Mapping', desc: 'Designing product discovery, filtering, and seamless one-click checkout.' },
      { step: '02', name: 'Storefront Craft', desc: 'Designing high-res product galleries, typography, and promotional banners.' },
      { step: '03', name: 'Launch & CRO', desc: 'Optimizing page speed, testing payment gateways, and tracking conversion funnels.' }
    ],
    whyItMatters: 'E-commerce success hinges on combining luxury visual presentation with instant, frictionless purchasing.'
  },

  // 10. VIDEO EDITING
  {
    slug: 'video-editing',
    title: 'Video Editing',
    category: 'CREATIVE',
    shortDescription: 'Cinematic video editing, color grading, audio post-production, and brand story reels.',
    heroStatement: 'Cutting raw footage into compelling, rhythmic video narratives engineered for digital screens.',
    capabilities: [
      'Commercial & Brand Documentary Editing',
      'Cinematic Color Grading (LUT Development)',
      'Audio Design & Sound Mixing',
      'Multi-Format Aspect Ratio Conversions (16:9, 9:16, 1:1)',
      'Subtitling & Graphic Overlay Integration'
    ],
    deliverables: [
      'Master 4K/1080p Export Video Files',
      'Social Media Cutdowns (15s, 30s, 60s)',
      'Color Graded Master Files',
      'Audio Stem Files'
    ],
    process: [
      { step: '01', name: 'Assembly Cut', desc: 'Selecting story beats, organizing raw takes, and establishing pacing.' },
      { step: '02', name: 'Color & Sound Grade', desc: 'Applying brand color profiles, ambient sound effects, and voice mixing.' },
      { step: '03', name: 'Multi-Format Render', desc: 'Exporting optimized video files tailored for web, broadcast, and social.' }
    ],
    whyItMatters: 'Video is the dominant medium on modern screens; precise editing captures attention within seconds.'
  },

  // 11. MOTION GRAPHICS
  {
    slug: 'motion-graphics',
    title: 'Motion Graphics',
    category: 'CREATIVE',
    shortDescription: '2D & 3D motion design, animated logo reveals, title sequences, and UI motion graphics.',
    heroStatement: 'Bringing brand visual identities to life with fluid, purposeful animation and kinetic typography.',
    capabilities: [
      '2D & 3D Animated Logo Ident Lockups',
      'Kinetic Typography & Title Sequences',
      'Explainer & UI Interface Motion Design',
      'Signature Gradient Shader Animations',
      'Broadcast & Social Motion Graphics Systems'
    ],
    deliverables: [
      'Lottie & JSON Web Motion Animations',
      'ProRes & MP4 High-Res Video Exports',
      'Motion Template Design Files',
      'Brand Motion Guidelines Document'
    ],
    process: [
      { step: '01', name: 'Storyboard & Styleframe', desc: 'Designing static keyframes to establish motion rhythm and visual style.' },
      { step: '02', name: 'Animation Physics', desc: 'Applying precise cubic-bezier easing curves, spatial motion, and lighting.' },
      { step: '03', name: 'Web & Video Package', desc: 'Exporting lightweight Lottie web files and high-bitrate video renders.' }
    ],
    whyItMatters: 'Motion adds kinetic energy and modern polish, elevating static graphics into dynamic brand moments.'
  },

  // 12. PRODUCT PHOTOGRAPHY
  {
    slug: 'product-photography',
    title: 'Product Photography',
    category: 'CREATIVE',
    shortDescription: 'Studio product photography, macro lighting, lifestyle art direction, and digital retouching.',
    heroStatement: 'Capturing the tangible quality of products through precise studio lighting and high-resolution retouching.',
    capabilities: [
      'Clean Studio Macro Product Photography',
      'Lifestyle & Contextual Art Direction',
      '360-Degree Product Spin Imagery',
      'High-End Digital Retouching & Color Matching',
      'E-Commerce Catalog Image Pipelines'
    ],
    deliverables: [
      'High-Resolution Master Retouched TIFFs',
      'Web-Optimized WebP & PNG Product Assets',
      'Transparent Background Cutouts',
      'Color-Matched Product Catalog Shots'
    ],
    process: [
      { step: '01', name: 'Lighting & Styling', desc: 'Setting up multi-light arrays to highlight material texture and contours.' },
      { step: '02', name: 'High-Res Capture', desc: 'Shooting tethered high-resolution stills with focus-stacking accuracy.' },
      { step: '03', name: 'Retouching & Color', desc: 'Cleaning dust, color matching to physical specs, and shadow blending.' }
    ],
    whyItMatters: 'High-end imagery builds consumer confidence and communicates craftsmanship.'
  },

  // 13. INFLUENCER MARKETING
  {
    slug: 'influencer-marketing',
    title: 'Influencer Marketing',
    category: 'GROWTH',
    shortDescription: 'Creator relationship architecture, campaign briefs, brand alignment, and content amplification.',
    heroStatement: 'Connecting brands with influential creator voices through authentic briefs and disciplined campaign management.',
    capabilities: [
      'Creator Alignment & Vetting Strategy',
      'Campaign Creative Brief Architecture',
      'Contract Negotiation & Brand Usage Rights',
      'Content Co-Creation & Quality Control',
      'Attribution & Campaign Reach Tracking'
    ],
    deliverables: [
      'Vetted Creator Roster Recommendations',
      'Standard Operating Creative Briefs',
      'Co-Branded Video & Image Assets',
      'Campaign Engagement & ROI Reports'
    ],
    process: [
      { step: '01', name: 'Creator Discovery', desc: 'Scouting creator audiences for genuine alignment with brand values.' },
      { step: '02', name: 'Brief & Co-Creation', desc: 'Providing clear creative guidelines while preserving creator authenticity.' },
      { step: '03', name: 'Tracking & Amplif.', desc: 'Amplifying top creator posts via paid media to maximize campaign ROI.' }
    ],
    whyItMatters: 'Authentic creator advocacy provides peer validation and expands brand awareness into new demographics.'
  },

  // 14. EMAIL MARKETING
  {
    slug: 'email-marketing',
    title: 'Email Marketing',
    category: 'GROWTH',
    shortDescription: 'Lifecycle email automation, newsletter design, list segmentation, and retention campaigns.',
    heroStatement: 'Building long-term customer relationships with editorial newsletter design and automated lifecycle sequences.',
    capabilities: [
      'Automated Welcome & Retention Sequences',
      'Custom HTML/CSS Email Template Design',
      'List Segmentation & Lifecycle Personalization',
      'Deliverability & Domain Reputation Management',
      'A/B Subject Line & Creative Testing'
    ],
    deliverables: [
      'Responsive HTML Email Templates',
      'Automated Workflow Logic Maps',
      'Copywriting & Visual Content Kits',
      'Engagement & Revenue Tracking Metrics'
    ],
    process: [
      { step: '01', name: 'Sequence Mapping', desc: 'Designing trigger events for onboarding, win-back, and transactional emails.' },
      { step: '02', name: 'Template Craft', desc: 'Designing mobile-responsive email layouts matching official brand fonts.' },
      { step: '03', name: 'Automation & Testing', desc: 'Setting up ESP automation, testing inbox rendering, and optimizing send times.' }
    ],
    whyItMatters: 'Email is a direct owned communication line with your highest-value audience.'
  },

  // 15. LEAD GENERATION
  {
    slug: 'lead-generation',
    title: 'Lead Generation',
    category: 'GROWTH',
    shortDescription: 'B2B lead generation funnels, gated content assets, qualification systems, and CRM integrations.',
    heroStatement: 'Engineered lead acquisition systems that attract, qualify, and route high-value business prospects.',
    capabilities: [
      'High-Intent Landing Page Architecture',
      'Gated Lead Magnet Strategy (Whitepapers, Calculators)',
      'Multi-Step Lead Qualification Form Design',
      'CRM Integration (HubSpot, Salesforce, Pipedrive)',
      'Lead Scoring & Automated Nurture Flows'
    ],
    deliverables: [
      'High-Converting Custom Lead Landing Pages',
      'Interactive Assessment / Calculator Tools',
      'Automated CRM Lead Routing Workflows',
      'Cost-Per-Qualified-Lead Reporting'
    ],
    process: [
      { step: '01', name: 'Value Prop Definition', desc: 'Creating irresistible lead magnets aligned with buyer intent.' },
      { step: '02', name: 'Funnels Engineering', desc: 'Building fast landing pages with multi-step qualification questions.' },
      { step: '03', name: 'CRM Integration', desc: 'Connecting lead submissions directly into sales team CRM workflows.' }
    ],
    whyItMatters: 'Predictable lead generation fuels business expansion with steady, qualified opportunities.'
  },

  // 16. ANALYTICS & REPORTING
  {
    slug: 'analytics-reporting',
    title: 'Analytics & Reporting',
    category: 'GROWTH',
    shortDescription: 'Data architecture, conversion measurement, attribution modeling, and executive dashboards.',
    heroStatement: 'Transforming raw digital interaction signals into clear, actionable business growth intelligence.',
    capabilities: [
      'Google Analytics 4 (GA4) & Tag Manager Setup',
      'Custom Conversion Event Tracking Infrastructure',
      'Multi-Touch Attribution Modeling',
      'Real-Time Executive Data Dashboards',
      'Funnel Drop-Off & Behavioral Analysis'
    ],
    deliverables: [
      'GA4 / GTM Configuration Specifications',
      'Live Executive Looker / PowerBI Dashboards',
      'Monthly Data Insight Reports',
      'Conversion Optimization Recommendations'
    ],
    process: [
      { step: '01', name: 'Data Taxonomies', desc: 'Defining exact user interaction events, conversion goals, and parameters.' },
      { step: '02', name: 'Tag Infrastructure', desc: 'Configuring server-side tracking, GTM triggers, and privacy controls.' },
      { step: '03', name: 'Dashboard Build', desc: 'Building clear visual dashboards summarizing traffic, intent, and ROI.' }
    ],
    whyItMatters: 'Accurate data measurement removes guesswork, allowing confident allocation of marketing capital.'
  },

  // 17. CREATIVE STRATEGY
  {
    slug: 'creative-strategy',
    title: 'Creative Strategy',
    category: 'BRAND',
    shortDescription: 'Brand positioning, competitive white-space discovery, creative briefs, and campaign architecture.',
    heroStatement: 'Where strategic rigor meets creative imagination: defining the core narrative that moves markets.',
    capabilities: [
      'Competitive Landscape & Cultural Trend Audits',
      'Brand Platform & Mission Definition',
      'Master Creative Campaign Briefs',
      'Omnichannel Narrative Architecture',
      'Messaging Frameworks & Tone of Voice Guidelines'
    ],
    deliverables: [
      'Master Creative Strategy Deck',
      'Brand Messaging Hierarchy Document',
      'Campaign Creative Brief Standards',
      'Strategic Position Maps'
    ],
    process: [
      { step: '01', name: 'Discovery & Audit', desc: 'Uncovering deep market truths, cultural shifts, and competitor gaps.' },
      { step: '02', name: 'Narrative Framing', desc: 'Defining the central creative big idea and messaging pillars.' },
      { step: '03', name: 'Execution Roadmap', desc: 'Translating strategy into actionable creative briefs across design and digital.' }
    ],
    whyItMatters: 'Without strategy, creative work is merely decoration; with strategy, it becomes a commercial catalyst.'
  },

  // 18. ONLINE REPUTATION MANAGEMENT
  {
    slug: 'online-reputation-management',
    title: 'Online Reputation Management',
    category: 'GROWTH',
    shortDescription: 'Brand sentiment monitoring, executive perception protection, and search result control.',
    heroStatement: 'Protecting and shaping public brand perception through active search landscape control and narrative framing.',
    capabilities: [
      'Search Engine Results Page (SERP) Suppression & Control',
      'Brand Sentiment & Media Monitoring Systems',
      'Executive Digital Footprint Audits',
      'Crisis Communication Creative Support',
      'Review Management & Feedback Architecture'
    ],
    deliverables: [
      'Digital Reputation Audit Reports',
      'Positive Brand Asset Search Ecosystems',
      'Real-Time Sentiment Alert Systems',
      'Executive Perception Guidelines'
    ],
    process: [
      { step: '01', name: 'Perception Audit', desc: 'Analyzing search results, news mentions, and digital footprint risks.' },
      { step: '02', name: 'Asset Engineering', desc: 'Publishing authoritative owned brand properties to occupy page-one search results.' },
      { step: '03', name: 'Continuous Monitoring', desc: 'Tracking sentiment changes and proactively mitigating brand risk.' }
    ],
    whyItMatters: 'Your online reputation precedes every partnership; controlling your narrative protects brand equity.'
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find(s => s.slug === slug);
}
