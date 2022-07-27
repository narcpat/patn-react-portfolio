import React from "react";

function About() {
  return (
    <section id="about-me" className="flex-row bio">
      <div className="flex-row section-title">
        <h2>
          About
          <br />
          Me
        </h2>
      </div>

      <div className="bio-text">
        <p>
          Hi, I’m Patrick! I am a budding full-stack developer located in
          Gatineau, Quebec, just a stone’s throw away from Canada’s National
          Capital, Ottawa. As someone who is passionate about technology and its
          multiple applications, I ventured into becoming a full stack developer
          as I believe it is the skill that will shape both today and tomorrow.
        </p>
        <p>
          I am a life long student, forever focused on gaining knowledge and new
          skills. I am a team player, focused on accomplishing together rather
          than just individually. I am driven, and so I seek to make sure that
          everything that I do has excellence written all over it.
        </p>
        <p>
          As I continue on this journey, I look forward to creating
          (individually and in partnership) various applications and websites,
          which will make a difference in peoples' lives.
        </p>
      </div>
    </section>
  );
}

export default About;
