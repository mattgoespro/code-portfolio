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
import appTheme from './components/shared/MaterialTheme';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
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
              element={
                <Content
                  title="Projects"
                  subtitle="Here's what I've been working on."
                  component={<ProjectList />}
                />
              }></Route>
            <Route
              path="about"
              element={
                <Content
                  title="About"
                  subtitle={
                    <span>
                      <b>Who is</b> Matt Young?
                    </span>
                  }
                  component={<About />}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
