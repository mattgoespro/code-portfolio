import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { ProjectList } from './components/projects/project-list/ProjectList';
import { ProjectView } from './components/projects/project-view/ProjectView';
import { Projects } from './components/projects/Projects';
import { NavBar } from './components/navbar/NavBar';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar landingPage={<Home />} />}>
          <Route path="projects" element={<Projects />}>
            <Route path="list" element={<ProjectList />}></Route>
            <Route path=":projectName" element={<ProjectView />}></Route>
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
