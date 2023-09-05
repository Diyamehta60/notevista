import React, { useEffect } from "react";
import Home from "./Home";
import SearchNotes from "./SearchNotes";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function MainSection() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Home />
      <SearchNotes />
      <Footer />
    </div>
  );
}
