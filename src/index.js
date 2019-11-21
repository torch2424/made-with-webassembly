import { Component } from "preact";
import Router from "preact-router";

import * as loadScript from "load-script";

import Header from "./components/header/header";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Project from "./pages/project/project";
import AllProjects from "./pages/all-projects/all-projects";

import "./style";

// Entry Point into the application

export default class App extends Component {
  componentDidMount() {
    // Setup Google Analytics
    loadScript(
      "https://www.googletagmanager.com/gtag/js?id=UA-75362326-4",
      function(err, script) {
        if (!err) {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "UA-75362326-4");

          // Add analytics to window
          window.gtag = gtag;
        }
      }
    );
  }

  render() {
    return (
      <div class="container">
        <Header></Header>
        <div class="container__center">
          <main class="page">
            <Router>
              <Home path="/" />
              <About path="/about" />
              <Project path="/showcase/:id/" />
              <AllProjects path="/all-projects" />
            </Router>
          </main>
        </div>
      </div>
    );
  }
}
