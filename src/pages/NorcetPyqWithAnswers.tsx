import React from 'react';
import { Link } from 'react-router-dom';
import { NprepCTA, SampleQuestions } from './PYQTemplateSections';

const NorcetPyqWithAnswers: React.FC = () => {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">NORCET Previous Year Questions with Answers</h1>

      <p className="mt-4 text-lg text-gray-700">
        Basic answer keys are provided for reference. Detailed explanations are available on NPrep.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-gray-900">Quick Access</h2>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        <li><Link className="text-primary hover:underline" to="/norcet-2024-question-paper">NORCET 2024 with Answer Key</Link></li>
        <li><Link className="text-primary hover:underline" to="/norcet-2023-question-paper">NORCET 2023 with Answer Key</Link></li>
        <li><Link className="text-primary hover:underline" to="/norcet-2022-question-paper">NORCET 2022 with Answer Key</Link></li>
      </ul>

      <SampleQuestions />
      <NprepCTA />
    </article>
  );
};

export default NorcetPyqWithAnswers;
