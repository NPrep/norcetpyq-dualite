import React from 'react';
import { Link } from 'react-router-dom';
import { NprepCTA, SampleQuestions } from './PYQTemplateSections';

const PYQDirectory: React.FC = () => {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">NORCET Previous Year Question Papers</h1>

      <p className="mt-4 text-lg text-gray-700">
        Access year-wise question papers for AIIMS NORCET exam.
      </p>

      <ul className="mt-5 list-disc pl-6 text-gray-700">
        <li><Link className="text-primary hover:underline" to="/norcet-2024-question-paper">2024 paper</Link></li>
        <li><Link className="text-primary hover:underline" to="/norcet-2023-question-paper">2023 paper</Link></li>
        <li><Link className="text-primary hover:underline" to="/norcet-2022-question-paper">2022 paper</Link></li>
      </ul>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">More Access Pages</h2>
        <ul className="mt-3 list-disc pl-6 text-gray-700">
          <li><Link className="text-primary hover:underline" to="/norcet-pyq-pdf-download">NORCET PYQ PDF Download</Link></li>
          <li><Link className="text-primary hover:underline" to="/norcet-pyq-with-answers">NORCET PYQ with Answers</Link></li>
        </ul>
      </section>

      <SampleQuestions />
      <NprepCTA />
    </article>
  );
};

export default PYQDirectory;
