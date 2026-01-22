import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const posts = [
    {
      slug: 'norcet-previous-year-question-analysis',
      title: 'Detailed Analysis of NORCET Previous Year Questions',
      excerpt: 'We break down the last 3 years of NORCET papers to identify the most high-yield topics and shifting trends in question patterns.',
      date: 'October 15, 2025'
    },
    {
      slug: 'importance-of-pyqs-in-nursing-exams',
      title: 'Why PYQs are the Secret Weapon for Nursing Exams',
      excerpt: 'Understanding why 40% of your preparation time should be dedicated to solving previous year papers for exams like RRB and ESIC.',
      date: 'September 28, 2025'
    },
    {
      slug: 'rrb-staff-nurse-syllabus-breakdown',
      title: 'RRB Staff Nurse 2026: Syllabus & Strategy',
      excerpt: 'A complete guide to cracking the Railway Staff Nurse exam, with a special focus on the non-technical section.',
      date: 'September 10, 2025'
    },
    {
      slug: 'time-management-tips-nursing-exams',
      title: 'Time Management Tips for Nursing Officers',
      excerpt: 'How to manage your time effectively during the 3-hour marathon of AIIMS NORCET and other competitive exams.',
      date: 'August 22, 2025'
    },
    {
      slug: 'how-to-crack-norcet-first-attempt',
      title: 'How to Crack AIIMS NORCET in First Attempt',
      excerpt: 'Proven strategies from toppers on how to clear the toughest nursing exam in India without years of coaching.',
      date: 'August 05, 2025'
    },
    {
      slug: 'esic-vs-rrb-nursing-job',
      title: 'ESIC vs RRB: Which Nursing Job is Better?',
      excerpt: 'A comparative analysis of salary, perks, work-life balance, and career growth in ESIC and Railway hospitals.',
      date: 'July 18, 2025'
    },
    {
      slug: 'top-books-nursing-officer-exams',
      title: 'Top 5 Books for Nursing Officer Exams 2026',
      excerpt: 'The ultimate reading list for nursing aspirants, covering theory, MCQs, and practical clinical scenarios.',
      date: 'July 02, 2025'
    },
    {
      slug: 'negative-marking-strategy',
      title: 'Mastering Negative Marking in Competitive Exams',
      excerpt: 'Learn the art of intelligent guessing and risk management to minimize negative marks in objective tests.',
      date: 'June 20, 2025'
    },
    {
      slug: 'daily-routine-nursing-aspirant',
      title: 'Daily Routine of a Successful Nursing Aspirant',
      excerpt: 'How to balance clinical duties, coaching classes, and self-study. A realistic timetable for success.',
      date: 'June 10, 2025'
    }
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-primary pb-4">Nursing Exam Insights & Analysis</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="flex flex-col bg-white border border-gray-200 rounded-sm p-6 hover:shadow-md transition-shadow">
            <p className="text-xs text-gray-500 mb-3">{post.date}</p>
            <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors leading-tight">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-grow">{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="text-primary text-sm font-medium hover:underline inline-flex items-center mt-auto">
              Read Article &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
