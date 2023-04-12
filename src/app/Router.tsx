import { createBrowserRouter, Navigate } from 'react-router-dom';
import { PageNavigator } from './PageNavigator/PageNavigator';
import { AboutPage } from './Pages/AboutPage/AboutPage';
import { HomePage } from './Pages/HomePage/HomePage';
import { ProjectView } from './Pages/ProjectPage/ProjectDetails/ProjectDetails';
import { ProjectList } from './Pages/ProjectPage/ProjectList/ProjectList';
import { ProjectPage } from './Pages/ProjectPage/ProjectPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageNavigator landingPage={<HomePage />} />,
    children: [
      {
        path: 'projects',
        element: <ProjectPage />,
        children: [
          {
            element: <ProjectList />,
            index: true
          },
          {
            path: ':projectName',
            element: <ProjectView />
          }
        ]
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: '*',
        element: <Navigate to="/" />
      }
    ]
  }
]);

export default router;
