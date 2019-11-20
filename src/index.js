import { Component } from "preact";
import Router from "preact-router";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Project from "./pages/project/project";

import "./style";

// Entry Point into the application

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div class="container">
        <Header></Header>
        <div class="container__center">
          <main class="page">
            <Router>
              <Home path="/" />
              <About path="/about" />
              <Project path="/showcase/:project" />
            </Router>
          </main>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
