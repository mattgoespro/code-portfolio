import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './components/home/Home';
import reportWebVitals from './reportWebVitals';
import ProjectList from './components/projects/ProjectList';
import PageNotFound from './components/PageNotFound';
import About from './components/about/About';
import Content from './components/shared/page/Page';
import { ThemeProvider } from '@emotion/react/types/theming';
import appTheme from './theme/Theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={appTheme} />
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="home"
            element={
              <Content
                title="Hello World!"
                subtitle="Allow me to introduce myself."
                component={<Home />}
              />
            }
          />
          <Route
            path="projects"
            element={<Content title="Projects" component={<ProjectList />} />}
          />
          <Route path="about" element={<Content title="About" component={<About />} />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
