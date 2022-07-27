import React from "react";

function Footer() {
  return (
    <footer className="mt-auto pt-4 pb-3">
      <div className="flex-row contact-links">
        <ul>
          <li>
            <a href="mailto:narcissearts@gmail.com">narcissearts@gmail.com</a>
          </li>
          <li>
            <a
              href="https://github.com/narcpat"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/narcissearts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
