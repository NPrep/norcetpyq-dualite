import React from 'react';
import { Link } from 'react-router-dom';
import { NprepCTA, SampleQuestions } from './PYQTemplateSections';

type YearPaperPageProps = {
  year: string;
};

const YearPaperPage: React.FC<YearPaperPageProps> = ({ year }) => {
  return (
    <article>
      <section className="bg-gray-50 py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">NORCET {year} Question Paper</h1>
          <p className="text-gray-600 leading-relaxed">
            Download the AIIMS NORCET {year} question paper to practice real exam questions.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
          <div className="p-6 rounded-2xl shadow-md bg-white border border-gray-200">
            <h2 className="text-2xl font-semibold mt-0 mb-3 text-gray-900">Download</h2>
            <a href="#" className="inline-block mt-2 px-6 py-3 bg-primary text-gray-900 rounded-xl shadow hover:bg-primary/90 font-semibold">
              Download PDF
            </a>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white border border-gray-200">
            <h2 className="text-2xl font-semibold mt-0 mb-3 text-gray-900">Answer Key</h2>
            <p className="text-gray-600 leading-relaxed">Basic answer key provided.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">More Papers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'NORCET 2024 Question Paper', to: '/norcet-2024-question-paper' },
              { title: 'NORCET 2023 Question Paper', to: '/norcet-2023-question-paper' },
              { title: 'NORCET 2022 Question Paper', to: '/norcet-2022-question-paper' },
              { title: 'NORCET 2021 Question Paper', to: '/norcet-2021-question-paper' },
              { title: 'Master PYQ Page', to: '/norcet-previous-year-question-papers' },
              { title: 'PYQ PDF Download', to: '/norcet-pyq-pdf-download' },
            ].map((item) => (
              <Link key={item.title} to={item.to} className="p-6 rounded-2xl shadow-md bg-white border border-gray-200 hover:border-primary">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">Go to page</p>
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

export default YearPaperPage;
