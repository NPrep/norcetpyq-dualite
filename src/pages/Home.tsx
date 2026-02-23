import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle, AlertTriangle, FileText } from 'lucide-react';

const cycleFilters = [
  { cycle: 'NORCET 4', month: 'June 2022', source: 'Memory' },
  { cycle: 'NORCET 5', month: 'September 2023', source: 'Official' },
  { cycle: 'NORCET 6', month: 'April 2024', source: 'Official' },
  { cycle: 'NORCET 7', month: 'September 2024', source: 'Official' },
  { cycle: 'NORCET 8', month: 'April 2025', source: 'Memory' },
  { cycle: 'NORCET 9', month: 'September 2025', source: 'Memory' },
];

const pyqCards = [
  {
    cycle: 'NORCET 7',
    date: 'September 2024',
    type: 'Prelims',
    questions: '100 Questions',
    difficulty: 'Moderate',
    completion: 68,
    pdf: true,
  },
  {
    cycle: 'NORCET 6',
    date: 'April 2024',
    type: 'Mains',
    questions: '100 Questions',
    difficulty: 'High',
    completion: 45,
    pdf: true,
  },
  {
    cycle: 'NORCET 5',
    date: 'September 2023',
    type: 'Prelims',
    questions: '100 Questions',
    difficulty: 'Moderate',
    completion: 81,
    pdf: true,
  },
  {
    cycle: 'NORCET 4',
    date: 'June 2022',
    type: 'Mains',
    questions: '100 Questions',
    difficulty: 'High',
    completion: 32,
    pdf: false,
  },
];

const syllabusDistribution = [
  { subject: 'Medical Surgical Nursing', percentage: 35, color: 'bg-blue-500' },
  { subject: 'Fundamentals of Nursing', percentage: 25, color: 'bg-emerald-500' },
  { subject: 'Obstetrics & Gynecology', percentage: 15, color: 'bg-violet-500' },
  { subject: 'Psychiatric Nursing', percentage: 10, color: 'bg-amber-500' },
];

const Home: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
      {/* H1 */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-b-2 border-primary pb-4">
        NORCET Previous Year Questions – AIIMS Nursing Officer Exams
      </h1>

      {/* HERO CTA BOX - NORCET FOCUSED */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-xl shadow-xl mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 mt-0">
              NORCET Previous Year Questions — Authentic Papers from Every Cycle
            </h2>
            <p className="text-gray-300 text-lg mb-0">
              Access the most comprehensive archive of authentic AIIMS NORCET previous year question papers (Prelims & Mains).
            </p>
          </div>
          <Link
            to="/pyq/aiims-norcet"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-gray-900 bg-primary hover:bg-white transition-colors duration-200 whitespace-nowrap"
          >
            Solve NORCET PYQs <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="mt-8 border border-white/20 rounded-xl p-4 bg-white/5">
          <p className="text-sm md:text-base text-gray-200 font-semibold mb-3">Filter by year: NORCET 4 | 5 | 6 | 7 | 8 | 9</p>
          <div className="flex flex-wrap gap-3">
            {cycleFilters.map((filter) => (
              <Link
                key={filter.cycle}
                to="/pyq/aiims-norcet"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              >
                <span className="block text-sm font-semibold text-white leading-tight">{filter.cycle}</span>
                <span className="block text-xs text-gray-300 leading-tight">{filter.month}</span>
                <span className="inline-block text-[11px] font-medium text-gray-900 bg-primary/90 px-2 py-0.5 rounded-full mt-1">
                  ({filter.source})
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* LATEST NORCET PAPERS SECTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center">
          <FileText className="mr-2 h-6 w-6" />
          Latest NORCET PYQs
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {pyqCards.map((paper) => (
            <article
              key={paper.cycle}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="flex gap-4">
                <div className="min-w-20 h-20 rounded-lg bg-gradient-to-br from-primary/15 to-primary/40 flex items-center justify-center">
                  <span className="text-2xl font-black text-primary">{paper.cycle.replace('NORCET ', 'N')}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 m-0">{paper.cycle}</h3>
                  <p className="text-sm text-gray-500 m-0">{paper.date}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-700">{paper.type}</span>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700">{paper.questions}</span>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-orange-50 text-orange-700">{paper.difficulty}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>NPrep completion</span>
                  <span>{paper.completion}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${paper.completion}%` }} />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  to="/pyq/aiims-norcet"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-gray-900 font-semibold hover:bg-primary/90"
                >
                  Solve Online
                </Link>
                {paper.pdf ? (
                  <Link
                    to="/pyq/aiims-norcet"
                    className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:border-primary hover:text-primary"
                  >
                    Download PDF
                  </Link>
                ) : (
                  <span className="inline-flex items-center px-4 py-2 rounded-lg border border-dashed border-gray-300 text-gray-400 font-medium">
                    PDF Coming Soon
                  </span>
                )}
              </div>
            </article>
          ))}
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
      <section className="mb-10 bg-orange-50 p-6 border-l-4 border-primary rounded-xl">
        <h2 className="text-2xl font-semibold text-primary mb-4 mt-0">Why NORCET PYQs are Critical?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. Clinical Scenario Mastery</h3>
            <p className="text-gray-800">
              NORCET asks "What is the priority nursing action?" rather than "What is the definition?". Solving{' '}
              <Link to="/blog/norcet-previous-year-question-analysis">analyzed PYQs</Link> trains your mind to think like an AIIMS examiner.
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
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-primary mt-0">Stage I: Prelims</h3>
            <ul className="m-0 p-0 list-none space-y-2 text-gray-700">
              <li><strong>Duration:</strong> 90 Minutes</li>
              <li><strong>Questions:</strong> 100 MCQs</li>
              <li><strong>Focus:</strong> Screening + Basic Concepts</li>
              <li><strong>Marking:</strong> 1/3rd Negative</li>
            </ul>
          </div>

          <div className="text-center text-primary font-bold">
            <ArrowRight className="mx-auto h-6 w-6" />
            <p className="m-0 text-sm">Qualify → Advance</p>
          </div>

          <div className="bg-accent border border-gray-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-primary mt-0">Stage II: Mains</h3>
            <ul className="m-0 p-0 list-none space-y-2 text-gray-700">
              <li><strong>Duration:</strong> 90 Minutes</li>
              <li><strong>Questions:</strong> 100 MCQs</li>
              <li><strong>Focus:</strong> Clinical Scenarios + Rank Decider</li>
              <li><strong>Marking:</strong> 1/3rd Negative</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-3">* Qualifying marks are typically 50% for UR/EWS.</p>
      </section>

      {/* SECTION 4: Eligibility */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">NORCET Eligibility Criteria</h2>
        <div className="bg-white border border-gray-200 p-6 rounded-xl">
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
        <p className="text-gray-800 leading-relaxed text-lg">The syllabus covers the entire B.Sc Nursing curriculum, but the weightage is skewed.</p>

        <div className="bg-white p-5 border border-gray-200 rounded-xl mt-6">
          <h3 className="font-bold text-gray-900 mb-4 text-lg mt-0">High Yield Subjects</h3>
          <div className="space-y-4">
            {syllabusDistribution.map((item) => (
              <div key={item.subject}>
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                  <span>{item.subject}</span>
                  <span>{item.percentage}%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 mb-0 italic">Source: Based on analysis of NORCET 5-9 papers.</p>
        </div>

        <div className="mt-6 bg-white p-5 border border-gray-200 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-2 text-lg mt-0">Non-Nursing Section</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>General Knowledge & Current Affairs</li>
            <li>Aptitude & Reasoning</li>
            <li>Basic Computers</li>
            <li className="text-sm text-gray-500 mt-2 italic">*Total 20 Questions</li>
          </ul>
        </div>

        <div className="mt-6">
          <Link to="/blog/norcet-previous-year-question-analysis" className="text-primary font-bold hover:underline">
            Read Detailed Syllabus Analysis &rarr;
          </Link>
        </div>
      </section>

      {/* OTHER EXAMS NOTICE */}
      <section className="mb-12 bg-gray-50 p-6 rounded-xl text-center border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-2 mt-0">Looking for RRB, ESIC, or DSSSB PYQs?</h3>
        <p className="text-gray-600 mb-4">This portal is exclusively dedicated to AIIMS NORCET.</p>
        <a
          href="https://nursingpyq.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary font-bold hover:underline"
        >
          Looking for RRB, ESIC, or DSSSB PYQs? → Visit our sister site NursingPYQ.com (also by NPrep) <ExternalLinkIcon />
        </a>
      </section>

      <section className="mb-10 bg-amber-50 p-5 border-l-4 border-amber-400 rounded-xl">
        <h3 className="text-lg font-bold text-gray-900 mt-0 mb-2 flex items-center">
          <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" /> Preparation Tip
        </h3>
        <p className="text-gray-700 mb-0">
          Prioritize PYQs from the latest two cycles and solve them in timed mode first. Then revise older cycles using topic-wise tags to maximize retention.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-primary flex items-center mb-3 mt-0">
          <BookOpen className="mr-2 h-5 w-5" /> Start with the smartest sequence
        </h3>
        <p className="text-gray-700 mb-0">NORCET 7 → NORCET 6 → NORCET 5 → NORCET 4 gives you the best blend of latest pattern + foundational coverage.</p>
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
