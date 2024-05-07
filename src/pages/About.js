import { red } from "@mui/material/colors";
import "../stylesheets/About.css";

export default function About() {
  return (
    <div>
      <div>
        <p>
          <code>Hi!</code>
        </p>
      </div>

      <img className="jump" /*className="jump flip" */ src="aboutme.jpg" style={{width: "20%"}}></img>

      <br></br>

      <div id="paragraphs">
        <br></br>
        <div id="normal">My name is</div>
        <div id="coral">Lina</div>
        <br></br>
        <br></br>
        <div id="normal">I graduated from</div>
        <div id="green">Cal Poly Pomona</div>
        <div id="normal">in Spring 2024 with B.S. in<div>
        <div id="blue">Computer Science</div>
        <br></br>
        <br></br>
        <div id="normal">Currently, I am working as a</div>
        <div id="gold">Software Engineer</div>
        <div id="normal">in the R&D team at</div>
        <a href="https://eonreality.com/home/" id="purple" >EON Reality</a>
        <br></br>
        <br></br>
        <div id="normal">Happy to meet you!</div>
        <br></br><br></br>
        <ul className="links">
        <li><a href="https://github.com/dal07065" target="_blank">⋆ ˚｡⋆ ʚ github ɞ ⋆ ˚｡⋆</a></li>
        <li><a href="https://www.linkedin.com/in/linapoolmkang/" target="_blank">‧｡˚₊ ꒰ linkedin ꒱ ⊹｡˚</a></li>
        <li><a href="https://www.instagram.com/thedoughnutclubtho/" target="_blank">˚₊｡꒰ doughnut club ꒱⑅₊˚</a></li>
          </ul>
        </div>
        
        </div>
      </div>
    </div>
  );
}
