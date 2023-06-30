import Experience from "./Experience";
import Competence from "./Competence";
import Bio from "./Bio";
import Project from "./Project";
import Contact from "./Contact";


function Body() {
  return (
    <div>
      <Bio />
      <Competence />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default Body;
