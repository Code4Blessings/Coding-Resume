import React from 'react';

const Projects = () => {
    return (
      <div className="projects-container">
        <div className="section-title">
          <h3>Projects</h3>
        </div>
        <div className="section-list">
          <a href="https://code4blessings.github.io/RobinWarden_Portfolio/">
            Personal Website
          </a>
          <a href="https://github.com/Lambda-School-Labs/mission-control-fe">
            Mission Control
          </a>
          <p className="date">Feb. 2020​ to Current</p>
          <ul>
            <li>
              Collaborated with a group of 18 Full Stack Developers to add
              features to an app that provides a 'single pane of glass' for
              companies to quickly discover key information related to any
              product, project or person.
            </li>
            <li>
              Utilized: React, GraphQL, Prisma, Apollo, URQL, AWS, Jest, and
              React Testing Library, and OKTA(for authentication)
            </li>
            <li>
              Contributed by writing Unit, Integration, and Mock testing for
              each feature my team developed.
            </li>
          </ul>
          <a href="https://frontend-tan.now.sh/">Spotify SongSuggester</a>
          <p className="date"> Feb. 2020​ to Feb. 2020​</p>
          <ul>
            <li>
              As the Backend Engineer, I collaborated with a cross-function team
              including 1 UI Developer, 2 Frontend Developers and 4 Data Science
              Engineers.
            </li>
            <li>Utilized: React, React Router, Less, Redux, and Express</li>
            <li>
              Contributed by building the backend server, Restful APIs, server
              testing using Super Test, and wrote documentation.
            </li>
          </ul>
          <a href="https://farmfreshapp.now.sh/">Farm Fresh App</a>
          <p className="date">Oct. 2019​ to Oct. 2019​</p>
          <ul>
            <li>
              As a Front-End Developer, I collaborated with a cross-functional
              team (1 UI Developer, 2 Frontend Developers, and 1 Backend
              Engineer) to build an app that mimics the Instacart App only in
              this case, the shoppers would be ordering fruits and veggies from
              Farmers.
            </li>
            <li>
              Built the User Interface, Register, and Login forms using React,
              React Router, Hooks, and Formik (for validation).
            </li>
          </ul>
          <a href="https://lambda-webpt-rta.github.io/bw_rta_web_ui_robin">
            Receipt Tracker App
          </a>
          <p className="date">Sept. 2019​ to Sept. 2019​</p>
          <ul>
            <li>
              As the team's UI Developer, I designed and developed a marketing
              site for the Receipt Tracker App.
            </li>
            <li>HTML and Less were utilized to build the site.</li>
          </ul>
        </div>
      </div>
    );
};

export default Projects;