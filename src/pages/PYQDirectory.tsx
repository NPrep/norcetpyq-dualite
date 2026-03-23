import React from 'react';
import { Link } from 'react-router-dom';
import { NprepCTA, SampleQuestions } from './PYQTemplateSections';

const PYQDirectory: React.FC = () => {
  return (
    <article>
      <section className="bg-gray-50 py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">NORCET Previous Year Question Papers</h1>
          <p className="text-gray-600 leading-relaxed">
            Access year-wise question papers for AIIMS NORCET exam.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">Year-wise Papers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: '2024 paper', to: '/norcet-2024-question-paper' },
              { label: '2023 paper', to: '/norcet-2023-question-paper' },
              { label: '2022 paper', to: '/norcet-2022-question-paper' },
            ].map((item) => (
              <Link key={item.label} to={item.to} className="p-6 rounded-2xl shadow-md bg-white border border-gray-200 hover:border-primary">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.label}</h3>
                <p className="text-gray-600">Download link and basic answer key.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">More Access Pages</h2>
          <ul className="space-y-2 text-gray-600">
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

export default PYQDirectory;
