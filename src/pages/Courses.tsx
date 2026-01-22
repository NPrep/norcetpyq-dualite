import React from 'react';
import { CheckCircle, ExternalLink } from 'lucide-react';

const Courses: React.FC = () => {
  const courses = [
    {
      title: 'Test Series',
      link: 'https://qtestseries.nprep.in',
      tag: 'Practice Focused',
      features: [
        '30,000+ Questions - QBank (Topic Wise)',
        'Each Question with Explanation',
        'Subject Wise Tests',
        'Daily Test Series',
        'Previous Year Question Papers',
        'IBQs, Clinical Scenario Questions'
      ]
    },
    {
      title: 'Rapid Revision 2.0',
      link: 'https://rapid.nprep.in',
      tag: 'High Yield',
      features: [
        'NORCET/ CHO/ BTSC/ KGMU/ GMCH - All Covered',
        'Complete Nursing Syllabus in 100 Hours',
        'Previous Year Papers - with Explanations',
        'Daily Test Series',
        '30,000+ Questions - QBank (Topic Wise)',
        'Subject Wise Tests'
      ]
    },
    {
      title: 'GOLD Batch',
      link: 'https://gold.nprep.in',
      tag: 'Complete Preparation',
      features: [
        'NORCET 10 & 11/ CHO / BTSC/ KGMU/ GMCH - All Covered',
        '900 Hours - Basic to Advanced Theory (with Clinicals)',
        '100 Hrs - Rapid Revision 2.0',
        '30,000 Questions - QBank (Topic Wise)',
        'Daily Test Series',
        'Previous Year Papers',
        'Subject Wise Papers'
      ]
    }
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-primary pb-4">Nursing Exam Preparation Courses</h1>
      
      <div className="prose prose-slate max-w-none mb-10">
        <p className="text-lg text-gray-700">
          Accelerate your preparation for competitive nursing exams like NORCET, RRB, and DSSSB with our structured courses. Choose the plan that fits your study needs.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div key={index} className="flex flex-col border border-gray-200 rounded-sm bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 flex-grow">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white uppercase bg-primary rounded-full">
                {course.tag}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h2>
              <ul className="space-y-3 mb-6">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
              <a 
                href={course.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-gray-900 hover:bg-primary text-white font-bold py-3 px-4 rounded transition-colors duration-200 flex items-center justify-center"
              >
                Enroll Now <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
