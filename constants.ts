import { PricingTier, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Products',
    href: '/products',
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Demo', href: '/demo' },
  { label: 'Resources', href: '/resources' },
  { label: 'About Us', href: '/about' },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Starter',
    price: '$49',
    description: 'Essential AI automation for independent practitioners.',
    features: ['LawYan Grow Basic', 'Client Intake Forms', 'Email Support', '1 User Seat'],
    recommended: false,
  },
  {
    name: 'Professional',
    price: '$129',
    description: 'Advanced workflows for growing firms.',
    features: ['Full LawYan Suite', 'AI Document Automation', 'Priority Support', 'Up to 5 User Seats', 'API Access'],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Scalable infrastructure for global organizations.',
    features: ['Unlimited Seats', 'Dedicated Account Manager', 'Custom AI Training', 'On-premise Deployment', '24/7 Support'],
    recommended: false,
  },
];

export const CONTENT = {
  hero: {
    title: "Relationship intelligence for modern legal teams",
    subtitle: "A new standard for legal relationship management. LawYan helps you track, manage, and grow your firm's most important asset—your network.",
    cta: "Start Free Trial"
  },
  suite: {
    title: "LawYan Suite",
    description: "Transform the client-attorney relationship. A comprehensive set of tools meticulously crafted for legal practices.",
  },
  grow: {
    title: "LawYan Grow",
    description: "Reshape the landscape of client management. Optimize workflows and enhance overall efficiency by automating intake processes.",
  },
  manage: {
    title: "LawYan Manage",
    description: "An all-in-one CRM powered by AI. We optimize custom interactions, organizing cases, and gaining actionable insights.",
  },
  apps: {
    title: "App Directory",
    description: "Navigate your trusted AI CRM SaaS solution. Connect with the tools you already use to create a bespoke operating system.",
  }
};

export const INTEGRATIONS = [
  {
    category: "Communication",
    items: [
      { name: "Microsoft Outlook", description: "Sync emails and calendars seamlessly.", icon: "Mail" },
      { name: "Slack", description: "Real-time case notifications in your channels.", icon: "MessageSquare" },
      { name: "Gmail", description: "Two-way email sync for client correspondence.", icon: "Mail" },
      { name: "Zoom", description: "Auto-schedule client meetings and consultations.", icon: "Video" }
    ]
  },
  {
    category: "Practice Management",
    items: [
      { name: "Clio", description: "Sync matters, contacts, and invoices.", icon: "Briefcase" },
      { name: "MyCase", description: "Unified document and workflow management.", icon: "Folder" },
      { name: "PracticePanther", description: "Automated billing and time tracking integration.", icon: "Clock" }
    ]
  },
  {
    category: "Financial",
    items: [
      { name: "Stripe", description: "Secure credit card processing for retainers.", icon: "CreditCard" },
      { name: "QuickBooks", description: "Automated accounting and expense tracking.", icon: "DollarSign" },
      { name: "LawPay", description: "compliance-ready legal payment processing.", icon: "CreditCard" }
    ]
  }
];

export const CHANGELOG = [
  {
    version: "v2.4.0",
    date: "October 24, 2025",
    title: "The Intelligence Update",
    type: "Major",
    changes: [
      "Introduced LawYan AI Assistant for predictive case analysis.",
      "New 'Smart Draft' feature for automated document generation.",
      "Enhanced natural language search across all case files.",
      "Fixed an issue with calendar timezone synchronization."
    ]
  },
  {
    version: "v2.3.5",
    date: "September 12, 2025",
    title: "Client Portal Enhancements",
    type: "Improvement",
    changes: [
      "Secure file sharing directly through the client portal.",
      "Real-time status updates for clients via SMS.",
      "Improved mobile responsiveness for intake forms."
    ]
  },
  {
    version: "v2.3.0",
    date: "August 5, 2025",
    title: "Analytics Dashboard",
    type: "Feature",
    changes: [
      "New firm-wide performance analytics dashboard.",
      "Customizable reporting widgets for revenue and billable hours.",
      "Export capabilities to PDF and Excel."
    ]
  },
  {
    version: "v2.2.1",
    date: "July 15, 2025",
    title: "Performance & Security",
    type: "Fix",
    changes: [
      "SOC 2 Type II compliance updates.",
      "Faster load times for large document sets.",
      "Minor bug fixes in the billing module."
    ]
  }
];