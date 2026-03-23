import React from 'react';

export const SampleQuestions: React.FC = () => (
  <section className="bg-white py-12 px-6">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-3 text-2xl font-semibold text-gray-900">Sample Questions</h2>
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <p className="mb-3 text-gray-600 leading-relaxed"><strong>Q1:</strong> Example nursing question?</p>
        <ul className="space-y-2 text-gray-600">
          <li>• A. Option 1</li>
          <li>• B. Option 2</li>
          <li>• C. Option 3</li>
          <li>• D. Option 4</li>
        </ul>
      </div>
    </div>
  </section>
);

export const NprepCTA: React.FC = () => (
  <section className="bg-gray-50 py-12 px-6">
    <div className="mx-auto max-w-6xl rounded-2xl border border-orange-200 bg-orange-50 p-8 shadow-sm">
      <h2 className="mb-3 text-2xl font-semibold text-gray-900">Practice These Questions on NPrep</h2>
      <p className="text-gray-600 leading-relaxed">
        Attempt previous year questions in test format with detailed explanations on NPrep.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {['Topic-wise PYQs', 'Detailed solutions', 'Mock tests', 'Performance analysis'].map((item) => (
          <div key={item} className="rounded-xl bg-white p-4 shadow-sm border border-orange-100">
            <p className="text-gray-700 font-medium">{item}</p>
          </div>
        ))}
      </div>

      <a
        href="https://nprep.in"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 rounded-xl bg-primary px-6 py-3 font-semibold text-gray-900 shadow hover:bg-primary/90"
      >
        Start Now
      </a>
    </div>
  </section>
);
