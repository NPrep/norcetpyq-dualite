import React from 'react';

export const SampleQuestions: React.FC = () => (
  <section className="mt-8">
    <h2 className="text-2xl font-semibold text-gray-900">Sample Questions</h2>
    <p className="mt-3 text-gray-700">Q1: Example nursing question?</p>
    <p className="text-gray-700">A. Option 1</p>
    <p className="text-gray-700">B. Option 2</p>
    <p className="text-gray-700">C. Option 3</p>
    <p className="text-gray-700">D. Option 4</p>
  </section>
);

export const NprepCTA: React.FC = () => (
  <section className="mt-8 rounded-xl border border-orange-200 bg-orange-50 p-6">
    <h2 className="text-2xl font-semibold text-gray-900">Practice These Questions on NPrep</h2>
    <p className="mt-3 text-gray-700">
      Attempt previous year questions in test format with detailed explanations on NPrep.
    </p>

    <ul className="mt-4 list-disc pl-6 text-gray-700">
      <li>Topic-wise PYQs</li>
      <li>Detailed solutions</li>
      <li>Mock tests</li>
      <li>Performance analysis</li>
    </ul>

    <a
      href="https://nprep.in"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex rounded-md bg-primary px-5 py-2.5 font-semibold text-gray-900 hover:bg-primary/90"
    >
      Start Practice
    </a>
  </section>
);
