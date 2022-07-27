import React from "react";

export default function Nav({ pages, setCurrentPage }) {
  return (
    <nav>
      <ul>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
      </ul>
    </nav>
  );
}
