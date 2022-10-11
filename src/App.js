import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import HomeScreen from "./HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route exact path='/' element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
