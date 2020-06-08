import React from 'react';

const Experience = () => {
    return (
      <div className="experience-container">
        <div className="section-title">
          <h3>Employment</h3>
        </div>
        <div className="section-list">
          <div className="jobs">
            <h4>Lambda School</h4>
            <p className="location">Remote</p>
            <p className="date">Jan. 2020​ to Current</p>
            <p className="role">Team Lead</p>
            <ul>
              <li>
                Provided daily feedback and issue resolution of all curriculum
                through slack help channel or code review.
              </li>
              <li>
                Delivered one-on-one feedback and code review on a weekly basis.
              </li>
              <li>
                Led a team of 9 students that emulates a real work environment
                using Agile methodology.
              </li>
              <li>
                Mentored 9 students on how to learn effectively and solve
                programming problems.
              </li>
              <li>
                Reviewed student code and provided detailed feedback on areas of
                improvement.
              </li>
              <li>
                Facilitated daily standup meetings to build camaraderie,
                facilitate sharing of ideas and work progress, and provide
                guidance for that week’s study material.
              </li>
              <li>
                Delivered supplemental lectures on various topics related to
                software engineering.
              </li>
            </ul>
          </div>
          <div className="jobs">
            <h4>Code4Blessings</h4>
            <p className="location">Lawrenceville, GA</p>
            <p className="date">Oct. 2018​ to Jan. 2020</p>
            <p className="role">Freelance Designer and Blogger</p>​
            <ul>
              <li>
                Enhanced the capability and design of web pages by coding
                features such as headers, footers, contact forms, blog pages,
                CSS Grids, tables, and animations,using Elementor and Divi Page
                Builders, HTML, CSS, and Adobe Photoshop.
              </li>
              <li>
                Developed custom WordPress Themes, using Bootstrap, that ensured
                best web design practices such as mobile-friendliness, easy
                navigation, and fast loading time.
              </li>
              <li>Increased viewership by implementing SEO Optimization</li>
            </ul>
          </div>
          <div className="jobs">
            <h4>Uber, Lyft, Amazon, and Shipt</h4>
            <p className="location">Lawrenceville, GA</p>
            <p className="date">June 2016​ to Oct. 2018</p>
            <p className="role">Consultant</p>​
            <ul>
              <li>Provided transportation and delivery services.</li>
              <li>
                Designed website and provided blog content for online marketing
                using WordPress.
              </li>
              <li>Also used website to recruit more drivers.</li>
              <li>
                Increased monthly profit by $1500 due to bonuses received from
                each recruit.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Experience;