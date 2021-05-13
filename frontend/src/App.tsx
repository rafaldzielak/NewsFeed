import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import MainScreen from "./screens/MainScreen";

import { store } from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App '>
          <Navbar />
          <Route path='/' component={MainScreen} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
