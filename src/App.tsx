import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PYQDirectory from './pages/PYQDirectory';
import Norcet2024QuestionPaper from './pages/Norcet2024QuestionPaper';
import Norcet2023QuestionPaper from './pages/Norcet2023QuestionPaper';
import Norcet2022QuestionPaper from './pages/Norcet2022QuestionPaper';
import Norcet2021QuestionPaper from './pages/Norcet2021QuestionPaper';
import NorcetPyqPdfDownload from './pages/NorcetPyqPdfDownload';
import NorcetPyqWithAnswers from './pages/NorcetPyqWithAnswers';
import { RouterWrapper } from './next/RouterWrapper';

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="norcet-previous-year-question-papers" element={<PYQDirectory />} />
          <Route path="norcet-2024-question-paper" element={<Norcet2024QuestionPaper />} />
          <Route path="norcet-2023-question-paper" element={<Norcet2023QuestionPaper />} />
          <Route path="norcet-2022-question-paper" element={<Norcet2022QuestionPaper />} />
          <Route path="norcet-2021-question-paper" element={<Norcet2021QuestionPaper />} />
          <Route path="norcet-pyq-pdf-download" element={<NorcetPyqPdfDownload />} />
          <Route path="norcet-pyq-with-answers" element={<NorcetPyqWithAnswers />} />
          <Route path="*" element={<div className="p-8 text-center">404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </RouterWrapper>
  );
}

export default App;
