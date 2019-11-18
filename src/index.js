import { Component } from "preact";
import Router from "preact-router";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";

import "./style";
import showcaseJson from "../dist/showcase.json";

// Entry Point into the application

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div class="container">
        <Header></Header>
        <main class="page">
          <Router>
            <Home path="/" />
            <About path="/about" />
            <Project path="/showcase/:project" />
          </Router>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
