import React from 'react';

const Education = () => {
    return (
      <div className="education-container">
        <div className="section-title">
          <h3>Education</h3>
        </div>
        <div className="section-list">
          <div className="jobs">
            <h4>Lambda School</h4>
            <p className="location">Remote</p>
            <p className="date">Aug. 2019​ to June 2020​</p>
            <ul>
              <li>Certificate: Full Stack Web Developer</li>
              <li>
                Programming Coursework: UI, Git, Less, Vanilla JavaScript,
                React, Redux, Context API, Single-Page Web Apps & Testing, Node,
                Computer Science, and Python
              </li>
            </ul>
          </div>
          <div className="jobs">
            <h4>Colorado Technical University Online</h4>
            <p className="date">Sept. 2009​ to Dec. 2012</p>
            <p>
              B.S. Accounting 2012​ Finished all but one month of degree
              requirements
            </p>
          </div>
          ​
        </div>
      </div>
    );
};

export default Education;