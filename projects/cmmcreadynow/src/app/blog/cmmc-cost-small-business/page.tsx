import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, DollarSign, TrendingUp, Building2, Users, CheckCircle2, AlertTriangle, Phone, ArrowRight, Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How Much Does CMMC Compliance Cost for Small Businesses? | CMMC Ready Now',
  description:
    'Real CMMC compliance costs for small defense contractors. Detailed breakdown of gap assessment, implementation, assessment, and ongoing costs with strategies to manage your budget effectively.',
  keywords: [
    'CMMC cost small business',
    'CMMC compliance cost breakdown',
    'defense contractor CMMC budget',
    'NIST 800-171 implementation cost',
    'CMMC Level 2 cost',
    'cybersecurity compliance budget',
    'C3PAO assessment cost',
    'CMMC gap assessment cost',
    'small contractor compliance cost',
    'defense contractor cybersecurity budget',
  ],
  openGraph: {
    title: 'How Much Does CMMC Compliance Cost for Small Businesses? | CMMC Ready Now',
    description:
      'Get realistic budget expectations for CMMC compliance. Real cost breakdowns and strategies to manage expenses for small defense contractors.',
    type: 'article',
  },
};

export default function CMMCCostSmallBusinessBlogPost() {
  const costBreakdown = {
    assessment: {
      title: 'Gap Assessment',
      range: '$15,000 - $50,000',
      factors: ['Organization size', 'System complexity', 'Current security posture', 'Geographic location'],
      description: 'Initial evaluation of current compliance status against NIST SP 800-171 requirements'
    },
    implementation: {
      title: 'Gap Remediation',
      range: '$50,000 - $500,000',
      factors: ['Number of gaps identified', 'Technical infrastructure changes', 'Policy development needs', 'Training requirements'],
      description: 'Addressing identified gaps to achieve CMMC compliance readiness'
    },
    c3pao: {
      title: 'C3PAO Assessment',
      range: '$25,000 - $150,000',
      factors: ['Organization size', 'Assessment complexity', 'C3PAO selection', 'Geographic factors'],
      description: 'Formal third-party assessment and certification process'
    },
    ongoing: {
      title: 'Annual Maintenance',
      range: '$25,000 - $100,000',
      factors: ['Monitoring tools', 'Staff training', 'Policy updates', 'Compliance verification'],
      description: 'Ongoing costs to maintain CMMC compliance over 3-year certification period'
    }
  };

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-12 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-accent" />
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">
                Costs
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>February 15, 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>11 min read</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            How Much Does CMMC Compliance Cost for Small Businesses?
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            CMMC compliance costs vary widely based on your starting point, but small defense contractors can expect to invest $100,000 to $300,000 for initial certification. Here is the realistic breakdown.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <Calculator className="w-6 h-6 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-navy-800 mb-2">Cost Reality Check</h3>
                  <p className="text-gray-700 text-sm">
                    These cost estimates are based on real implementations across hundreds of small defense contractors. Your actual costs may vary significantly based on your current security posture and specific requirements.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The question every small defense contractor asks is: "How much is CMMC compliance going to cost?" The honest answer is that it depends on where you are starting from and how quickly you need to get there. But we can give you realistic ranges based on hundreds of real implementations.
            </p>

            <p>
              Understanding these costs upfront allows you to budget properly, plan your cash flow, and make informed decisions about timing and approach. More importantly, it helps you put CMMC costs in perspective against the value of the contracts you are protecting.
            </p>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">Complete Cost Breakdown</h2>

            <p>
              CMMC compliance involves four distinct cost categories. Understanding each category helps you plan your budget and timeline:
            </p>

            <div className="space-y-8 my-12">
              {Object.entries(costBreakdown).map(([key, item]) => (
                <div key={key} className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                        <DollarSign className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-navy-800 mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-accent">{item.range}</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-navy-800 mb-2">Cost Factors:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {item.factors.map((factor, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                              <span className="text-gray-700 text-sm">{factor}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">Total Investment by Company Size</h2>

            <p>
              Here are realistic total investment ranges based on company size and complexity:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 my-8">
              <h3 className="text-xl font-bold text-navy-800 mb-6">Expected Total Investment Ranges</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    size: 'Micro Business',
                    employees: '1-10 employees',
                    range: '$75,000 - $150,000',
                    description: 'Simple IT environment, limited CUI systems',
                    icon: Users
                  },
                  {
                    size: 'Small Business',
                    employees: '11-50 employees',
                    range: '$150,000 - $300,000',
                    description: 'Moderate complexity, multiple systems',
                    icon: Building2
                  },
                  {
                    size: 'Medium Business',
                    employees: '51-250 employees',
                    range: '$300,000 - $750,000',
                    description: 'Complex environment, multiple locations',
                    icon: TrendingUp
                  }
                ].map((tier) => (
                  <div key={tier.size} className="bg-white border border-gray-200 rounded-lg p-6">
                    <tier.icon className="w-8 h-8 text-accent mb-3" />
                    <h4 className="font-bold text-navy-800 mb-2">{tier.size}</h4>
                    <p className="text-gray-600 text-sm mb-3">{tier.employees}</p>
                    <p className="text-2xl font-bold text-accent mb-3">{tier.range}</p>
                    <p className="text-gray-700 text-sm">{tier.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">Detailed Cost Analysis by Category</h2>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">1. Gap Assessment Costs ($15,000 - $50,000)</h3>

            <p>
              A <Link href="/blog/what-is-cmmc-gap-assessment" className="text-accent hover:underline">CMMC gap assessment</Link> is your first investment and typically the most cost-effective dollar you will spend. Here is what affects the cost:
            </p>

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 my-8">
              <h4 className="text-lg font-bold text-navy-800 mb-4">Gap Assessment Cost Factors</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-navy-800 mb-3">Lower Cost Scenarios ($15,000 - $25,000)</h5>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Single location with simple network</li>
                    <li>• Well-documented existing security controls</li>
                    <li>• Limited number of CUI systems</li>
                    <li>• Remote assessment capability</li>
                    <li>• Existing relationship with assessor</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-navy-800 mb-3">Higher Cost Scenarios ($35,000 - $50,000)</h5>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Multiple locations requiring site visits</li>
                    <li>• Complex network architectures</li>
                    <li>• Legacy systems requiring special analysis</li>
                    <li>• Limited existing documentation</li>
                    <li>• Expedited timeline requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">2. Implementation Costs ($50,000 - $500,000)</h3>

            <p>
              Implementation costs vary the most because they depend entirely on what gaps you need to address. Here are the major cost drivers:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 my-8">
              <h4 className="text-lg font-bold text-navy-800 mb-4">Common Implementation Expenses</h4>
              <div className="space-y-6">
                {[
                  {
                    category: 'Technology Infrastructure',
                    range: '$20,000 - $200,000',
                    items: [
                      'Multi-factor authentication solutions ($5,000 - $25,000)',
                      'Endpoint detection and response tools ($10,000 - $50,000 annually)',
                      'SIEM or log management systems ($15,000 - $75,000)',
                      'Network segmentation equipment ($10,000 - $50,000)',
                      'Encryption solutions ($5,000 - $30,000)'
                    ]
                  },
                  {
                    category: 'Professional Services',
                    range: '$15,000 - $150,000',
                    items: [
                      'System Security Plan development ($10,000 - $50,000)',
                      'Policy and procedure creation ($5,000 - $25,000)',
                      'Network architecture design ($10,000 - $40,000)',
                      'Security control implementation support ($20,000 - $75,000)'
                    ]
                  },
                  {
                    category: 'Training and Personnel',
                    range: '$5,000 - $50,000',
                    items: [
                      'Staff security awareness training ($2,000 - $10,000)',
                      'IT staff technical training ($3,000 - $15,000)',
                      'Incident response training ($2,000 - $10,000)',
                      'Ongoing security education ($5,000 - $15,000 annually)'
                    ]
                  }
                ].map((expense) => (
                  <div key={expense.category} className="border-l-4 border-accent pl-6">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-bold text-navy-800">{expense.category}</h5>
                      <span className="text-accent font-semibold">{expense.range}</span>
                    </div>
                    <ul className="space-y-1">
                      {expense.items.map((item, i) => (
                        <li key={i} className="text-gray-700 text-sm">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">3. C3PAO Assessment Costs ($25,000 - $150,000)</h3>

            <p>
              C3PAO assessment costs are set by the assessment organizations and generally include:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li><strong>Base assessment fee</strong>: $20,000 - $75,000 depending on organization size</li>
              <li><strong>Travel and expenses</strong>: $3,000 - $15,000 for on-site portions</li>
              <li><strong>Additional testing</strong>: $2,000 - $10,000 for complex technical evaluations</li>
              <li><strong>Report and certification</strong>: Usually included in base fee</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 my-8">
              <h4 className="text-lg font-bold text-yellow-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Assessment Scheduling Reality
              </h4>
              <p className="text-yellow-700 text-sm leading-relaxed">
                C3PAO capacity is limited and demand is growing rapidly. Many organizations are experiencing 6+ month wait times for assessment slots. Book your assessment early and be prepared to travel to the assessor if necessary to secure earlier dates.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">4. Ongoing Maintenance Costs ($25,000 - $100,000 annually)</h3>

            <p>
              CMMC compliance is not a one-time expense. You must maintain compliance throughout your 3-year certification period and beyond:
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-navy-800 mb-3">Annual Technology Costs</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Security tool licensing: $15,000 - $50,000</li>
                  <li>• Managed security services: $10,000 - $30,000</li>
                  <li>• Vulnerability scanning: $2,000 - $8,000</li>
                  <li>• Backup and disaster recovery: $3,000 - $12,000</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-navy-800 mb-3">Annual Service Costs</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Compliance monitoring: $8,000 - $25,000</li>
                  <li>• Staff training updates: $3,000 - $10,000</li>
                  <li>• Policy updates and reviews: $2,000 - $8,000</li>
                  <li>• Annual readiness assessment: $5,000 - $15,000</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">Strategies to Manage CMMC Costs</h2>

            <p>
              While CMMC compliance requires significant investment, there are strategies to manage costs effectively:
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">1. Start Early and Spread Costs Over Time</h3>

            <p>
              Beginning your CMMC preparation 18-24 months before you need certification allows you to spread costs across multiple budget cycles and avoid expensive rushed implementations.
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">2. Prioritize High-Impact Controls First</h3>

            <p>
              Focus your initial investment on controls that provide the most security value and compliance coverage. Multi-factor authentication, access controls, and logging typically provide the best return on investment.
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">3. Leverage Existing Investments</h3>

            <p>
              Build on security tools and processes you already have rather than starting from scratch. Many organizations can repurpose existing investments to meet CMMC requirements.
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">4. Consider Managed Security Services</h3>

            <p>
              For small organizations, managed security services can provide enterprise-level security capabilities at a fraction of the cost of building internal capabilities.
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">5. Bundle Services for Better Pricing</h3>

            <p>
              Working with consultants who can provide gap assessment, implementation support, and ongoing maintenance often results in better overall pricing than using multiple vendors.
            </p>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">Return on Investment Analysis</h2>

            <p>
              While CMMC costs are significant, they should be evaluated against the value of the contracts they protect:
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-8 my-8">
              <h3 className="text-lg font-bold text-green-800 mb-4">ROI Calculation Example</h3>
              <div className="space-y-4 text-green-700">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Small Contractor Scenario:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Annual DoD contracts: $2.5 million</li>
                      <li>• Contract duration: 5 years</li>
                      <li>• Total contract value: $12.5 million</li>
                      <li>• CMMC investment: $200,000</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">ROI Analysis:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Investment as % of contracts: 1.6%</li>
                      <li>• Cost to protect $1M in contracts: $16,000</li>
                      <li>• Payback period: 2.4 months</li>
                      <li>• 5-year ROI: 6,150%</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-green-200 pt-4 mt-4">
                  <p className="font-bold">Bottom Line: Spending $200,000 to protect $12.5 million in contracts is a 62:1 return on investment.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">Common Cost Mistakes to Avoid</h2>

            <p>
              Understanding common budgeting mistakes can help you plan more effectively:
            </p>

            <div className="bg-red-50 border border-red-200 rounded-xl p-8 my-8">
              <h3 className="text-lg font-bold text-red-800 mb-4">Budget Planning Mistakes</h3>
              <div className="space-y-4">
                {[
                  'Underestimating ongoing maintenance costs after initial certification',
                  'Failing to budget for potential assessment failures and remediation',
                  'Not accounting for business disruption during implementation',
                  'Assuming existing managed IT services cover CMMC requirements',
                  'Planning only for minimum compliance without security margins'
                ].map((mistake, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <span className="text-red-700 text-sm">{mistake}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">Financing CMMC Compliance</h2>

            <p>
              For small businesses, the upfront investment in CMMC compliance can be challenging. Consider these financing options:
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-navy-800 mb-3">Traditional Financing</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• SBA loans for cybersecurity improvements</li>
                  <li>• Equipment financing for security tools</li>
                  <li>• Business lines of credit for cash flow</li>
                  <li>• Working capital loans</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-navy-800 mb-3">Alternative Approaches</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Phased implementation to spread costs</li>
                  <li>• Managed service subscriptions vs. capital purchases</li>
                  <li>• Cost sharing with teaming partners</li>
                  <li>• Grant opportunities for small businesses</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">The Bottom Line</h2>

            <p>
              CMMC compliance is a significant investment for small businesses, but it is also an essential one. The cost of compliance pales in comparison to the cost of losing access to defense contracts or facing <Link href="/blog/false-claims-act-cmmc" className="text-accent hover:underline">False Claims Act liability</Link>.
            </p>

            <p>
              The key is realistic budgeting, strategic planning, and starting early enough to implement thoughtfully rather than frantically. Organizations that approach CMMC as an investment in their future competitiveness rather than just a compliance cost tend to get better results at lower total costs.
            </p>

            <p className="text-lg font-semibold text-navy-800">
              Remember: the most expensive CMMC compliance program is the one that fails. Invest enough to do it right the first time.
            </p>

            <div className="bg-navy-800 text-white rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold mb-4">Get Accurate Cost Estimates for Your Organization</h3>
              <p className="text-gray-300 mb-6">
                Every organization is different. Get personalized cost estimates based on your current security posture and specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://capital-cyber.com/rick"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-navy-950 font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Get Cost Estimate
                </Link>
                <Link
                  href="/blog/what-is-cmmc-gap-assessment"
                  className="inline-flex items-center gap-2 border border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Start with Gap Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/what-is-cmmc-gap-assessment" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <CheckCircle2 className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                What Is a CMMC Gap Assessment?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Start with a gap assessment to get accurate cost estimates for your organization.
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link href="/blog/false-claims-act-cmmc" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <AlertTriangle className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                False Claims Act and CMMC
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Understand the legal risks that make CMMC compliance essential.
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link href="/best-practices" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <TrendingUp className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                CMMC Best Practices
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn proven strategies to manage costs and ensure successful implementation.
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <span>View Guide</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=locationpage" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a>. A cybersecurity firm helping defense contractors navigate NIST 800-171 compliance and prepare for CMMC certification.
          </p>
        </div>
      </section>
    </>
  );
}