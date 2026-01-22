import React from 'react';
import { ClipboardList, ExternalLink } from 'lucide-react';

const MockTests: React.FC = () => {
  const mocks = [
    { name: 'NORCET Mock Test', link: 'https://links.nprep.in/XMYlOC6F5Zb' },
    { name: 'AIIMS Nursing Officer Exams', link: 'https://links.nprep.in/u34K12Mq6Zb' },
    { name: 'KGMU Nursing Officer', link: 'https://links.nprep.in/NOfgXlxg6Zb' },
    { name: 'SGPGI Nursing Officer', link: 'https://links.nprep.in/C0hk9CHg6Zb' },
    { name: 'PGIMER Nursing Officer', link: 'https://links.nprep.in/X6m4Q62F6Zb' },
    { name: 'RRB Nursing Officer', link: 'https://links.nprep.in/pC4gYL3eSZb' },
    { name: 'AIIMS CRE', link: 'https://links.nprep.in/VpwyAGbG6Zb' },
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-primary pb-4">
        Nursing Exam Mock Tests
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Simulate the real exam environment with our full-length mock tests for major nursing recruitment exams.
      </p>

      <div className="bg-white shadow-sm border border-gray-200 rounded-sm overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {mocks.map((mock, index) => (
            <li key={index} className="hover:bg-gray-50 transition-colors">
              <a
                href={mock.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ClipboardList className="h-5 w-5 text-gray-400 mr-4" />
                    <span className="text-lg font-medium text-gray-900">{mock.name}</span>
                  </div>
                  <div className="flex items-center text-primary font-medium text-sm">
                    Start Test <ExternalLink className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MockTests;
