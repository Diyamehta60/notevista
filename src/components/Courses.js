import React, { useEffect } from "react";

function Courses() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div>
      <div className="containt-2">
        <div className="course-categories">
          <h2>Our Course Categories</h2>
        </div>
        <div className="cards-container">
          <div className="card">
            <h3>Data Science And Alogorithum</h3>
            <p>
              "Explore data, analyze patterns, and master algorithms in your
              data science journey."
            </p>
          </div>
          <div className="card">
            <h3>Python</h3>
            <p>
              Python is a versatile and beginner-friendly programming language.
            </p>
          </div>
          <div className="card">
            <h3>Java</h3>
            <p>Java: Object-oriented, versatile, and widely used language.</p>
          </div>
          <div className="card">
            <h3>Developer</h3>
            <p>
              Continuous learning is essential for aspiring developers to stay
              current.
            </p>
          </div>
          <div className="card">
            <h3>Andriod</h3>
            <p>
              Android development offers a dynamic and rewarding programming
              experience.
            </p>
          </div>
          <div className="card">
            <h3>SalesForce</h3>
            <p>
              "Salesforce offers powerful tools for businesses to streamline
              operations and drive growth."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
