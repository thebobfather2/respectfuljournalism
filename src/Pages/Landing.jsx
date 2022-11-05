import { Link } from "react-router-dom";
import partners from "../images/partnersbtn.png";
import launchpad from "../images/launchbtn.png";
import carot from "../images/carot.png";
import travelbob from "../images/travelbob.png";
import brcan from "../images/brcan.png";
import merch from "../images/merch.png";
import "./Landing.css";

const Landing = () => {
  const buttons = [
    {
      name: "Partners",
      image: partners,
      path: "/Partners",
    },
    {
        name: "Games",
        image: carot,
        path: "/Shop",
    },
    {
        name: "Merch",
        image: merch,
        path: "/Merch",
    },
    {
      name: "Utilities",
      image: brcan,
      path: "/Shop",
    },
    {
        name: "Events",
        image: travelbob,
        path: "/Events",
    },
    {
        name: "Services",
        image: launchpad,
        path: "/Partners",
    },

  ];
  return (
    <div className="LandingMain">
        <div className="Title">
            <h1>Bobby Rabbits</h1>
        </div>
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