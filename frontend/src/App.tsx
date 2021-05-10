import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className='App '>
        <Navbar />
        <Route></Route>
      </div>
    </Router>
  );
}

export default App;
