import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { PageNavigator } from "./PageNavigator/PageNavigator";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { HomePage } from "./Pages/HomePage/HomePage";
import { ProjectDetails } from "./Pages/ProjectPage/ProjectDetailsPage/ProjectDetails";
import { ProjectList } from "./Pages/ProjectPage/ProjectList/ProjectList";
import { ProjectPage } from "./Pages/ProjectPage/ProjectPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PageNavigator />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />
//       },
//       {
//         path: "projects",
//         element: <ProjectPage />,
//         children: [
//           {
//             element: <ProjectList />,
//             index: true
//           },
//           {
//             path: ":projectName",
//             element: <ProjectDetails />
//           }
//         ]
//       },
//       {
//         path: "about",
//         element: <AboutPage />
//       },
//       {
//         path: "*",
//         element: <Navigate to="/" />
//       }
//     ]
//   }
// ]);

export default router;
