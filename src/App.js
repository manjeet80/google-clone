import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
function App() {
  const [search, setSearch] = React.useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home search={search} setSearch={setSearch} />}
        />
        <Route
          path="/search"
          element={<Search search={search} setSearch={setSearch} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
