import React from 'react';
import { Link } from 'react-router-dom';
import { NprepCTA, SampleQuestions } from './PYQTemplateSections';

const NorcetPyqWithAnswers: React.FC = () => {
  return (
    <article>
      <section className="bg-gray-50 py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">NORCET Previous Year Questions with Answers</h1>
          <p className="text-gray-600 leading-relaxed">
            Basic answer keys are provided for reference. Detailed explanations are available on NPrep.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">Quick Access</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'NORCET 2024 with Answer Key', to: '/norcet-2024-question-paper' },
              { title: 'NORCET 2023 with Answer Key', to: '/norcet-2023-question-paper' },
              { title: 'NORCET 2022 with Answer Key', to: '/norcet-2022-question-paper' },
            ].map((item) => (
              <Link key={item.title} to={item.to} className="p-6 rounded-2xl shadow-md bg-white border border-gray-200 hover:border-primary">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">Basic key only. Detailed solutions on NPrep.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SampleQuestions />
      <NprepCTA />
    </article>
  );
};

export default NorcetPyqWithAnswers;
