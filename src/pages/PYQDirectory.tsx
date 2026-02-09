import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FileText, ExternalLink, AlertCircle, Download, ArrowRight } from 'lucide-react';

const PYQDirectory: React.FC = () => {
  const { examId } = useParams<{ examId: string }>();

  // Only keeping NORCET data active
  const norcetData = {
    title: 'AIIMS NORCET PREVIOUS YEAR PAPERS',
    description: 'Authentic memory-based and official previous year question papers for AIIMS Nursing Officer Recruitment Common Eligibility Test (NORCET).',
    papers: [
      { year: '2024', shift: 'NORCET 7 PRELIMS (SEP)', type: 'OFFICIAL/MEMORY', link: 'https://links.nprep.in/aXOX5oZXPZb' },
      { year: '2023', shift: 'NORCET 4 (JUNE)', type: 'OFFICIAL/MEMORY', link: 'https://links.nprep.in/weaumiphIZb' },
      { year: '2022', shift: 'NORCET 3 (SHIFT 1)', type: 'OFFICIAL/MEMORY', link: 'https://links.nprep.in/f2X7pvwHMZb' },
      { year: '2022', shift: 'NORCET 3 (SHIFT 2)', type: 'OFFICIAL/MEMORY', link: 'https://links.nprep.in/K7VH496yQZb' },
      { year: 'MIXED', shift: '20 NOV (SHIFT 2)', type: 'PREVIOUS YEAR', link: 'https://links.nprep.in/xkOMXfpAhZb' },
    ]
  };

  // Check if user is trying to access non-NORCET content
  const isNonNorcet = examId && examId !== 'aiims-norcet';

  if (isNonNorcet) {
    return (
      <div className="py-16 text-center max-w-2xl mx-auto">
        <div className="bg-orange-50 p-8 rounded-lg border border-orange-100">
          <AlertCircle className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Content Moved</h1>
          <p className="text-gray-600 mb-6 text-lg">
            We have specialized! This website is now exclusively for <strong>AIIMS NORCET</strong> content. 
            The papers for <strong>{examId?.replace(/-/g, ' ').toUpperCase()}</strong> have been moved to our partner portal.
          </p>
          <a 
            href="https://nursingpyq.com" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-primary hover:bg-orange-600 transition-colors"
          >
            Visit nursingpyq.com <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  // Default View (NORCET)
  return (
    <div className="py-8">
      <div className="mb-8 border-b border-gray-200 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
          {norcetData.title}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          {norcetData.description}
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-sm">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-blue-500" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Note:</strong> Most papers are memory-based reconstructions as AIIMS does not release official question papers. These are highly accurate for practice.
            </p>
          </div>
        </div>
      </div>

      {/* Improved UX: Card Layout instead of simple list */}
      <div className="grid gap-6 md:grid-cols-1">
        {norcetData.papers.map((paper, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between group">
            <div className="flex items-start mb-4 md:mb-0">
              <div className="p-3 bg-orange-100 rounded-full mr-4 group-hover:bg-orange-200 transition-colors">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  AIIMS NORCET {paper.year}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 uppercase">
                    {paper.shift}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 uppercase">
                    {paper.type}
                  </span>
                </div>
              </div>
            </div>
            
            <a 
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-primary text-sm font-medium rounded-sm text-primary bg-white hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary min-w-[160px]"
            >
              <Download className="mr-2 h-4 w-4" />
              Attempt / View
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Need Subject-Wise Practice?</h3>
        <p className="text-gray-600 mb-4">Check out our subject-specific test series for focused revision.</p>
        <Link to="/subjects" className="text-primary font-bold hover:underline">View Subject Tests &rarr;</Link>
      </div>
    </div>
  );
};

export default PYQDirectory;
