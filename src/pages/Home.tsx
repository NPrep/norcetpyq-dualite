import React from 'react';
import { Link } from 'react-router-dom';
import { NprepCTA, SampleQuestions } from './PYQTemplateSections';

const Home: React.FC = () => {
  return (
    <article>
      <section className="bg-gray-50 py-16 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">AIIMS NORCET Previous Year Question Papers</h1>
          <p className="text-gray-600 leading-relaxed">
            Download previous year question papers of AIIMS NORCET to understand exam pattern and question trends.
          </p>
          <Link
            to="/norcet-previous-year-question-papers"
            className="inline-block mt-6 rounded-xl bg-primary px-6 py-3 font-semibold text-gray-900 shadow hover:bg-primary/90"
          >
            Browse PYQ Library
          </Link>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">Available Papers</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'NORCET 2024 Question Paper', to: '/norcet-2024-question-paper' },
              { title: 'NORCET 2023 Question Paper', to: '/norcet-2023-question-paper' },
              { title: 'NORCET 2022 Question Paper', to: '/norcet-2022-question-paper' },
            ].map((paper) => (
              <Link key={paper.title} to={paper.to} className="rounded-2xl bg-white p-6 shadow-md border border-gray-200 hover:border-primary transition-colors">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{paper.title}</h3>
                <p className="text-gray-600">Open year-wise paper and basic answer key.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">Why Solve Previous Year Papers?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {['Understand exam pattern', 'Identify important topics', 'Improve time management'].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-6 shadow-md">
                <p className="text-gray-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">Browse PYQ Hubs</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• <Link className="text-primary hover:underline" to="/norcet-previous-year-question-papers">NORCET Previous Year Question Papers</Link></li>
            <li>• <Link className="text-primary hover:underline" to="/norcet-pyq-pdf-download">NORCET PYQ PDF Download</Link></li>
            <li>• <Link className="text-primary hover:underline" to="/norcet-pyq-with-answers">NORCET PYQ with Answers</Link></li>
          </ul>
        </div>
      </section>

      <SampleQuestions />
      <NprepCTA />
    </article>
  );
};

export default Home;
