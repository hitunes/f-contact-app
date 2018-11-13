import "./App.css";
import React, { Component } from "react";
import Nav from "./Nav/Nav";
import ContactView from "./Main/ContactView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="App__body">
          {/* ><div>Side Man</div> */}
          <ContactView />
        </div>
      </div>
    );
  }
}

export default App;
