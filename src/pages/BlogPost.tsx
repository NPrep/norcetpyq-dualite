import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogs';
import { 
  Calendar, 
  Clock, 
  User, 
  ChevronRight, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  List, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts[slug || ''];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Schema.org JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://norcetpreviousyearpapers.com/blog/${post.slug}`
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link to="/blog" className="hover:text-primary">Blog</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-900 truncate max-w-[200px]">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 border-b border-gray-200 pb-6">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2 text-primary" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-primary" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <article className="lg:w-3/4">
          
          {/* Table of Contents */}
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 mb-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <List className="h-5 w-5 mr-2 text-primary" />
              Table of Contents
            </h2>
            <nav className="space-y-2">
              {post.sections.filter(s => s.type === 'h2').map((section, idx) => (
                <a 
                  key={idx} 
                  href={`#${section.id}`} 
                  className="block text-gray-600 hover:text-primary text-sm pl-2 border-l-2 border-transparent hover:border-primary transition-colors"
                >
                  {section.content}
                </a>
              ))}
              <a href="#faqs" className="block text-gray-600 hover:text-primary text-sm pl-2 border-l-2 border-transparent hover:border-primary transition-colors">
                Frequently Asked Questions
              </a>
            </nav>
          </div>

          {/* Dynamic Sections */}
          <div className="space-y-8 text-gray-800 leading-relaxed">
            {post.sections.map((section, index) => {
              switch (section.type) {
                case 'h2':
                  return (
                    <h2 key={index} id={section.id} className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24 border-l-4 border-primary pl-4">
                      {section.content}
                    </h2>
                  );
                case 'h3':
                  return (
                    <h3 key={index} className="text-xl font-bold text-gray-800 mt-8 mb-3">
                      {section.content}
                    </h3>
                  );
                case 'p':
                  return (
                    <p key={index} className="text-lg mb-4" dangerouslySetInnerHTML={{ __html: section.content || '' }} />
                  );
                case 'table':
                  return (
                    <div key={index} className="my-8 overflow-x-auto border border-gray-200 rounded-sm shadow-sm">
                      <div className="bg-gray-100 px-4 py-2 font-bold text-gray-700 border-b border-gray-200">
                        {section.tableData?.title}
                      </div>
                      <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            {section.tableData?.headers.map((h, i) => (
                              <th key={i} className="px-4 py-3 text-left font-semibold text-gray-700 uppercase tracking-wider">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {section.tableData?.rows.map((row, rI) => (
                            <tr key={rI} className={rI % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              {row.map((cell, cI) => (
                                <td key={cI} className="px-4 py-3 text-gray-800 whitespace-pre-wrap">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                case 'list':
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 mb-6 ml-4">
                      {section.listItems?.map((item, i) => (
                        <li key={i} className="text-lg text-gray-800">{item}</li>
                      ))}
                    </ul>
                  );
                case 'callout':
                  const variant = section.calloutData?.variant || 'note';
                  const bgColors = {
                    summary: 'bg-green-50 border-green-500 text-green-900',
                    mistake: 'bg-red-50 border-red-500 text-red-900',
                    note: 'bg-blue-50 border-blue-500 text-blue-900'
                  };
                  const icons = {
                    summary: <CheckCircle className="h-6 w-6 text-green-600 mt-1" />,
                    mistake: <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />,
                    note: <Info className="h-6 w-6 text-blue-600 mt-1" />
                  };
                  return (
                    <div key={index} className={`flex gap-4 p-6 rounded-sm border-l-4 my-8 ${bgColors[variant]}`}>
                      <div className="flex-shrink-0">{icons[variant]}</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">{section.calloutData?.title}</h4>
                        <p className="whitespace-pre-line leading-relaxed">{section.calloutData?.content}</p>
                      </div>
                    </div>
                  );
                case 'steps':
                  return (
                    <div key={index} className="my-8">
                      <h4 className="font-bold text-xl mb-6">Step-by-Step Process:</h4>
                      <div className="space-y-4">
                        {section.steps?.map((step, i) => (
                          <div key={i} className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                              {i + 1}
                            </div>
                            <p className="text-lg text-gray-800 pt-1">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                case 'example':
                  return (
                    <div key={index} className="bg-gray-800 text-gray-100 p-6 rounded-sm my-8 border-l-4 border-primary">
                      <h4 className="font-bold text-primary mb-2 uppercase tracking-wide text-sm">Real World Example</h4>
                      <div className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content || '' }} />
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* FAQs Section */}
          <div id="faqs" className="mt-16 pt-10 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {post.faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white border border-gray-200 rounded-sm">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-50">
                    {faq.question}
                    <span className="ml-2 transition-transform group-open:rotate-180">
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Glossary Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-primary" />
              Glossary of Terms
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {post.glossary.map((item, idx) => (
                <div key={idx}>
                  <dt className="font-bold text-gray-900">{item.term}</dt>
                  <dd className="text-sm text-gray-600 mt-1">{item.definition}</dd>
                </div>
              ))}
            </div>
          </div>

        </article>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-8">
          {/* Related Articles */}
          <div className="bg-white border border-gray-200 p-6 rounded-sm sticky top-24">
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider border-b border-gray-100 pb-2">
              Related Articles
            </h3>
            <ul className="space-y-4">
              {post.relatedSlugs.map((slug, idx) => {
                const relatedPost = blogPosts[slug];
                if (!relatedPost) return null;
                return (
                  <li key={idx}>
                    <Link to={`/blog/${slug}`} className="group block">
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-primary leading-snug mb-1">
                        {relatedPost.title}
                      </h4>
                      <span className="text-xs text-gray-500 flex items-center">
                        Read Article <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            
            {/* CTA */}
            <div className="mt-8 bg-primary p-4 rounded-sm text-white text-center">
              <h4 className="font-bold mb-2">Start Practicing?</h4>
              <p className="text-sm mb-4 opacity-90">Access 5000+ PYQs for free.</p>
              <Link to="/pyq" className="block w-full bg-white text-primary font-bold py-2 px-4 rounded text-sm hover:bg-gray-100 transition-colors">
                Go to PYQs
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;
