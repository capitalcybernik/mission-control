import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, AlertTriangle, CheckCircle2, TrendingUp, Phone, ArrowRight, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CMMC Phase 2 Timeline: What Defense Contractors Need to Know in 2026',
  description:
    'CMMC enforcement is accelerating in 2026. Understand the current timeline, key milestones, and how to prepare your organization for full enforcement of CMMC requirements.',
  keywords: [
    'CMMC Phase 2 timeline',
    'CMMC enforcement 2026',
    'CMMC implementation schedule',
    'DFARS CMMC requirements',
    'defense contractor CMMC timeline',
    'CMMC certification deadlines',
    'CMMC rollout phases',
    'C3PAO assessment timeline',
    'CMMC compliance deadlines',
    'defense contractor preparation',
  ],
  openGraph: {
    title: 'CMMC Phase 2 Timeline: What Defense Contractors Need to Know in 2026',
    description:
      'CMMC enforcement is no longer a distant threat. Get the latest timeline and understand what triggers full enforcement.',
    type: 'article',
  },
};

export default function CMMCPhase2TimelineBlogPost() {
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
              <Calendar className="w-6 h-6 text-accent" />
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">
                Timeline
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>February 28, 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            CMMC Phase 2 Timeline: What Defense Contractors Need to Know in 2026
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            CMMC enforcement is accelerating faster than many contractors expected. Here is the current timeline and what you need to do to stay ahead of the requirements.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-red-800 mb-2">Important Update</h3>
                  <p className="text-red-700 text-sm">
                    The DFARS 252.204-7021 clause requiring CMMC certification is already appearing in new contract solicitations. Defense contractors can no longer treat CMMC as a future requirement.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              For years, defense contractors have been asking "when does CMMC really start?" The answer is becoming clear: it already has. While full enforcement (Phase 2) is still on the horizon, the groundwork is being laid now, and contractors who wait for official announcements will find themselves scrambling.
            </p>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">Current State: Limited Enforcement (Phase 1)</h2>

            <p>
              We are currently in what the DoD calls "Phase 1" of CMMC implementation. This phase includes limited pilot programs and the gradual introduction of CMMC requirements in select contracts. However, the pace is accelerating significantly in 2026.
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">What Is Happening Right Now</h3>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 my-8">
              <h4 className="text-lg font-bold text-navy-800 mb-4">Current CMMC Activity</h4>
              <div className="space-y-4">
                {[
                  {
                    status: 'Active',
                    item: 'DFARS 252.204-7021 appearing in new solicitations'
                  },
                  {
                    status: 'Active', 
                    item: 'C3PAO organizations conducting pilot assessments'
                  },
                  {
                    status: 'Active',
                    item: 'DoD requiring CMMC Level 1 self-assessments for FCI contracts'
                  },
                  {
                    status: 'Active',
                    item: 'Prime contractors flowing CMMC requirements to subcontractors'
                  },
                  {
                    status: 'Increasing',
                    item: 'RFP requirements specifying future CMMC certification needs'
                  }
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className={`inline-block w-3 h-3 rounded-full mt-2 ${
                      activity.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></span>
                    <span className="text-gray-700">{activity.item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p>
              The key point is that CMMC is not waiting for Phase 2 to begin. Organizations that handle <Link href="/help-center" className="text-accent hover:underline">Controlled Unclassified Information (CUI)</Link> are already seeing CMMC requirements in their contracts and subcontracts.
            </p>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">Phase 2: Full Enforcement Timeline</h2>

            <p>
              Phase 2 represents full enforcement where CMMC requirements become standard in all relevant DoD contracts. Based on current information from DoD leadership and rulemaking progress, here is the expected timeline:
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">2026: Acceleration Year</h3>

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 my-8">
              <h4 className="text-lg font-bold text-navy-800 mb-4">Expected 2026 Milestones</h4>
              <div className="space-y-6">
                {[
                  {
                    timeframe: 'Q1 2026 (Current)',
                    events: [
                      'Continued DFARS clause inclusion in new contracts',
                      'Increased C3PAO assessment capacity',
                      'Enhanced contractor awareness and preparation'
                    ]
                  },
                  {
                    timeframe: 'Q2 2026 (Apr-Jun)',
                    events: [
                      'Expected publication of final CMMC rule',
                      'Formal announcement of Phase 2 timeline',
                      'Increased assessment requirements in major programs'
                    ]
                  },
                  {
                    timeframe: 'Q3-Q4 2026 (Jul-Dec)',
                    events: [
                      'Transition period with increasing enforcement',
                      'Prime contractors requiring subcontractor certification',
                      'Assessment scheduling bottlenecks begin'
                    ]
                  }
                ].map((period, i) => (
                  <div key={i} className="border-l-4 border-accent pl-6">
                    <h5 className="font-bold text-navy-800 mb-2">{period.timeframe}</h5>
                    <ul className="space-y-1">
                      {period.events.map((event, j) => (
                        <li key={j} className="text-gray-700 text-sm flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">2027: Full Enforcement Expected</h3>

            <p>
              Current projections suggest Phase 2 will be in full effect by 2027, meaning CMMC requirements will be standard in all contracts involving CUI. This timeline assumes normal rulemaking processes and no significant delays.
            </p>

            <p>
              However, defense contractors should not wait for 2027 to begin their compliance efforts. The implementation timeline for most organizations is 12 to 24 months, meaning you need to start now to be ready for full enforcement.
            </p>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">What Triggers CMMC Requirements?</h2>

            <p>
              Understanding what triggers CMMC requirements helps you predict when your organization will need certification:
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">Contract Level Triggers</h3>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 my-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-navy-800 mb-3">CMMC Level 1 Required</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Contracts with only FCI (Federal Contract Information)</li>
                    <li>• Self-assessment acceptable</li>
                    <li>• Lower risk contracts</li>
                    <li>• Basic cybersecurity requirements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-3">CMMC Level 2 Required</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Contracts involving CUI</li>
                    <li>• Third-party assessment required</li>
                    <li>• Technical data and specifications</li>
                    <li>• All 110 NIST SP 800-171 controls</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">Program Level Acceleration</h3>

            <p>
              Certain defense programs are accelerating CMMC requirements ahead of the general timeline:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li><strong>High-priority weapons systems</strong>: Programs considered critical to national security</li>
              <li><strong>Sensitive information programs</strong>: Contracts involving classified or highly sensitive technical data</li>
              <li><strong>Major acquisition programs</strong>: Large dollar value contracts with extensive supply chains</li>
              <li><strong>Pilot programs</strong>: Selected contracts used to test CMMC processes</li>
            </ul>

            <p>
              If your organization works on any of these types of programs, you may face CMMC requirements sooner than the general timeline suggests.
            </p>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">Supply Chain Implications</h2>

            <p>
              One of the most significant aspects of CMMC enforcement is its impact on the defense supply chain. Prime contractors are increasingly requiring subcontractors to demonstrate CMMC compliance before contract award.
            </p>

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 my-8">
              <h3 className="text-xl font-bold text-navy-800 mb-4">Supply Chain Reality Check</h3>
              <p className="text-gray-700 mb-4">
                Many prime contractors are not waiting for Phase 2 to implement CMMC requirements. They are flowing down CMMC compliance expectations now to reduce their own risk and ensure supply chain readiness.
              </p>
              <p className="text-gray-700">
                If you are a subcontractor, you may face CMMC requirements as soon as your next recompete, regardless of the official Phase 2 timeline.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">Competitive Implications</h3>

            <p>
              Early CMMC certification is becoming a competitive advantage. Organizations with certification can:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>Bid on contracts that require CMMC compliance</li>
              <li>Partner with prime contractors seeking compliant subcontractors</li>
              <li>Avoid last-minute compliance scrambles that impact pricing and schedules</li>
              <li>Demonstrate cybersecurity maturity to potential customers</li>
            </ul>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">Assessment Capacity Challenges</h2>

            <p>
              One factor that could accelerate the practical enforcement timeline is C3PAO assessment capacity. There are currently limited numbers of accredited assessment organizations, and demand is growing rapidly.
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">The Assessment Bottleneck</h3>

            <p>
              Industry estimates suggest thousands of defense contractors will need CMMC Level 2 assessments. With limited C3PAO capacity, organizations may face:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li><strong>Extended scheduling delays</strong>: Wait times of 6+ months for assessment slots</li>
              <li><strong>Higher assessment costs</strong>: Increased demand driving up pricing</li>
              <li><strong>Geographic constraints</strong>: Limited assessor availability in some regions</li>
              <li><strong>Rushed preparation</strong>: Pressure to be assessment-ready when slots become available</li>
            </ul>

            <p>
              This capacity constraint means organizations should begin their <Link href="/blog/what-is-cmmc-gap-assessment" className="text-accent hover:underline">gap assessment and remediation efforts</Link> immediately, even if formal assessment scheduling is still months away.
            </p>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">What You Should Do Right Now</h2>

            <p>
              Based on the current timeline and market dynamics, here are the immediate actions every defense contractor should take:
            </p>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">Immediate Actions (Next 30 Days)</h3>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 my-8">
              <div className="space-y-4">
                {[
                  'Review your contracts for CMMC requirements or flow-down clauses',
                  'Identify all systems that store, process, or transmit CUI',
                  'Conduct a preliminary self-assessment against NIST SP 800-171',
                  'Document your current cybersecurity policies and procedures',
                  'Begin conversations with potential CMMC consultants and assessors'
                ].map((action, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-gray-700">{action}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">Short Term Actions (Next 90 Days)</h3>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>Conduct a formal CMMC gap assessment</li>
              <li>Develop a remediation plan with timelines and budgets</li>
              <li>Begin addressing the most critical compliance gaps</li>
              <li>Start developing your System Security Plan (SSP)</li>
              <li>Research and select C3PAO assessment organizations</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">Long Term Actions (Next 12-18 Months)</h3>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>Complete all gap remediation activities</li>
              <li>Implement continuous monitoring and maintenance processes</li>
              <li>Conduct internal readiness assessments</li>
              <li>Schedule formal C3PAO assessment</li>
              <li>Achieve CMMC Level 2 certification</li>
            </ul>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">The Cost of Waiting</h2>

            <p>
              Organizations that wait for Phase 2 to begin their CMMC preparation face several risks:
            </p>

            <div className="bg-red-50 border border-red-200 rounded-xl p-8 my-8">
              <h3 className="text-lg font-bold text-red-800 mb-4">Risks of Delayed Preparation</h3>
              <ul className="space-y-3 text-red-700">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" />
                  <span><strong>Contract exclusion</strong>: Unable to bid on contracts requiring CMMC certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" />
                  <span><strong>Assessment bottlenecks</strong>: Extended wait times for C3PAO assessment slots</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" />
                  <span><strong>Rushed implementation</strong>: Higher costs due to compressed timelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" />
                  <span><strong>Competitive disadvantage</strong>: Loss of opportunities to certified competitors</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">The Bottom Line</h2>

            <p>
              CMMC Phase 2 is not a distant future requirement. It is a current reality that is expanding rapidly. While the exact timeline may shift, the direction is clear: CMMC compliance is becoming mandatory for defense contractors who handle CUI.
            </p>

            <p>
              Organizations that begin their preparation now will have significant advantages over those who wait. They will have time for thoughtful implementation, better assessment scheduling options, and competitive advantages in the marketplace.
            </p>

            <p className="text-lg font-semibold text-navy-800">
              The question is not whether CMMC enforcement will affect your organization. The question is whether you will be ready when it does.
            </p>

            <div className="bg-navy-800 text-white rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold mb-4">Start Your CMMC Preparation Today</h3>
              <p className="text-gray-300 mb-6">
                Do not wait for Phase 2 to begin your compliance journey. Get ahead of the timeline with expert guidance and strategic planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://capital-cyber.com/rick"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-navy-950 font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Book a Strategy Call
                </Link>
                <Link
                  href="/blog/what-is-cmmc-gap-assessment"
                  className="inline-flex items-center gap-2 border border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Learn About Gap Assessments
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
              <Shield className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                What Is a CMMC Gap Assessment?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Your roadmap to certification starts with understanding where you stand.
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link href="/blog/cmmc-cost-small-business" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <TrendingUp className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                CMMC Costs for Small Business
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Budget planning and cost management strategies for compliance.
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link href="/best-practices" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <CheckCircle2 className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                CMMC Best Practices
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                10 essential practices for successful CMMC implementation.
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