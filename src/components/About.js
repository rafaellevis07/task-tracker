import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <a href="https://github.com/rafaellevis07"> By: Rafael Garcia</a> <br />
      <Link to="/"> Go Back</Link>
    </div>
  );
};

export default About;
