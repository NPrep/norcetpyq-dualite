import React from 'react';
import { Link } from 'react-router-dom';
import { NprepCTA, SampleQuestions } from './PYQTemplateSections';

const NorcetPyqPdfDownload: React.FC = () => {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">NORCET PYQ PDF Download</h1>
      <p className="mt-4 text-lg text-gray-700">Download previous year question papers in PDF format.</p>

      <ul className="mt-5 list-disc pl-6 text-gray-700">
        <li><Link className="text-primary hover:underline" to="/norcet-2024-question-paper">Download NORCET 2024 PDF</Link></li>
        <li><Link className="text-primary hover:underline" to="/norcet-2023-question-paper">Download NORCET 2023 PDF</Link></li>
        <li><Link className="text-primary hover:underline" to="/norcet-2022-question-paper">Download NORCET 2022 PDF</Link></li>
      </ul>

      <SampleQuestions />
      <NprepCTA />
    </article>
  );
};

export default NorcetPyqPdfDownload;
