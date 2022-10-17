import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from './components/AboutPage/AboutPage';
import { HomePage } from './components/HomePage/HomePage';
import { Navigator } from './components/Navigator/Navigator';
import { ProjectPage } from './components/ProjectPage/ProjectPage';
import { ProjectView } from './components/ProjectPage/ProjectView/ProjectView';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigator landingPage={<HomePage />} />}>
          <Route path="projects" element={<ProjectPage />}>
            <Route path=":projectName" element={<ProjectView />}></Route>
          </Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
