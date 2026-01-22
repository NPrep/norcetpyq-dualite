import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent border-t border-gray-200 mt-12 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">About</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              norcetpreviousyearpapers.com is a dedicated archive for nursing competitive exam previous year questions. We provide authentic PYQs for AIIMS NORCET, RRB, DSSSB, and State Nursing exams to help aspirants prepare effectively.
            </p>
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 6377 6391 69</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/pyq" className="text-sm text-gray-600 hover:text-primary">All PYQs</Link></li>
              <li><Link to="/subjects" className="text-sm text-gray-600 hover:text-primary">Subject Wise Tests</Link></li>
              <li><Link to="/mock-tests" className="text-sm text-gray-600 hover:text-primary">Mock Tests</Link></li>
              <li><Link to="/nursing-courses" className="text-sm text-gray-600 hover:text-primary">Structured Courses</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p className="text-xs text-gray-500 mb-2">
            <strong>Disclaimer:</strong> This website is an educational help portal for nursing aspirants and is NOT an official website of AIIMS, RRB, or any other government body.
          </p>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} norcetpreviousyearpapers.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
