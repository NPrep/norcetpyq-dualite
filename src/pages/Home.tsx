import React from 'react';
import { Link } from 'react-router-dom';
import { NprepCTA, SampleQuestions } from './PYQTemplateSections';

const Home: React.FC = () => {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">AIIMS NORCET Previous Year Question Papers</h1>

      <p className="mt-4 text-lg text-gray-700">
        Download previous year question papers of AIIMS NORCET to understand exam pattern and question trends.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-gray-900">Available Papers</h2>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        <li><Link className="text-primary hover:underline" to="/norcet-2024-question-paper">NORCET 2024 Question Paper</Link></li>
        <li><Link className="text-primary hover:underline" to="/norcet-2023-question-paper">NORCET 2023 Question Paper</Link></li>
        <li><Link className="text-primary hover:underline" to="/norcet-2022-question-paper">NORCET 2022 Question Paper</Link></li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold text-gray-900">Why Solve Previous Year Papers?</h2>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        <li>Understand exam pattern</li>
        <li>Identify important topics</li>
        <li>Improve time management</li>
      </ul>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Browse PYQ Hubs</h2>
        <ul className="mt-3 list-disc pl-6 text-gray-700">
          <li><Link className="text-primary hover:underline" to="/norcet-previous-year-question-papers">NORCET Previous Year Question Papers</Link></li>
          <li><Link className="text-primary hover:underline" to="/norcet-pyq-pdf-download">NORCET PYQ PDF Download</Link></li>
          <li><Link className="text-primary hover:underline" to="/norcet-pyq-with-answers">NORCET PYQ with Answers</Link></li>
        </ul>
      </section>

      <SampleQuestions />
      <NprepCTA />
    </article>
  );
};

export default Home;
