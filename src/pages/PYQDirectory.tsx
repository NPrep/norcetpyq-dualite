import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FileText, ExternalLink, AlertCircle } from 'lucide-react';

const PYQDirectory: React.FC = () => {
  const { examId } = useParams<{ examId: string }>();

  const pyqData: Record<string, any> = {
    'rrb-staff-nurse': {
      title: 'RRB STAFF NURSE PREVIOUS YEAR PAPERS',
      description: 'Collection of Railway Recruitment Board Staff Nurse exam papers from previous recruitment cycles.',
      papers: [
        { year: '2019', shift: '20 JULY - SHIFT I', type: 'OFFICIAL', link: 'https://links.nprep.in/Wm36lpRx0Zb' },
        { year: '2019', shift: '21 JULY - SHIFT I', type: 'OFFICIAL', link: 'https://links.nprep.in/9PwNw5DuPZb' },
        { year: '2019', shift: '29 APRIL - SHIFT 3', type: 'NURSING SUPERINTENDENT', link: 'https://links.nprep.in/8LR9YaHPEZb' },
        { year: 'MIXED', shift: 'PREVIOUS YEAR', type: 'NURSING OFFICER', link: 'https://links.nprep.in/iYJK63NtHZb' },
        { year: '2021', shift: 'PREVIOUS YEAR', type: 'NURSING OFFICER', link: 'https://links.nprep.in/QNGYhi8GfZb' },
      ]
    },
    'esic-staff-nurse': {
      title: 'ESIC STAFF NURSE PREVIOUS YEAR PAPERS',
      description: 'Previous year question papers for Employees State Insurance Corporation (ESIC) Nursing Officer exams.',
      papers: [
        { year: '2024', shift: '07 JULY', type: 'UPSC ESIC NO', link: 'https://links.nprep.in/PKB7mMivuZb' },
        { year: '2019', shift: 'SHIFT I', type: 'OFFICIAL PAPER', link: 'https://links.nprep.in/wpMKcyDzQZb' },
        { year: '2019', shift: 'SHIFT 2', type: 'OFFICIAL PAPER', link: 'https://links.nprep.in/Bk1Ehoy14Zb' },
        { year: '2016', shift: 'SHIFT 1', type: 'OFFICIAL PAPER', link: 'https://links.nprep.in/8IQ1zxGs8Zb' },
        { year: 'UNKNOWN', shift: '19 MAR, SHIFT 2', type: 'OFFICIAL PAPER', link: 'https://links.nprep.in/wjFgvVwa7Zb' },
      ]
    },
    'dsssb-staff-nurse': {
      title: 'DSSSB STAFF NURSE PREVIOUS YEAR PAPERS',
      description: 'Delhi Subordinate Services Selection Board (DSSSB) Nursing Officer previous year papers.',
      papers: [
        { year: '2019', shift: '28 AUG - SHIFT I', type: 'OFFICIAL', link: 'https://links.nprep.in/PYdwRLVs8Zb' },
        { year: '2019', shift: '28 AUG - SHIFT II', type: 'OFFICIAL', link: 'https://links.nprep.in/FZqrzFWs8Zb' },
        { year: '2019', shift: '29 AUG - SHIFT I', type: 'OFFICIAL', link: 'https://links.nprep.in/e6PFDXYs8Zb' },
        { year: '2019', shift: '29 AUG - SHIFT II', type: 'OFFICIAL', link: 'https://links.nprep.in/Na51lFXs8Zb' },
        { year: '2015', shift: 'SOLVED PAPER', type: 'PUBLIC HEALTH NURSE', link: 'https://links.nprep.in/Q7Cp7d4n8Zb' },
      ]
    },
    'btsc-staff-nurse': {
      title: 'BTSC STAFF NURSE PREVIOUS YEAR PAPERS',
      description: 'Bihar Technical Service Commission (BTSC) Staff Nurse recruitment exam papers.',
      papers: [
        { year: '2025', shift: 'PAPER 2025', type: 'OFFICIAL', link: 'https://links.nprep.in/ZpyBui10qZb' },
        { year: 'MIXED', shift: 'PAPER 1', type: 'STAFF NURSE', link: 'https://links.nprep.in/fCgXW8DSWZb' },
        { year: 'MIXED', shift: 'PAPER 2', type: 'STAFF NURSE', link: 'https://links.nprep.in/oCMagiQs8Zb' },
        { year: 'MIXED', shift: 'PAPER 3', type: 'STAFF NURSE', link: 'https://links.nprep.in/M23vprRs8Zb' },
      ]
    },
    'sgpgi-nursing-officer': {
      title: 'SGPGI NURSING OFFICER PYQ',
      description: 'Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGI) Lucknow Nursing Officer papers.',
      papers: [
        { year: '2022', shift: 'PREVIOUS YEAR', type: 'NURSING OFFICER', link: 'https://links.nprep.in/Vy4XCouzQZb' },
      ]
    },
    'gmch-chandigarh': {
      title: 'GMCH CHANDIGARH PYQ',
      description: 'Government Medical College & Hospital (GMCH) Chandigarh Staff Nurse previous papers.',
      papers: [
        { year: 'MIXED', shift: 'PREVIOUS YEAR', type: 'STAFF NURSE', link: 'https://links.nprep.in/Jol2zqwzQZb' },
      ]
    },
    'pgimer-chandigarh': {
      title: 'PGIMER CHANDIGARH PYQ',
      description: 'Postgraduate Institute of Medical Education and Research (PGIMER) Chandigarh exam papers.',
      papers: [
        { year: '2015', shift: 'PREVIOUS YEAR', type: 'STAFF NURSE', link: 'https://links.nprep.in/w3MkLFIJZZb' },
      ]
    },
    'pgims-rohtak': {
      title: 'PGIMS ROHTAK PYQ',
      description: 'Pt. B.D. Sharma PGIMS Rohtak Staff Nurse previous year question papers.',
      papers: [
        { year: '2017', shift: 'PREVIOUS YEAR', type: 'STAFF NURSE', link: 'https://links.nprep.in/EWf3btIKZZb' },
      ]
    },
    // Default fallback
    'default': {
      title: 'NURSING EXAM PREVIOUS YEAR QUESTIONS',
      description: 'Select a specific exam to view available previous year question papers.',
      papers: []
    }
  };

  const currentExam = pyqData[examId || ''] || pyqData['default'];

  // List of keys to display in the main directory
  const availableExams = [
    'rrb-staff-nurse',
    'esic-staff-nurse',
    'dsssb-staff-nurse',
    'btsc-staff-nurse',
    'sgpgi-nursing-officer',
    'gmch-chandigarh',
    'pgimer-chandigarh',
    'pgims-rohtak'
  ];

  if (!examId || !pyqData[examId]) {
    return (
      <div className="py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 uppercase">ALL NURSING EXAM PYQS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {availableExams.map((key) => (
            <Link key={key} to={`/pyq/${key}`} className="block p-6 bg-white border border-gray-200 hover:border-primary transition-colors rounded-sm shadow-sm group">
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-primary mb-2 uppercase">
                {key.replace(/-/g, ' ')}
              </h2>
              <p className="text-gray-600 text-sm">Access year-wise question papers and solutions.</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="mb-8">
        <Link to="/pyq" className="text-sm text-gray-500 hover:text-primary mb-4 inline-block">&larr; BACK TO ALL EXAMS</Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 uppercase">{currentExam.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{currentExam.description}</p>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-amber-500" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-amber-700">
              Note: Some papers are memory-based reconstructions provided by students who appeared for the exam, as official papers are not always released.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm border border-gray-200 rounded-sm overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {currentExam.papers.length > 0 ? (
            currentExam.papers.map((paper: any, index: number) => (
              <li key={index} className="hover:bg-gray-50 transition-colors">
                <div className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-6 w-6 text-gray-400 mr-4" />
                    <div>
                      <p className="text-sm font-medium text-primary truncate uppercase">
                        {examId.replace(/-/g, ' ')} {paper.year}
                      </p>
                      <p className="text-xs text-gray-500 uppercase">
                        {paper.shift} • {paper.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <a 
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none uppercase"
                    >
                      <span className="mr-1">ATTEMPT TEST</span>
                      <ExternalLink className="h-3 w-3 text-gray-500" />
                    </a>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li className="px-6 py-8 text-center text-gray-500">
              No papers currently available for this category. Check back soon.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PYQDirectory;
