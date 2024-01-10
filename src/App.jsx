import "./scss/main.scss";
import "animate.css";
import glass from "../src/assets/images/icon-supervisor.svg";
import team from "../src/assets/images/icon-team-builder.svg";
import calc from "../src/assets/images/icon-calculator.svg";
import karma from "../src/assets/images/icon-karma.svg";

function Box({ title, p, img }) {
  return (
    <li className="box">
      <div>
        <h2>{title}</h2>
        <p>{p}</p>
      </div>
      <img src={img} alt="" />
    </li>
  );
}

function App() {
  return (
    <main>
      <div className="container">
        <header>
          <h1>
            Reliable, efficient delivery
            <span>Powered by Technology</span>
          </h1>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </header>
        <ul className="grid">
          <Box
            title="Supervisor"
            p="Monitors activity to identify project roadblocks"
            img={glass}
          />
          <Box
            title="Team Builder"
            p="Scans our talent network to create the optimal team for your project"
            img={team}
          />
          <Box
            title="Calculator"
            p="Uses data from past projects to provide better delivery estimates"
            img={calc}
          />
          <Box
            title="Karma"
            p="Regularly evaluates our talent to ensure quality"
            img={karma}
          />
        </ul>
      </div>
    </main>
  );
}

export default App;
