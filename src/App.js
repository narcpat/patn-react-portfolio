import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

const pages = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      {/* <PageContent currentPage={currentPage} /> */}
      <Footer />
    </div>
  );
}

export default App;
