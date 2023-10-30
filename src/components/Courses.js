import React, { useEffect } from "react";
import { Link } from "react-router-dom";

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
            <Link className="courseLink" to="https://drive.google.com/file/d/148MEDI0FsIz9bROwSG7-Cggw1xMM8Vwo/view" target="_blank">Data Structure And Algorithm</Link>
            <p>
              "Explore data, analyze patterns, and master algorithms in your
              data science journey."
            </p>
          </div>
          <div className="card">
            <Link className="courseLink" to="https://drive.google.com/file/d/1FP1rm6-RClnXlJ1wsEfBm-YUMMaIVphA/view" target="_blank">Python</Link>
            <p>
              Python is a versatile and beginner-friendly programming language.
            </p>
          </div>
          <div className="card">
            <Link className="courseLink" to="https://drive.google.com/file/d/1jrO46osz7NPiGpQDllQRjBGwrbq-CIKn/view" target="_blank">Java</Link>
            <p>Java: Object-oriented, versatile, and widely used language.</p>
          </div>
          <div className="card">
            <Link className="courseLink" to="" target="_blank">Developer</Link>
            <p>
              Continuous learning is essential for aspiring developers to stay
              current.
            </p>
          </div>
          <div className="card">
            <Link className="courseLink" to="https://drive.google.com/file/d/1IOOYaB0QfNTVfSEB-Y9OK7ez2pAbc2TS/view" target="_blank">Andriod</Link>
            <p>
              Android development offers a dynamic and rewarding programming
              experience.
            </p>
          </div>
          <div className="card">
            <Link className="courseLink" to="https://drive.google.com/file/d/1ACXy6LglNZg9bTv34VQzd_WEeKkCELMj/view" target="_blank">SalesForce</Link>
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