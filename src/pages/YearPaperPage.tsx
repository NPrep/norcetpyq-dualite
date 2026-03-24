import React from 'react';
import { Link } from 'react-router-dom';
import { NprepCTA, SampleQuestions } from './PYQTemplateSections';

type YearPaperPageProps = {
  year: string;
};

const YearPaperPage: React.FC<YearPaperPageProps> = ({ year }) => {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">NORCET {year} Question Paper</h1>

      <p className="mt-4 text-lg text-gray-700">
        Download the AIIMS NORCET {year} question paper to practice real exam questions.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-gray-900">Download</h2>
      <a href="#" className="mt-3 inline-flex text-primary hover:underline">Download PDF</a>

      <h2 className="mt-8 text-2xl font-semibold text-gray-900">Answer Key</h2>
      <p className="mt-3 text-gray-700">Basic answer key provided.</p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">More Papers</h2>
        <ul className="mt-3 list-disc pl-6 text-gray-700">
          <li><Link className="text-primary hover:underline" to="/norcet-2024-question-paper">NORCET 2024 Question Paper</Link></li>
          <li><Link className="text-primary hover:underline" to="/norcet-2023-question-paper">NORCET 2023 Question Paper</Link></li>
          <li><Link className="text-primary hover:underline" to="/norcet-2022-question-paper">NORCET 2022 Question Paper</Link></li>
          <li><Link className="text-primary hover:underline" to="/norcet-2021-question-paper">NORCET 2021 Question Paper</Link></li>
          <li><Link className="text-primary hover:underline" to="/norcet-previous-year-question-papers">Master PYQ Page</Link></li>
        </ul>
      </section>

      <SampleQuestions />
      <NprepCTA />
    </article>
  );
};

export default YearPaperPage;
