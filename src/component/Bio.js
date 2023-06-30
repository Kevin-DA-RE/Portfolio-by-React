import { biography } from "../data/bio";
import "../css/Bio.css";

function Bio() {
  return (
    <div className="bio-background">
      <div >
        <h1>A propos de moi</h1>
        
        {biography.map((bio) => (
          <div className="p-bio">
          <p>{bio.titre}</p>
          <p>{bio.description}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Bio;
