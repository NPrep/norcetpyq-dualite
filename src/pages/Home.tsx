import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle, AlertTriangle, FileText } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
      
      {/* H1 */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-b-2 border-primary pb-4">
        NORCET Previous Year Questions – AIIMS Nursing Officer Exams
      </h1>

      {/* HERO CTA BOX - NORCET FOCUSED */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-sm shadow-lg mb-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-6">
          <h2 className="text-2xl font-bold text-white mb-2 mt-0">Master AIIMS NORCET</h2>
          <p className="text-gray-300 text-lg mb-0">
            Access the most comprehensive archive of authentic AIIMS NORCET previous year question papers (Prelims & Mains).
          </p>
        </div>
        <Link 
          to="/pyq/aiims-norcet" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-sm text-gray-900 bg-primary hover:bg-white transition-colors duration-200 whitespace-nowrap"
        >
          Solve NORCET PYQs <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      {/* LATEST NORCET PAPERS SECTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center">
          <FileText className="mr-2 h-6 w-6" />
          Latest NORCET PYQs
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link to="/pyq/aiims-norcet" className="block p-4 bg-white border border-gray-200 rounded-sm hover:border-primary hover:shadow-md transition-all group">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary m-0">NORCET 7 Prelims</h3>
                <p className="text-sm text-gray-500 m-0">September Cycle • Official/Memory</p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary" />
            </div>
          </Link>
          <Link to="/pyq/aiims-norcet" className="block p-4 bg-white border border-gray-200 rounded-sm hover:border-primary hover:shadow-md transition-all group">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary m-0">NORCET 6 Mains</h3>
                <p className="text-sm text-gray-500 m-0">April Cycle • Clinical Scenarios</p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary" />
            </div>
          </Link>
          <Link to="/pyq/aiims-norcet" className="block p-4 bg-white border border-gray-200 rounded-sm hover:border-primary hover:shadow-md transition-all group">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary m-0">NORCET 5</h3>
                <p className="text-sm text-gray-500 m-0">September Cycle • Full Paper</p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary" />
            </div>
          </Link>
          <Link to="/pyq/aiims-norcet" className="block p-4 bg-white border border-gray-200 rounded-sm hover:border-primary hover:shadow-md transition-all group">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary m-0">NORCET 4</h3>
                <p className="text-sm text-gray-500 m-0">June Cycle • Memory Based</p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary" />
            </div>
          </Link>
        </div>
        <div className="mt-4 text-right">
          <Link to="/pyq/aiims-norcet" className="text-sm font-bold text-primary hover:underline">View All Papers &rarr;</Link>
        </div>
      </section>

      {/* SECTION 1: What is NORCET? */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">What is AIIMS NORCET?</h2>
        <p className="text-gray-800 leading-relaxed text-lg">
          The <strong>Nursing Officer Recruitment Common Eligibility Test (NORCET)</strong> is the national-level examination conducted by AIIMS New Delhi. It serves as the single gateway for recruiting Nursing Officers for all AIIMS institutes across India, including AIIMS Delhi, Jodhpur, Rishikesh, Bhubaneswar, and others.
        </p>
        <p className="text-gray-800 leading-relaxed text-lg mt-4">
          Unlike state-level exams, NORCET is known for its high standard of testing, focusing heavily on clinical application, priority-based nursing interventions, and image-based questions. It is conducted twice a year (typically April and September), offering aspirants multiple opportunities to secure a prestigious central government position.
        </p>
      </section>

      {/* SECTION: IMPORTANCE OF PYQs */}
      <section className="mb-10 bg-orange-50 p-6 border-l-4 border-primary rounded-sm">
        <h2 className="text-2xl font-semibold text-primary mb-4 mt-0">Why NORCET PYQs are Critical?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. Clinical Scenario Mastery</h3>
            <p className="text-gray-800">
              NORCET asks "What is the priority nursing action?" rather than "What is the definition?". Solving <Link to="/blog/norcet-previous-year-question-analysis">analyzed PYQs</Link> trains your mind to think like an AIIMS examiner.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Repeat Topics, Not Questions</h3>
            <p className="text-gray-800">
              While exact questions rarely repeat, topics like "Digoxin Toxicity", "ECG Rhythms", and "BMW Management" appear in almost every cycle.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: NORCET Exam Pattern */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">AIIMS NORCET Exam Pattern</h2>
        <p className="text-gray-800 mb-4">
          Understanding the two-stage process (Prelims and Mains) is vital. The Prelims is a screening test, while the Mains determines your rank.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3 font-semibold border-r border-gray-300">Stage</th>
                <th className="px-4 py-3 font-semibold border-r border-gray-300">Duration</th>
                <th className="px-4 py-3 font-semibold border-r border-gray-300">Questions</th>
                <th className="px-4 py-3 font-semibold">Focus Area</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 border-r border-gray-200 font-medium">Stage I: Prelims</td>
                <td className="px-4 py-3 border-r border-gray-200">90 Mins</td>
                <td className="px-4 py-3 border-r border-gray-200">100 MCQs</td>
                <td className="px-4 py-3">Screening / Basic Knowledge</td>
              </tr>
              <tr className="bg-accent">
                <td className="px-4 py-3 border-r border-gray-200 font-medium">Stage II: Mains</td>
                <td className="px-4 py-3 border-r border-gray-200">90 Mins</td>
                <td className="px-4 py-3 border-r border-gray-200">100 MCQs</td>
                <td className="px-4 py-3">Clinical Scenarios / Rank Decider</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          * Both stages carry 1/3rd negative marking. Qualifying marks are typically 50% for UR/EWS.
        </p>
      </section>

      {/* SECTION 4: Eligibility */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">NORCET Eligibility Criteria</h2>
        <div className="bg-white border border-gray-200 p-6 rounded-sm">
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="block text-gray-900">B.Sc Nursing / Post Basic B.Sc</strong>
                <span className="text-gray-600">Registered as Nurse & Midwife with State/Indian Nursing Council. No experience required.</span>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="block text-gray-900">GNM (General Nursing Midwifery)</strong>
                <span className="text-gray-600">Registered as Nurse & Midwife + <strong>2 Years Experience</strong> in a minimum 50-bedded hospital.</span>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="block text-gray-900">Age Limit</strong>
                <span className="text-gray-600">18 to 30 Years (Relaxation for SC/ST/OBC as per Govt rules).</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 5: Syllabus Focus */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">NORCET Syllabus Breakdown</h2>
        <p className="text-gray-800 leading-relaxed text-lg">
          The syllabus covers the entire B.Sc Nursing curriculum, but the weightage is skewed. 
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-5 border border-gray-200 rounded-sm">
            <h3 className="font-bold text-gray-900 mb-2 text-lg">High Yield Subjects</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Medical Surgical Nursing (30-35%)</li>
              <li>Fundamentals of Nursing (20-25%)</li>
              <li>Obstetrics & Gynecology (10-15%)</li>
              <li>Psychiatric Nursing (5-10%)</li>
            </ul>
          </div>
          <div className="bg-white p-5 border border-gray-200 rounded-sm">
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Non-Nursing Section</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>General Knowledge & Current Affairs</li>
              <li>Aptitude & Reasoning</li>
              <li>Basic Computers</li>
              <li className="text-sm text-gray-500 mt-2 italic">*Total 20 Questions</li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <Link to="/blog/norcet-previous-year-question-analysis" className="text-primary font-bold hover:underline">
            Read Detailed Syllabus Analysis &rarr;
          </Link>
        </div>
      </section>

      {/* OTHER EXAMS NOTICE */}
      <section className="mb-12 bg-gray-50 p-6 rounded-sm text-center">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Looking for RRB, ESIC, or DSSSB Papers?</h3>
        <p className="text-gray-600 mb-4">
          This portal is exclusively dedicated to AIIMS NORCET. For other nursing exams, please visit our partner site.
        </p>
        <a 
          href="https://nursingpyq.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary font-bold hover:underline"
        >
          Visit nursingpyq.com <ExternalLinkIcon />
        </a>
      </section>

    </article>
  );
};

// Helper component for the external link icon
const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default Home;
