import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const SubjectTests: React.FC = () => {
  const subjects = [
    { name: 'Medical Surgical Nursing (MSN)', link: 'https://links.nprep.in/hm3aQhddIZb' },
    { name: 'Obstetrics & Gynecology (OBG)', link: 'https://links.nprep.in/cpRfJAdQPYb' },
    { name: 'Community Health Nursing (CHN)', link: 'https://links.nprep.in/vGYx4MAtWZb' },
    { name: 'Pediatrics', link: 'https://links.nprep.in/NbTlCc02ZZb' },
    { name: 'Psychiatry', link: 'https://links.nprep.in/mEhGXn27ZZb' },
    { name: 'Nutrition', link: 'https://links.nprep.in/xqzNDqLI1Zb' },
    { name: 'Nursing Research', link: 'https://links.nprep.in/IuYQSDcC6Zb' },
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-primary pb-4">
        Subject Wise Nursing Tests
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Master individual nursing subjects with our focused test series. Click on a subject to attempt the test.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject, index) => (
          <a
            key={index}
            href={subject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white border border-gray-200 rounded-sm p-6 hover:border-primary hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-primary" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary">
              {subject.name}
            </h3>
            <p className="text-sm text-gray-500 mt-2">Attempt Test &rarr;</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SubjectTests;
