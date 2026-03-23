import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-accent py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">About</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              norcetpreviousyearpapers.com is a dedicated PYQ library for AIIMS NORCET previous year question papers and basic answer keys.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">PYQ Links</h3>
            <ul className="space-y-2">
              <li><Link to="/norcet-previous-year-question-papers" className="text-sm text-gray-600 hover:text-primary">NORCET Previous Year Question Papers</Link></li>
              <li><Link to="/norcet-pyq-pdf-download" className="text-sm text-gray-600 hover:text-primary">PYQ PDF Download</Link></li>
              <li><Link to="/norcet-pyq-with-answers" className="text-sm text-gray-600 hover:text-primary">PYQ with Answers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">Practice</h3>
            <p className="text-sm text-gray-600">Attempt topic-wise PYQs and detailed solutions on NPrep.</p>
            <a href="https://nprep.in" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-sm font-bold text-primary hover:underline">
              Start Practice on NPrep
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-8 text-center">
          <p className="mb-2 text-xs text-gray-500">
            <strong>Disclaimer:</strong> This is not an official AIIMS website.
          </p>
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} norcetpreviousyearpapers.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
