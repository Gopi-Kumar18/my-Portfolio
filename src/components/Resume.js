import React from "react";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-heading">Resume</h1>

      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <a href={`${process.env.PUBLIC_URL}/my_Resume_sz_21.pdf`} download className="download-btn">
          Download CV
        </a>
      </div>
      <div className="resume-section">
        <div className="resume-card">
          <h3>2023 - 2026</h3>
          <p><strong>B.Tech in Computer Science & Engineering</strong></p>
          <p>Lovely Professional University, Phagwara</p>
          <p>CGPA: 7.34/10</p>

          <br/>

          <h3>2019 - 2022</h3>
          <p><strong>Diploma In Electrical and Electronics Engineering</strong></p>
          <p>Amrita Sai Institute of Science and Technology</p>
          <p>PERCENTAGE: 74.89/100</p>

          <br/>

          <h3>2018 - 2019</h3>
          <p><strong>Matriculation</strong></p>
          <p>Adarsh Public School</p>
          <p>GPA: 9.3/10</p>

        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Skills</h2>
        <div className="resume-card">
          <ul>
            <li><strong>Languages:</strong> Java, Python, JavaScript, C++ </li>
            <li><strong>Frameworks:</strong> Express, SpringBoot, Django </li>
            <li><strong>Databases:</strong> MySQL, MongoDB </li>
            <li><strong>Tools & Platforms:</strong> Git, GitHub, Postman, Docker, Jenkins, Puppet</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Projects</h2>
        <div className="resume-card">
          <ul>
            <li><strong>DocSwitch - File Converter Website:</strong> MongoDB, Express.Js, React.Js, Node.Js(MERN) </li>
            <li><strong>Banking Management System - Core Banking Operations:</strong> Java, SpringBoot, Mysql </li>
            <li><strong>Artistry - Paintings Portals website:</strong> PHP, MySQL</li>
            <li><strong>FindURNest – Online Rental Booking:</strong> MERN Stack</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Certifications</h2>
        <div className="resume-card">
          <ul>
            <li> Problem Solving (HackerRank) </li>
            <li> Cloud Computing (NPTEL) </li>
            <li> Core And Advanced Java (BoardInfinity) </li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Problem Solving</h2>
        <div className="resume-card">
          <p>Active on <strong>LeetCode</strong>, <strong>GeeksforGeeks Practice</strong>, and <strong>HackerRank</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Resume;