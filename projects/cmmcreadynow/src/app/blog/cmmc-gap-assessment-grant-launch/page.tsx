import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, CheckCircle2, Shield, DollarSign, Users, Phone, ArrowRight, Award, FileText, HelpCircle, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: '$500K CMMC Gap Assessment Grant Now Available | CGA Grant Launch | CMMC Ready Now',
  description:
    'Cyber Grants Alliance launches $500,000 in CMMC Gap Assessment Grants for defense contractors. Sponsored by CMMC Ready Now. Apply today for free compliance assistance.',
  keywords: [
    'CMMC gap assessment grant',
    'defense contractor grants',
    'CMMC funding',
    'CGA grant',
    'Cyber Grants Alliance',
    'CMMC grant program',
    'defense contractor funding',
    'NIST 800-171 grant',
    'CMMC compliance grant',
    'small business defense grant',
    'CMMC financial assistance',
    'cybersecurity grant defense contractors',
  ],
  openGraph: {
    title: '$500K CMMC Gap Assessment Grant Now Available | Cyber Grants Alliance',
    description:
      'Defense contractors: $500,000 in CMMC Gap Assessment Grants now open. Free gap assessments sponsored by CMMC Ready Now. Limited availability.',
    type: 'article',
    publishedTime: '2026-03-05T00:00:00Z',
  },
};

export default function CMCGAGrantLaunchBlogPost() {
  return (
    <>
      {/* Header / Hero */}
      <section className="relative pt-32 pb-12 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold">BREAKING NEWS</span>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-medium">
                Grant Announcement
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>March 5, 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            $500,000 in CMMC Gap Assessment Grants Just Opened
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            The Cyber Grants Alliance just launched a historic funding opportunity for defense contractors. 
            CMMC Ready Now is proud to sponsor this $500K grant program providing free gap assessments 
            to qualified small businesses.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* The Problem */}
            <h2 className="text-3xl font-bold text-navy-800 mt-8 mb-6">CMMC Compliance Is Breaking Small Contractors</h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Small defense contractors are getting squeezed out.
            </p>
            
            <p>
              The Department of Defense is mandating CMMC certification for every contractor handling Controlled Unclassified Information. That is thousands of small businesses suddenly facing complex cybersecurity requirements.
            </p>
            
            <p>
              Here is the brutal truth most people will not tell you.
            </p>
            
            <p>
              A comprehensive CMMC gap assessment typically costs $15,000 to $50,000. For many small defense contractors operating on thin margins, that is an impossible expense.
            </p>
            
            <p>
              Yet without that assessment, you are flying blind.
            </p>
            
            <p>
              You do not know what controls you are missing. You do not know how much compliance will actually cost. You do not know if you can meet the deadline.
            </p>
            
            <p>
              This is creating a two tier defense industrial base.
            </p>
            
            <p>
              Large contractors with deep pockets hire consultants and breeze through assessments. Small contractors struggle to afford the help they desperately need.
            </p>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 my-8">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-red-600" />
                The Financial Reality
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bold text-red-600 mb-2">$15K-$50K</p>
                  <p className="text-gray-700 text-sm">Gap Assessment Cost</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-red-600 mb-2">$25K-$150K</p>
                  <p className="text-gray-700 text-sm">C3PAO Assessment Cost</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-red-600 mb-2">$50K-$500K+</p>
                  <p className="text-gray-700 text-sm">Remediation Costs</p>
                </div>
              </div>
            </div>

            {/* The Solution */}
            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">The Cyber Grants Alliance Steps In</h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Today changes everything.
            </p>
            
            <p>
              The Cyber Grants Alliance (CGA) just launched a $500,000 grant program specifically for CMMC gap assessments. This is the largest targeted funding initiative for defense contractor cybersecurity readiness to date.
            </p>
            
            <p>
              CMMC Ready Now is proud to serve as the exclusive sponsor of this groundbreaking program.
            </p>
            
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 my-8">
              <h3 className="text-2xl font-bold text-navy-800 mb-4 flex items-center gap-2">
                <Award className="w-8 h-8 text-accent" />
                Grant Program Overview
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-800">$500,000 Total Pool</p>
                      <p className="text-gray-600 text-sm">Funding available for qualified applicants</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-800">Full Gap Assessment</p>
                      <p className="text-gray-600 text-sm">Complete NIST 800-171/CMMC Level 2 evaluation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-800">Small Business Focus</p>
                      <p className="text-gray-600 text-sm">Priority for underserved contractors</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-800">Detailed Roadmap</p>
                      <p className="text-gray-600 text-sm">Prioritized remediation guidance included</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-800">Fast Turnaround</p>
                      <p className="text-gray-600 text-sm">Results delivered within 30 days of approval</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-800">Zero Cost</p>
                      <p className="text-gray-600 text-sm">100% grant funded, no repayment required</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">What the Grant Covers</h3>
            
            <p>
              This is not a watered down assessment. Grant recipients receive the same comprehensive gap assessment that normally costs tens of thousands of dollars.
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 my-8">
              <h3 className="text-lg font-bold text-navy-800 mb-4">Comprehensive Assessment Includes</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Complete review of all 110 NIST SP 800-171 controls',
                  'CMMC Level 2 readiness evaluation',
                  'System Security Plan (SSP) review and recommendations',
                  'Controlled Unclassified Information (CUI) scoping',
                  'Technical infrastructure assessment',
                  'Policy and procedure gap analysis',
                  'Risk prioritized remediation roadmap',
                  'Implementation timeline and budget estimates'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">Who Qualifies</h3>
            
            <p>
              This grant is specifically designed for defense contractors who need help the most.
            </p>
            
            <p>
              Priority consideration is given to:
            </p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span>Small businesses with DoD contracts or subcontracts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span>Companies handling or planning to handle CUI</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span>First time CMMC applicants without prior assessments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span>Disadvantaged and underrepresented business enterprises</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span>Contractors facing imminent CMMC certification deadlines</span>
              </li>
            </ul>

            {/* How to Apply */}
            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">How to Apply</h2>
            
            <p>
              The application process is straightforward and designed to be accessible for busy contractors.
            </p>
            
            <div className="space-y-6 my-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <span className="text-navy-950 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 text-lg mb-2">Submit Your Application</h4>
                  <p className="text-gray-700">Complete the online application at the Cyber Grants Alliance portal. The form takes approximately 15 minutes to complete.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <span className="text-navy-950 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 text-lg mb-2">Application Review</h4>
                  <p className="text-gray-700">The CGA team reviews applications weekly. Priority is given based on deadline urgency, business size, and readiness status.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <span className="text-navy-950 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 text-lg mb-2">Grant Award Notification</h4>
                  <p className="text-gray-700">Approved applicants receive notification within 5 business days with next steps and assessment scheduling.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <span className="text-navy-950 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 text-lg mb-2">Begin Your Assessment</h4>
                  <p className="text-gray-700">Work with CMMC Ready Now assessment professionals to complete your comprehensive gap analysis.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <span className="text-navy-950 font-bold">5</span>
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 text-lg mb-2">Receive Your Roadmap</h4>
                  <p className="text-gray-700">Get your detailed assessment report with prioritized recommendations and actionable next steps.</p>
                </div>
              </div>
            </div>

            {/* Apply CTA */}
            <div className="bg-navy-800 text-white rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Grant funds are limited. Submit your application today to secure your spot in this historic program.
              </p>
              <a
                href="https://www.cybergrantsalliance.org/cmmc-gap-assessment-grant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <FileText className="w-5 h-5" />
                Apply for the Grant
              </a>
              <p className="text-gray-400 text-sm mt-4">
                Applications reviewed on a rolling basis • No cost to apply
              </p>
            </div>

            {/* About CMMC Ready Now */}
            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">About CMMC Ready Now</h2>
            
            <p>
              CMMC Ready Now was founded on a simple belief.
            </p>
            
            <p>
              Every defense contractor deserves access to high quality cybersecurity guidance regardless of budget.
            </p>
            
            <p>
              We specialize in helping small and medium defense contractors navigate the complex world of CMMC compliance and NIST 800-171 implementation. Our team combines deep technical expertise with practical business understanding.
            </p>
            
            <p>
              As the exclusive sponsor of the CGA CMMC Gap Assessment Grant, we are putting our money where our mouth is.
            </p>
            
            <p>
              This $500,000 commitment represents our dedication to strengthening the defense industrial base from the ground up. We know that when small contractors succeed, national security wins.
            </p>
            
            <h3 className="text-xl font-semibold text-navy-800 mt-8 mb-4">What We Provide Grant Recipients</h3>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 my-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-navy-800 mb-3">Expert Assessment Team</h4>
                  <p className="text-gray-600 text-sm">Certified cybersecurity professionals with extensive CMMC and defense contractor experience.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-3">Practical Guidance</h4>
                  <p className="text-gray-600 text-sm">Actionable recommendations tailored to your specific business constraints and timeline.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-3">Ongoing Support</h4>
                  <p className="text-gray-600 text-sm">Optional remediation assistance available beyond the initial assessment.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-3">Fast Results</h4>
                  <p className="text-gray-600 text-sm">Complete assessment delivered within 30 days of grant approval.</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-navy-800 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-accent" />
                  Is this grant really free?
                </h4>
                <p className="text-gray-700">Yes. 100% free. There is no cost to apply and no repayment required if selected. The grant covers the full cost of your CMMC gap assessment.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-navy-800 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-accent" />
                  How long does the assessment take?
                </h4>
                <p className="text-gray-700">The assessment process typically takes 2 to 4 weeks depending on your organization size and complexity. Results are delivered within 30 days of grant approval.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-navy-800 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-accent" />
                  What if I am already working with another consultant?
                </h4>
                <p className="text-gray-700">You can still apply. The grant assessment provides an independent evaluation that can complement existing work or provide a second opinion.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-navy-800 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-accent" />
                  Is there a deadline to apply?
                </h4>
                <p className="text-gray-700">Applications are accepted on a rolling basis until funds are exhausted. Given the high demand, we recommend applying as soon as possible.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-navy-800 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-accent" />
                  What happens after the gap assessment?
                </h4>
                <p className="text-gray-700">You receive a comprehensive report with prioritized recommendations. You can then implement remediation yourself, with your existing IT provider, or engage CMMC Ready Now for additional support.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-navy-800 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-accent" />
                  Does this grant cover remediation costs?
                </h4>
                <p className="text-gray-700">This grant covers the gap assessment only. Remediation implementation is a separate cost. However, the assessment provides detailed budget estimates to help you plan.</p>
              </div>
            </div>

            {/* Final CTA */}
            <h2 className="text-3xl font-bold text-navy-800 mt-12 mb-6">Do Not Wait. Apply Today.</h2>
            
            <p>
              $500,000 sounds like a lot of money. It is not.
            </p>
            
            <p>
              When spread across the thousands of defense contractors who need help, this funding will go fast.
            </p>
            
            <p>
              Every day you wait is another day someone else gets ahead in line.
            </p>
            
            <p>
              The defense industrial base needs you compliant. Your contracts depend on it. Your customers depend on it. National security depends on it.
            </p>
            
            <p>
              Take advantage of this opportunity while it lasts.
            </p>

            {/* CTA Buttons */}
            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="bg-navy-800 text-white rounded-2xl p-8 text-center">
                <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Apply for the Grant</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Submit your application to the Cyber Grants Alliance today.
                </p>
                <a
                  href="https://www.cybergrantsalliance.org/cmmc-gap-assessment-grant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-navy-950 font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              
              <div className="bg-accent/10 border-2 border-accent rounded-2xl p-8 text-center">
                <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy-800 mb-3">Talk to Rick First</h3>
                <p className="text-gray-700 mb-6 text-sm">
                  Not sure if you qualify? Book a free call with our founder.
                </p>
                <a
                  href="https://capital-cyber.com/rick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Book a Call
                </a>
              </div>
            </div>

            <div className="bg-gray-100 border-l-4 border-accent rounded-r-xl p-6 my-8">
              <p className="text-gray-700 italic">
                "This grant program is a game changer for small defense contractors. We have seen too many good businesses struggle to afford the assessments they need. This removes that barrier entirely." 
              </p>
              <p className="text-navy-800 font-semibold mt-3">
                — Rick, Founder, CMMC Ready Now
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">
            Related Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/what-is-cmmc-gap-assessment" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <Shield className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                What Is a Gap Assessment?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn what a CMMC gap assessment covers and why you need one.
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link href="/blog/top-10-nist-800-171-gaps" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <Award className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                Top 10 Compliance Gaps
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                The most common issues found in every assessment.
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link href="/help-center" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors group">
              <HelpCircle className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                CMMC Help Center
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Answers to frequently asked CMMC questions.
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <span>View FAQs</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Footer */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            CMMC Ready Now is proudly powered by <a href="https://capital-cyber.com/cmmc-compliance-services/?utm_source=online&utm_medium=website&utm_campaign=cmmcreadynow&utm_content=grant-blog" className="font-bold text-navy-800 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Capital Cyber</a>. A cybersecurity firm helping defense contractors navigate NIST 800-171 compliance and prepare for CMMC certification.
          </p>
        </div>
      </section>
    </>
  );
}
