import React from 'react';
import { Link } from 'react-router-dom';
import { NprepCTA, SampleQuestions } from './PYQTemplateSections';

const NorcetPyqPdfDownload: React.FC = () => {
  return (
    <article>
      <section className="bg-gray-50 py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">NORCET PYQ PDF Download</h1>
          <p className="text-gray-600 leading-relaxed">Download previous year question papers in PDF format.</p>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">PDF Downloads</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Download NORCET 2024 PDF', to: '/norcet-2024-question-paper' },
              { title: 'Download NORCET 2023 PDF', to: '/norcet-2023-question-paper' },
              { title: 'Download NORCET 2022 PDF', to: '/norcet-2022-question-paper' },
            ].map((item) => (
              <Link key={item.title} to={item.to} className="p-6 rounded-2xl shadow-md bg-white border border-gray-200 hover:border-primary">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">Open page to download the paper.</p>
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

export default NorcetPyqPdfDownload;
