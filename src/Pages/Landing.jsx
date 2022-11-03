import { Link } from "react-router-dom";
import Launch from "../images/launch.jpeg";
import apply from "../images/apply.png";
import carot from "../images/carot.png";
import "./Landing.css";

const Landing = () => {
  const buttons = [
    {
      name: "Partners",
      image: carot,
      path: "/Partners",
    },
    {
        name: "Launchpad",
        image: carot,
        path: "/Launchpad",
    },
    {
        name: "Games",
        image: carot,
        path: "/GrouchyTigers",
    },
    {
      name: "Utilities",
      image: carot,
      path: "/Shop",
    },
    {
        name: "Events",
        image: carot,
        path: "/GrouchyTigers",
    },

  ];
  return (
    <div className="LandingMain" style={{marginTop: "20px"}}>
        <h1>Bobby Rabbits</h1>
      <div className="buttonContainer">
        {buttons.map((button) => {
          return (
            <Link to={button.path}>
              <div
                style={{
                  backgroundColor: button.primaryColor,
                  padding: "20px",
                  margin: "10px",
                  borderRadius: "10px",
                }}
                className="buttonCard"
              >
                <img
                  src={button.image}
                  style={{ maxWidth: "130px" }}
                  alt="partner logo" className="btnimg"
                />
                <h3 style={{ color: "white" }}>{button.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>

    
  );
};

export default Landing;