import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PYQDirectory from './pages/PYQDirectory';
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import SubjectTests from './pages/SubjectTests';
import MockTests from './pages/MockTests';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pyq" element={<PYQDirectory />} />
          <Route path="pyq/:examId" element={<PYQDirectory />} />
          <Route path="subjects" element={<SubjectTests />} />
          <Route path="mock-tests" element={<MockTests />} />
          <Route path="exams" element={<div className="p-8 text-center">Exam Calendar Coming Soon</div>} />
          <Route path="nursing-courses" element={<Courses />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<div className="p-8 text-center">Blog Post Content Coming Soon</div>} />
          <Route path="*" element={<div className="p-8 text-center">404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
