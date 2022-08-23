import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Header from "./components/Header";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={[<Home />]} />
        <Route path="/upload" element={[<Upload />]} />
      </Routes>
    </HashRouter>
  );
};

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
