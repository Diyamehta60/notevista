import React from "react";
import home from './img/home.png'
import image1 from './img/studylogo1.png'
import image2 from './img/studylogo2.png'
import image3 from './img/studylogo3.png'

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-left-side">
          <h1>"Celebrate Clarity and Creativity with NoteVista Your Ultimate Notes
            Companion"</h1>
          <p>Discover a new realm of note-taking with NoteVista.</p>
          <p>Join us today and unlock the door to a more organized, productive,
            and innovative way of note-taking.</p>
          <button>Get Started</button>
        </div>
        <div className="home-right-side">
          <img src={home} alt="NoteVista Image" />
        </div>
      </div>
      <div className="home-card-container">
    <div className="home-card">
      <img src={image1} alt=""/>
      <h2>Web Devlopment</h2>
      <p>"Web development learners should focus on HTML, CSS, JavaScript, responsive design, and frameworks."</p>
      <button>start now</button>
    </div>
    <div className="home-card">
      <img src={image2} alt=""/>
      <h2>Ux/Ui</h2>
      <p>"Explore user needs, wireframes, prototypes, and feedback to craft intuitive, user-centric interfaces."</p>
      <button>start now</button>
    </div>
    <div className="home-card">
      <img src={image3} alt=""/>
      <h2>App Development</h2>
      <p>"App developers learn to code, design interfaces, test apps, and solve problems daily."</p>
      <button >start now</button>
    </div>
  </div>
    </>
      );
}

      export default Home;
