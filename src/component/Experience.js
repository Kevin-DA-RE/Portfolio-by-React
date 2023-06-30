import { experience } from "../data/experience";
import "../css/Experience.css";

function Experience() {
  return (
    <div className="exp-background">
      <h1>Experience</h1>
      {experience.map((exp) => (
        <div className="p-exp">
          <h3>{exp.titre}</h3>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
}
export default Experience;
