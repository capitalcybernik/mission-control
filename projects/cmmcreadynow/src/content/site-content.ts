export const siteContent = {
  brand: {
    name: 'CMMC Ready Now',
    tagline: 'by Capital Cyber Compliance',
    logo: '/logo.svg',
    contactEmail: 'mgmt@capital-cyber.com',
  },

  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  home: {
    hero: {
      headline: 'CMMC Compliance Made Simple, Automated, and Affordable',
      subheadline:
        'Protect your organization and the defense industrial base with a platform built by security practitioners who understand the mission.',
      cta: { label: 'Get Started Today', href: '/contact' },
      secondaryCta: { label: 'Explore Services', href: '/services' },
    },
    servicesOverview: {
      headline: 'Everything You Need for CMMC Success',
      subtitle:
        'From initial assessment to ongoing compliance tracking, we provide the tools and expertise to get you audit ready.',
      items: [
        {
          title: 'CMMC Compliance Management',
          description:
            'Comprehensive dashboards, policy management, and team collaboration tools to manage your entire compliance program in one place.',
          icon: 'ShieldCheck',
          href: '/services#compliance-management',
        },
        {
          title: 'Gap Assessment for CMMC',
          description:
            'Identify where you stand against all 110 NIST SP 800-171 controls and get a prioritized roadmap to close every gap.',
          icon: 'Search',
          href: '/services#gap-assessment',
        },
        {
          title: 'CMMC Tracking',
          description:
            'Real time dashboards, milestone alerts, and audit ready documentation to keep your compliance program on track.',
          icon: 'BarChart3',
          href: '/services#tracking',
        },
      ],
    },
    testimonials: {
      headline: 'Trusted by Defense Contractors Nationwide',
      items: [
        {
          quote:
            'CMMC Ready Now transformed our compliance program from a spreadsheet nightmare into a streamlined, audit ready system.',
          author: 'Director of IT',
          company: 'Defense Manufacturing Corp',
        },
        {
          quote:
            'The gap assessment gave us a clear roadmap. We went from feeling overwhelmed to confident and prepared in weeks.',
          author: 'CISO',
          company: 'Aerospace Supply Chain LLC',
        },
        {
          quote:
            'Their platform is intuitive, their team is responsive, and the results speak for themselves. We passed our C3PAO assessment on the first try.',
          author: 'VP of Operations',
          company: 'Federal Systems Integrator',
        },
      ],
    },
    cta: {
      headline: 'Ready to Secure Your CMMC Certification?',
      description:
        'Join hundreds of defense contractors who trust CMMC Ready Now to protect their business and the missions they support.',
      button: { label: 'Schedule a Consultation', href: '/contact' },
    },
  },

  services: {
    hero: {
      headline: 'Our Services',
      subtitle:
        'Purpose built solutions to guide you from assessment through certification and beyond.',
    },
    items: [
      {
        id: 'compliance-management',
        title: 'CMMC Compliance Management',
        icon: 'ShieldCheck',
        summary:
          'Your complete command center for CMMC compliance. Manage policies, coordinate teams, and maintain audit readiness from a single platform.',
        features: [
          {
            title: 'Compliance Dashboards',
            description:
              'Get a real time view of your compliance posture across all CMMC domains with executive level dashboards that translate technical controls into business insights.',
          },
          {
            title: 'Policy Management',
            description:
              'Access a library of professionally authored policy templates mapped to CMMC requirements. Customize, version, and distribute policies with built in approval workflows.',
          },
          {
            title: 'Team Collaboration',
            description:
              'Assign control ownership, track remediation tasks, and keep your entire compliance team aligned with integrated communication and task management.',
          },
          {
            title: 'Audit Preparation',
            description:
              'Generate assessment ready evidence packages, run pre audit checks, and ensure your documentation meets C3PAO expectations before the assessors arrive.',
          },
          {
            title: 'Multi Organization Management',
            description:
              'For MSPs and consultants managing multiple clients, oversee compliance programs across organizations from a single pane of glass.',
          },
        ],
      },
      {
        id: 'gap-assessment',
        title: 'Gap Assessment for CMMC',
        icon: 'Search',
        summary:
          'Know exactly where you stand. Our comprehensive gap assessment evaluates your cybersecurity posture against every CMMC Level 2 requirement so you can move forward with confidence.',
        features: [
          {
            title: 'Full Control Analysis',
            description:
              'We evaluate your organization against all 110 NIST SP 800-171 controls, examining your technical infrastructure, policies, procedures, and operational practices to build a complete picture of your compliance posture.',
          },
          {
            title: 'Gap Identification and Prioritization',
            description:
              'Every gap is documented, categorized by severity, and prioritized based on risk impact and remediation complexity. You will know exactly what to fix first and why.',
          },
          {
            title: 'Remediation Roadmap',
            description:
              'Receive a clear, actionable roadmap with specific steps to close each gap. Our recommendations include timelines, resource estimates, and dependencies so your team can plan with precision.',
          },
          {
            title: 'Detailed Assessment Report',
            description:
              'A comprehensive deliverable documenting findings, risk ratings, evidence reviewed, and strategic recommendations. This report serves as your blueprint for achieving and maintaining compliance.',
          },
          {
            title: 'C3PAO Readiness Preparation',
            description:
              'We prepare your organization for the formal assessment by identifying the gaps that C3PAOs most commonly flag, ensuring you walk into your assessment with confidence and zero surprises.',
          },
        ],
      },
      {
        id: 'tracking',
        title: 'CMMC Tracking',
        icon: 'BarChart3',
        summary:
          'Compliance is not a one time event. Our tracking platform gives you continuous visibility into your compliance status, ensuring nothing falls through the cracks on your path to certification.',
        features: [
          {
            title: 'Real Time Compliance Dashboard',
            description:
              'Monitor your compliance status at a glance with live dashboards that update as your team completes controls, uploads evidence, and resolves findings.',
          },
          {
            title: 'Control by Control Progress Tracking',
            description:
              'Track implementation status across all 14 CMMC domains and 110 controls. See exactly which controls are complete, in progress, or require attention.',
          },
          {
            title: 'Evidence Collection and Document Management',
            description:
              'Centralize all compliance evidence in one secure repository. Upload documents, link artifacts to specific controls, and maintain a complete audit trail.',
          },
          {
            title: 'Milestone Tracking and Deadline Alerts',
            description:
              'Set milestones for your compliance journey and receive automated alerts when deadlines approach. Never miss a critical date or let a remediation item slip.',
          },
          {
            title: 'Executive Reporting',
            description:
              'Generate professional reports for leadership, board presentations, and external stakeholders. Our audit ready documentation packages ensure you are always prepared to demonstrate compliance.',
          },
        ],
      },
    ],
    audiences: {
      headline: 'Built for Organizations That Protect the Mission',
      items: [
        {
          title: 'Defense Contractors',
          description:
            'Prime and subcontractors who handle CUI and need to meet CMMC Level 2 requirements to win and maintain DoD contracts.',
        },
        {
          title: 'Supply Chain Vendors',
          description:
            'Organizations throughout the defense supply chain who need to demonstrate compliance to their prime contractor partners.',
        },
        {
          title: 'Healthcare and Medical Device',
          description:
            'Companies with DoD contracts in the healthcare space navigating both HIPAA and CMMC requirements simultaneously.',
        },
        {
          title: 'Manufacturing and Construction Firms',
          description:
            'Industrial manufacturers and construction companies in the defense supply chain who need practical compliance solutions that work in real-world operational environments.',
        },
      ],
    },
  },

  about: {
    hero: {
      headline: 'Our Story',
      subtitle:
        'Born from a real world security crisis. Built with a mission to protect American businesses.',
    },
    origin: {
      headline: 'Why We Exist',
      paragraphs: [
        'CMMC Ready Now was founded after our team experienced a devastating ransomware attack firsthand. That event changed everything. We saw how quickly an organization can be brought to its knees when cybersecurity is treated as an afterthought.',
        'That experience became our catalyst. We became obsessed with security, not just implementing it, but making it accessible to every organization that needs it. We built CMMC Ready Now because we believe no defense contractor should lose a contract, and no piece of sensitive data should be compromised, because compliance felt too complex or too expensive.',
        'Today, as part of Capital Cyber Compliance, we bring that same urgency and dedication to every organization we serve. Our platform and team exist for one reason: to make CMMC compliance straightforward, automated, and affordable so you can focus on the mission that matters.',
      ],
    },
    mission: {
      headline: 'Our Mission',
      statement:
        'To protect American businesses and the defense industrial base by making CMMC compliance accessible, automated, and affordable for every organization in the supply chain.',
    },
    values: [
      {
        title: 'Security First',
        description:
          'We practice what we preach. Every decision we make starts with security because we know what happens when it does not.',
      },
      {
        title: 'Mission Driven',
        description:
          'We serve organizations that protect our national security. Their mission is our mission.',
      },
      {
        title: 'Relentlessly Practical',
        description:
          'Compliance should not require a PhD. We build tools and processes that real teams can actually use.',
      },
      {
        title: 'Service Obsessed',
        description:
          'Your success is our success. We provide hands on support because compliance is a team effort.',
      },
    ],
    team: {
      headline: 'Leadership',
      description:
        'Our team combines decades of cybersecurity, compliance, and technology experience. We are practitioners, not just consultants.',
      members: [
        {
          name: 'Leadership Team',
          role: 'Capital Cyber Compliance',
          bio: 'Seasoned cybersecurity professionals with deep expertise in CMMC, NIST frameworks, and defense industrial base compliance.',
        },
      ],
    },
  },

  contact: {
    hero: {
      headline: 'Get in Touch',
      subtitle:
        'Ready to start your CMMC journey? Have questions about our services? We are here to help.',
    },
    form: {
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', required: true },
        { name: 'email', label: 'Email Address', type: 'email', required: true },
        { name: 'company', label: 'Company Name', type: 'text', required: true },
        { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
        { name: 'message', label: 'How Can We Help?', type: 'textarea', required: true },
      ],
      submitLabel: 'Send Message',
      successMessage: 'Thank you for reaching out. Our team will respond within one business day.',
    },
    info: {
      email: 'mgmt@capital-cyber.com',
      items: [
        {
          title: 'Email Us',
          detail: 'mgmt@capital-cyber.com',
          icon: 'Mail',
        },
        {
          title: 'Response Time',
          detail: 'Within one business day',
          icon: 'Clock',
        },
        {
          title: 'Based In',
          detail: 'United States',
          icon: 'MapPin',
        },
      ],
    },
  },

  footer: {
    description:
      'CMMC Ready Now by Capital Cyber Compliance. Making CMMC compliance accessible, automated, and affordable for every organization in the defense industrial base.',
    copyright: `© ${new Date().getFullYear()} Capital Cyber Compliance. All rights reserved.`,
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
};
