import { red } from "@mui/material/colors";
import "./stylesheets/About.css";

export default function About() {
  return (
    <div>
      <div>
        <p>
          <code>Hi!</code>
        </p>
      </div>

      <img src="aboutme.jpg"></img>

      <br></br>

      <div id="paragraphs">
        <br></br>
        <div id="normal">My name is</div>
        <div id="coral">Lina Kang</div>
        <br></br>
        <br></br>
        <div id="normal">
          I graduated from 
        </div>
        <div id="blue">
        Cal Poly Pomona
        </div>
        <div id="normal">
          in Spring 2024
        </div>
        <div id="normal">
        with B.S. in 
        </div>
        <div id="green">
        Computer Science 
          </div>
          <br></br>
        <br></br>
        <div id="normal">
          Currently, I am working as a
        </div>
        <div id="purple">Software Engineer</div>
        <div id="normal">in the R&D team at</div>
        <div id="blue">EON Reality</div>
        <br></br>
        <br></br>
        <div id="normal">Happy to meet you!</div>
        <br></br>
      </div>
    </div>
  );
}
