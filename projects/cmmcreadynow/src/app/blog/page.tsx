import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, FileText, Shield, DollarSign, AlertTriangle, TrendingUp, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CMMC Blog | Defense Contractor Cybersecurity Insights | CMMC Ready Now',
  description:
    'Stay informed with the latest CMMC compliance insights, cybersecurity best practices, and defense contractor guidance. Expert analysis on NIST 800-171, CMMC timelines, costs, and implementation strategies.',
  keywords: [
    'CMMC blog',
    'defense contractor cybersecurity',
    'NIST 800-171 insights',
    'CMMC compliance news',
    'cybersecurity best practices',
    'CMMC timeline updates',
    'defense contractor compliance',
    'CMMC cost analysis',
    'False Claims Act CMMC',
    'cybersecurity gap assessment',
  ],
  openGraph: {
    title: 'CMMC Blog | Defense Contractor Cybersecurity Insights | CMMC Ready Now',
    description:
      'Expert insights on CMMC compliance, cybersecurity best practices, and the latest developments affecting defense contractors.',
    type: 'website',
  },
};

const blogPosts = [
  {
    title: 'What Is a CMMC Gap Assessment and Why You Need One',
    slug: 'what-is-cmmc-gap-assessment',
    excerpt: 'A CMMC gap assessment is your roadmap to certification. Learn what it involves, why it is essential, and how it can save you time and money in your compliance journey.',
    date: '2026-03-01',
    readTime: '8 min read',
    category: 'Assessment',
    icon: Shield,
    featured: true
  },
  {
    title: 'CMMC Phase 2 Timeline: What Defense Contractors Need to Know in 2026',
    slug: 'cmmc-phase-2-timeline-2026', 
    excerpt: 'CMMC enforcement is accelerating. Understand the current timeline, what triggers full enforcement, and how to prepare your organization for the requirements ahead.',
    date: '2026-02-28',
    readTime: '10 min read',
    category: 'Timeline',
    icon: Calendar,
    featured: false
  },
  {
    title: 'Top 10 NIST 800 171 Gaps We Find in Every Assessment',
    slug: 'top-10-nist-800-171-gaps',
    excerpt: 'After hundreds of assessments, we see the same gaps repeatedly. Learn the most common NIST SP 800-171 compliance failures and how to avoid them.',
    date: '2026-02-25',
    readTime: '12 min read',
    category: 'Compliance',
    icon: AlertTriangle,
    featured: false
  },
  {
    title: 'The False Claims Act and CMMC: Why Self Certifying Wrong Can Cost You Everything',
    slug: 'false-claims-act-cmmc',
    excerpt: 'False Claims Act penalties for CMMC non-compliance can reach millions of dollars. Understand the risks and how to protect your organization from liability.',
    date: '2026-02-20',
    readTime: '9 min read',
    category: 'Legal',
    icon: AlertTriangle,
    featured: false
  },
  {
    title: 'How Much Does CMMC Compliance Cost for Small Businesses?',
    slug: 'cmmc-cost-small-business',
    excerpt: 'CMMC compliance costs vary widely based on your starting point. Get realistic budget expectations and strategies to manage costs effectively for small defense contractors.',
    date: '2026-02-15',
    readTime: '11 min read',
    category: 'Costs',
    icon: DollarSign,
    featured: false
  }
];

const categories = ['All', 'Assessment', 'Timeline', 'Compliance', 'Legal', 'Costs'];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 mb-6">
            <FileText className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold">Expert Insights</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            CMMC Compliance<br />
            <span className="text-accent">Blog & Insights</span>
          </h1>

          <p className="text-lg text-gray-300 mb-4">
            Stay informed with the latest cybersecurity insights for defense contractors.
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Expert analysis on CMMC compliance, NIST 800-171 implementation, and the cybersecurity challenges facing defense contractors today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://capital-cyber.com/rick"
              className="bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Expert Guidance <Phone className="w-5 h-5" />
            </Link>
            <Link
              href="/help-center"
              className="border border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
            >
              Browse FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-4">Featured Article</h2>
              <p className="text-gray-600 text-lg">Latest insights on CMMC compliance and defense contractor cybersecurity.</p>
            </div>

            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-accent transition-colors">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <featuredPost.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-navy-800 mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-4 text-center">
            Latest Articles
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
            Practical guidance and expert insights to help defense contractors navigate CMMC compliance successfully.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <post.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded font-medium">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated on CMMC Developments
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest CMMC insights, compliance updates, and cybersecurity best practices delivered to your inbox.
          </p>

          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-navy-800 mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-6">
              Join defense contractors who rely on our insights to stay ahead of compliance requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
              />
              <button className="bg-accent hover:bg-accent-dark text-navy-950 font-bold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              No spam. Unsubscribe anytime. Powered by Capital Cyber.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">
            Browse by Category
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.filter(cat => cat !== 'All').map((category) => {
              const categoryPosts = blogPosts.filter(post => post.category === category);
              const CategoryIcon = categoryPosts[0]?.icon || FileText;
              
              return (
                <div key={category} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:border-accent transition-colors group">
                  <CategoryIcon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-accent transition-colors">
                    {category}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-accent font-semibold text-sm">
                    <span>View Articles</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-4">
            Need Personalized CMMC Guidance?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            While our blog provides valuable insights, every organization has unique compliance challenges. Get expert guidance tailored to your specific situation.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-navy-800 mb-2">Gap Assessment</h3>
              <p className="text-gray-600 text-sm">Identify your specific compliance gaps and priorities.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-navy-800 mb-2">Implementation Plan</h3>
              <p className="text-gray-600 text-sm">Get a roadmap tailored to your timeline and budget.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-navy-800 mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">Access expert guidance throughout your compliance journey.</p>
            </div>
          </div>

          <Link
            href="https://capital-cyber.com/rick"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-navy-950 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            Book a Call with Rick
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            Free consultation • No obligation • Immediate value
          </p>
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