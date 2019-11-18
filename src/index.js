import "./style";
import { Component } from "preact";
import Header from "./components/header";
import Footer from "./components/footer";
import showcaseJson from "../dist/showcase.json";

// Entry Point into the application

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
}
