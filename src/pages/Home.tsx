import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
      
      {/* H1 */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-b-2 border-primary pb-4">
        Nursing Previous Year Questions – NORCET, Staff Nurse & Nursing Officer Exams
      </h1>

      {/* CTA BOX */}
      <div className="bg-gray-900 text-white p-8 rounded-sm shadow-lg mb-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-6">
          <h2 className="text-2xl font-bold text-white mb-2 mt-0">Nursing Exam PYQs Hub</h2>
          <p className="text-gray-300 text-lg mb-0">
            Access the largest collection of authentic previous year question papers for AIIMS NORCET, RRB, and State Exams.
          </p>
        </div>
        <Link 
          to="/pyq" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-sm text-gray-900 bg-primary hover:bg-white transition-colors duration-200 whitespace-nowrap"
        >
          Access All PYQs <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      {/* SECTION 1: What is Nursing? */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">What is Nursing?</h2>
        <p className="text-gray-800 leading-relaxed text-lg">
          Nursing is a comprehensive healthcare profession focused on the care of individuals, families, and communities to attain, maintain, or recover optimal health and quality of life. As a distinct discipline within the healthcare sector, nursing integrates the art of caring with the science of health preservation. Nurses serve as the backbone of healthcare delivery systems worldwide, operating in diverse environments ranging from high-tech intensive care units in hospitals to rural community health centers and home care settings.
        </p>
        <p className="text-gray-800 leading-relaxed text-lg mt-4">
          The responsibilities of a nurse extend far beyond basic patient monitoring. They are pivotal in administering medication, managing patient records, operating complex medical equipment, and acting as a bridge of communication between doctors, patients, and families. Furthermore, nursing emphasizes patient education, advocacy, and emotional support, requiring a unique blend of clinical expertise, ethical judgment, and deep compassion. In the modern medical landscape, nurses are critical decision-makers who ensure the continuity and safety of patient care.
        </p>
      </section>

      {/* SECTION: IMPORTANCE OF PYQs (New Added Section) */}
      <section className="mb-10 bg-orange-50 p-6 border-l-4 border-primary rounded-sm">
        <h2 className="text-2xl font-semibold text-primary mb-4 mt-0">Why Previous Year Questions (PYQs) are Critical?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. Pattern Recognition</h3>
            <p className="text-gray-800">
              Nursing exams like AIIMS NORCET and RRB often repeat specific concepts. Analyzing PYQs helps you identify the "examiner's favorite topics" and the weightage given to subjects like Medical-Surgical Nursing vs. General Aptitude.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Time Management</h3>
            <p className="text-gray-800">
              Solving past papers in a timed environment is the only way to improve speed. It trains your brain to switch between clinical scenarios and theoretical questions rapidly, ensuring you finish the exam on time.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">3. Self-Assessment</h3>
            <p className="text-gray-800">
              PYQs act as a mirror to your preparation. They highlight your weak areas—whether it's Pharmacology calculations or Community Health dates—allowing you to focus your revision where it matters most.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">4. Boost Confidence</h3>
            <p className="text-gray-800">
              Familiarity breeds confidence. When you've solved the last 5 years of papers, you walk into the exam hall knowing exactly what to expect, reducing anxiety and performance pressure.
            </p>
          </div>
        </div>
        <div className="mt-6">
           <Link to="/pyq" className="text-primary font-bold hover:underline flex items-center">
             Start Solving PYQs Now <BookOpen className="ml-2 h-4 w-4" />
           </Link>
        </div>
      </section>

      {/* SECTION 2: Nursing Exams 2026 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">Nursing Exams 2026</h2>
        <p className="text-gray-800 leading-relaxed text-lg">
          The year 2026 is poised to be a significant period for nursing recruitment in India, with numerous central and state government bodies announcing vacancies. Nursing Exams 2026 encompass a wide array of competitive tests designed for admission into professional courses like BSc Nursing, GNM, and ANM, as well as high-stakes recruitment examinations for Nursing Officer positions. Major recruiting bodies such as AIIMS, Railway Recruitment Boards (RRB), ESIC, and State Public Service Commissions conduct these rigorous assessments to select the most qualified candidates for the public healthcare sector.
        </p>
        <p className="text-gray-800 leading-relaxed text-lg mt-4">
          These examinations typically test candidates on core nursing subjects including Anatomy, Physiology, Medical-Surgical Nursing, Pediatrics, Mental Health Nursing, and Obstetrics & Gynecology. Success in these exams requires not just theoretical knowledge but a strategic understanding of the examination pattern. This is where Previous Year Questions (PYQs) become indispensable. Analyzing past papers helps aspirants identify recurring topics, understand the difficulty level, and adapt to the evolving trends of nursing competitive exams.
        </p>
      </section>

      {/* SECTION 3: Key Details Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">Nursing Exam 2026 – Key Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3 font-semibold border-r border-gray-300">Nursing Exam</th>
                <th className="px-4 py-3 font-semibold border-r border-gray-300">Purpose</th>
                <th className="px-4 py-3 font-semibold">Subjects Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 border-r border-gray-200 font-medium">BSc Nursing (UG)</td>
                <td className="px-4 py-3 border-r border-gray-200">Entrance for Undergraduate Degree</td>
                <td className="px-4 py-3">Physics, Chemistry, Biology, Aptitude</td>
              </tr>
              <tr className="bg-accent">
                <td className="px-4 py-3 border-r border-gray-200 font-medium">ANM</td>
                <td className="px-4 py-3 border-r border-gray-200">Auxiliary Nursing Midwifery Admission</td>
                <td className="px-4 py-3">Basic Health, Hygiene, Community Health</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 border-r border-gray-200 font-medium">GNM</td>
                <td className="px-4 py-3 border-r border-gray-200">General Nursing & Midwifery Admission</td>
                <td className="px-4 py-3">Bio-Sciences, Behavioral Sciences, Nursing Arts</td>
              </tr>
              <tr className="bg-accent">
                <td className="px-4 py-3 border-r border-gray-200 font-medium">RRB Staff Nurse</td>
                <td className="px-4 py-3 border-r border-gray-200">Recruitment for Railway Hospitals</td>
                <td className="px-4 py-3">Professional Nursing, General Science, Arithmetic</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 border-r border-gray-200 font-medium">AIIMS NORCET</td>
                <td className="px-4 py-3 border-r border-gray-200">Nursing Officer Recruitment for AIIMS</td>
                <td className="px-4 py-3">Clinical Nursing, Med-Surg, Fundamentals</td>
              </tr>
              <tr className="bg-accent">
                <td className="px-4 py-3 border-r border-gray-200 font-medium">NHM-CHO</td>
                <td className="px-4 py-3 border-r border-gray-200">Community Health Officer Selection</td>
                <td className="px-4 py-3">Community Health, Primary Care, Public Health</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: Eligibility Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">Nursing Exams 2026 Eligibility</h2>
        <p className="text-gray-800 mb-4">
          Eligibility criteria vary significantly between entrance exams and recruitment exams. While entrance tests focus on 10+2 science streams, recruitment exams require professional registration with the Nursing Council.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3 font-semibold border-r border-gray-300">Exam Name</th>
                <th className="px-4 py-3 font-semibold border-r border-gray-300">Age Criteria</th>
                <th className="px-4 py-3 font-semibold border-r border-gray-300">Educational Qualification</th>
                <th className="px-4 py-3 font-semibold">Registration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 border-r border-gray-200 font-medium">AIIMS NORCET</td>
                <td className="px-4 py-3 border-r border-gray-200">18 - 30 Years</td>
                <td className="px-4 py-3 border-r border-gray-200">B.Sc Nursing / GNM + Experience</td>
                <td className="px-4 py-3">INC / State Nursing Council</td>
              </tr>
              <tr className="bg-accent">
                <td className="px-4 py-3 border-r border-gray-200 font-medium">RRB Staff Nurse</td>
                <td className="px-4 py-3 border-r border-gray-200">20 - 40 Years</td>
                <td className="px-4 py-3 border-r border-gray-200">GNM / B.Sc Nursing</td>
                <td className="px-4 py-3">Indian Nursing Council</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 border-r border-gray-200 font-medium">DSSSB Staff Nurse</td>
                <td className="px-4 py-3 border-r border-gray-200">Below 32 Years</td>
                <td className="px-4 py-3 border-r border-gray-200">Matric + 'A' Grade Nursing Diploma</td>
                <td className="px-4 py-3">Nursing Council Registration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 5: Exam Pattern Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">Nursing Exams 2026 Exam Pattern</h2>
        <p className="text-gray-800 mb-4">
          Most nursing competitive exams follow an objective format (Multiple Choice Questions). Understanding the negative marking scheme and time allocation is crucial. Practicing PYQs helps candidates get accustomed to the pressure of the real exam environment.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3 font-semibold border-r border-gray-300">Exam</th>
                <th className="px-4 py-3 font-semibold border-r border-gray-300">Mode</th>
                <th className="px-4 py-3 font-semibold border-r border-gray-300">Duration</th>
                <th className="px-4 py-3 font-semibold border-r border-gray-300">Syllabus Breakdown</th>
                <th className="px-4 py-3 font-semibold">Marking Scheme</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 border-r border-gray-200 font-medium">NORCET</td>
                <td className="px-4 py-3 border-r border-gray-200">CBT (Online)</td>
                <td className="px-4 py-3 border-r border-gray-200">180 Mins</td>
                <td className="px-4 py-3 border-r border-gray-200">200 MCQs (180 Nursing + 20 General)</td>
                <td className="px-4 py-3">1/3rd Negative Marking</td>
              </tr>
              <tr className="bg-accent">
                <td className="px-4 py-3 border-r border-gray-200 font-medium">RRB</td>
                <td className="px-4 py-3 border-r border-gray-200">CBT (Online)</td>
                <td className="px-4 py-3 border-r border-gray-200">90 Mins</td>
                <td className="px-4 py-3 border-r border-gray-200">100 MCQs (70 Nursing + 30 Gen/Sci)</td>
                <td className="px-4 py-3">1/3rd Negative Marking</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 border-r border-gray-200 font-medium">ESIC</td>
                <td className="px-4 py-3 border-r border-gray-200">Written/CBT</td>
                <td className="px-4 py-3 border-r border-gray-200">120 Mins</td>
                <td className="px-4 py-3 border-r border-gray-200">125 MCQs (100 Nursing + 25 Aptitude)</td>
                <td className="px-4 py-3">0.25 Negative Marking</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 6: Syllabus */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">Nursing Exams 2026 Syllabus</h2>
        <p className="text-gray-800 leading-relaxed text-lg">
          The syllabus for Nursing Exams 2026 is vast, covering the entire spectrum of the nursing curriculum. Core subjects that appear across almost all exams include <strong>Medical-Surgical Nursing</strong>, which often carries the highest weightage, followed by <strong>Fundamentals of Nursing</strong>, <strong>Pediatric Nursing</strong>, and <strong>Community Health Nursing</strong>. Specialized topics like Pharmacology, Nutrition, and Microbiology are also integral parts of the test.
        </p>
        <p className="text-gray-800 leading-relaxed text-lg mt-2">
          Mapping the syllabus with Previous Year Questions (PYQs) is a proven strategy for success. While the syllabus provides a list of topics, PYQs reveal which specific areas are frequently tested. For instance, in AIIMS NORCET, image-based questions and clinical scenarios are common, whereas RRB exams may focus more on factual data and general science.
        </p>
      </section>

      {/* SECTION 7: Admit Card */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">Nursing Exams 2026 Admit Card</h2>
        <p className="text-gray-800 leading-relaxed text-lg">
          The Admit Card or Hall Ticket is the most crucial document for appearing in any nursing examination. It is typically released 10 to 15 days prior to the exam date on the official website of the conducting body. Candidates must download the admit card using their registration ID and password.
        </p>
        <p className="text-gray-800 leading-relaxed text-lg mt-2">
          Upon downloading, it is vital to verify all details such as the candidate's name, roll number, exam center address, and reporting time. Any discrepancy should be immediately reported to the examination authority. The admit card also contains important instructions regarding the exam day, including dress code and permissible items.
        </p>
      </section>

      {/* UPCOMING EXAMS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6 border-b border-gray-200 pb-2">Upcoming Nursing Exams 2026</h2>
        
        <div className="grid gap-8">
          <div className="bg-accent p-6 rounded-sm border-l-4 border-primary">
            <h3 className="text-xl font-bold text-gray-900 mb-2">RRB Staff Nurse Exam 2026</h3>
            <p className="text-gray-700">
              The Railway Recruitment Board is expected to announce a large vacancy for Staff Nurses in various railway zones. This exam is highly sought after due to the central government benefits and stability. The exam focuses heavily on professional nursing knowledge alongside general science and arithmetic. Reviewing <Link to="/pyq/rrb-staff-nurse">RRB Staff Nurse PYQs</Link> is essential to master the non-nursing section which often determines the merit list.
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">AIIMS NORCET Exam 2026</h3>
            <p className="text-gray-700">
              The Nursing Officer Recruitment Common Eligibility Test (NORCET) is the gateway to becoming a Nursing Officer in AIIMS institutes across India. Known for its high difficulty level, NORCET tests clinical application and practical knowledge. Aspirants must practice <Link to="/pyq/aiims-norcet">AIIMS NORCET Previous Year Papers</Link> to get accustomed to the scenario-based questions and image-based queries that are a hallmark of this exam.
            </p>
          </div>

          <div className="bg-accent p-6 rounded-sm border-l-4 border-primary">
            <h3 className="text-xl font-bold text-gray-900 mb-2">DSSSB Staff Nurse Exam 2026</h3>
            <p className="text-gray-700">
              The Delhi Subordinate Services Selection Board (DSSSB) conducts recruitment for nursing posts under the Delhi Government. This exam is known for its competitive nature and specific focus on both nursing and general awareness sections. Solving <Link to="/pyq/dsssb-staff-nurse">DSSSB Staff Nurse PYQs</Link> helps candidates gauge the depth of general awareness questions asked in previous years.
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">ESIC Staff Nurse Exam 2026</h3>
            <p className="text-gray-700">
              Employees' State Insurance Corporation (ESIC) offers excellent career opportunities for nurses. The ESIC Staff Nurse exam pattern is distinct, often including a section on aptitude. Candidates preparing for this should focus on <Link to="/pyq/esic-staff-nurse">ESIC Previous Year Papers</Link> to balance their preparation between core nursing subjects and aptitude skills.
            </p>
          </div>
        </div>
      </section>

    </article>
  );
};

export default Home;
