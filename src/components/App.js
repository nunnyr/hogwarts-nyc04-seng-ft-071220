import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import arrayOfHogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogIndex from "./HogIndex";

class App extends Component {

  //build a hogContainer 
  //build a hogCard 
  //hogForm

state = {
  hogs: arrayOfHogs,

}




  render() {
    // console.log("this is hogs", arrayOfHogs)
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <HogIndex hogs={this.state.hogs}  />
      </div>
    );
  }
}

export default App;
