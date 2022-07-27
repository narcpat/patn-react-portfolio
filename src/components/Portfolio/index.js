import Concertium from "../../assets/images/Concertium_Screenshot.jpg";
import QuoteSmith from "../../assets/images/Quote-Smith-screenshot.png";
import RobotGladiator from "../../assets/images/robot-game-image.jpg";

export default function Portfolio() {
  return (
    <section id="work">
      <div className="flex-row section-title">
        <h2>
          My
          <br />
          Work
        </h2>
      </div>

      <div className="image-gallery">
        <div className="main-work flex-row">
          <div className="work-text">
            <a
              href="https://morningsol.github.io/concertium/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Concertium</h3>
              <p>Responsive website with API integrations</p>
            </a>
          </div>
          <a
            href="https://morningsol.github.io/concertium/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Concertium} alt="Screenshot of Concertium's home page" />
          </a>
        </div>

        <div className="secondary-work flex-row">
          <div className="my-work">
            <div className="work-text">
              <a
                href="https://group2-quotesmith.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>QuoteSmith</h3>
                <p>A full stack quote generating application</p>
              </a>
            </div>
            <a
              href="https://group2-quotesmith.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={QuoteSmith} alt="Screenshot of Horiseon's home page" />
            </a>
          </div>

          <div className="my-work">
            <div className="work-text">
              <a
                href="https://github.com/narcpat/robot-gladiators"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Robot Gladiators</h3>
                <p>MVP JavaScript game design</p>
              </a>
            </div>
            <a
              href="https://github.com/narcpat/robot-gladiators"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={RobotGladiator} alt="A toy robot" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
