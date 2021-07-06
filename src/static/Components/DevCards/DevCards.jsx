import "./devCards.css";
import github from "../../../images/github.png";
import linkedin from "../../../images/linkedin.png";

const DevCards = (props) => {
  return (
    <div className="card-container">
      <img className="profile-img" src={props.image} alt="profile" />
      <h1 className="card-title">Name</h1>
      <a href="www.google.com" className="card-git">
        <img className="github" src={github} alt="GITHUB" />
      </a>
      <a href="www.google.com" className="card-linkedin">
        <img className="linkedin" src={linkedin} alt="LINKEDIN" />
      </a>
    </div>
  );
};

export default DevCards;
