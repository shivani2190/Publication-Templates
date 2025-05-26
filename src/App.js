import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Publications from "./components/Publications";
import Authorship from "./components/Authorship";
import WritingService from "./components/WritingService";
import FocusJournals from "./components/FocusJournals";
import Terminologies from "./components/Terminologies";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Publications />} />
            <Route path="/authorship" element={<Authorship />} />
            <Route path="/writing-service" element={<WritingService />} />
            <Route path="/focus-journals" element={<FocusJournals />} />
            <Route path="/terminologies" element={<Terminologies />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
