import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UploadNotes from "./components/UploadNotes";
import MainSection from "./components/MainSection";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainSection />} />
          <Route exact path="/upload" element={<UploadNotes />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/details" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
