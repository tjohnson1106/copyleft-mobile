import React, { Component } from "react";
import { Provider } from "react-redux";

import Navigator from "./Navigator";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;
