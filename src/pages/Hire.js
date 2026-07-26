import React, { useEffect } from "react";
import { setFaviconColor } from "../favicon";

export default function Hire() {
  useEffect(() => {
        setFaviconColor("#49CC5C"); // Set the favicon color to match your theme
      }, []);
  return (
    <main className="hire">
      <section className="hire">
        <div className="hire">
          <h1><span className="highlight">Let’s Build Something Awesome Together</span></h1>
          <p>
            As a <span className="bold">As a front-end engineer with UX + QA experience</span>, I bring a fresh 
            perspective, a strong passion for learning, and the ability to 
            quickly adapt to new challenges. With a background in engineering, 
            design, and teaching, I thrive in team environments where 
            collaboration and creativity are key to success. Whether I’m 
            building dynamic user interfaces, designing 
            <span className="bold">full-stack applications</span>, or ensuring 
            high-quality code through automated testing, I’m always eager to 
            expand my skill set and contribute to meaningful projects.
          </p>
          <p>
            I can help your team with:
          </p>
          <p><span className="bold">Front-End Development</span></p>
            <ul className="frontEndDevelopment">

            <li>Build clean, reusable UI components in React</li>
            <li>Create responsive layouts with Flexbox/Grid</li>
            <li>Improve usability with accessibility-minded design and thoughtful UI polish</li>
            </ul>

            <p><span className="bold">Testing + Quality</span></p>
            <ul className="testingAndQuality">

            <li>Write and execute manual test plans across user flows</li>
            <li>Support automation with tools like Selenium (and I’m actively expanding my testing toolkit)</li>
            <li>Catch UI edge cases early to ship cleaner releases</li>
            </ul>
            
          <p><span className="bold">UX + Collaboration</span></p>
            <ul className="userCenteredDesign">

            <li>Translate designs into functional UI with consistency and clarity</li>

            <li>Contribute wireframes/prototypes in Figma</li>
            <li>Communicate clearly, take feedback well, and collaborate across roles</li>
          </ul>

          
          <p>
            If you’re looking for someone who is <span className="bold">curious
            </span>, <span className="bold">adaptable</span>, and excited to 
            <span className="bold">collaborate</span>contribute, I’d love to 
            connect.
          </p>
          <p>
            Feel free to reach out via email at 
            <span className="bold"> nyeager95@gmail.com</span> or connect with 
            me on <span className="bold">LinkedIn</span>. Let’s make something 
            amazing happen!
            </p>

            </div>
        </section>
    </main>
    )
}
