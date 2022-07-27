import About from "../About";
import Portfolio from "../Portfolio";
import Project from "../Project";
// import Contact from "../Contact";

const getPageComponent = currentPage => {
  switch (currentPage) {
    case "about":
      return <About />;
    case "portfolio":
      return <Portfolio />;
    case "project":
      return <Project />;
    case "contact":
      return <Contact />;
    case "resume":
      return <Resume />;
    default:
      return <About />;
  }
};

export default function PageContent({ currentPage }) {
  return (
    <section>
      <h2>{currentPage}</h2>
      <div>{getPageComponent(currentPage)}</div>
    </section>
  );
}

function Contact() {
  return <h1>Contact</h1>;
}

function Resume() {
  return <h1>Resume</h1>;
}
