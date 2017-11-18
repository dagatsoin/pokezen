import * as React from "react";
import "./App.css";
import { inject } from "mobx-react";
import { Model } from "../api/types";

import ResultList from "./ResultList";
import SearchInput from "./SearchInput";

const logo = require("./assets/logo.svg");

@inject("store")
class App extends React.Component<{store?: Model}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SearchInput/>
        <ResultList searchResult={this.props.store!.searchResult}/> 
      </div>
    );
  }
}

export default App;
