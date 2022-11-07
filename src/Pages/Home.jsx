import { Link } from "react-router-dom";
import partners from "../images/combo.png";
import launchpad from "../images/launchbtn.png";
import carot from "../images/carot.png";
import travelbob from "../images/travelbob.png";
import brcan from "../images/brcan.png";
import merch from "../images/merch.png";
import "./Home.css";

const Home = () => {
  const buttons = [
    {
      name: "Partners",
      image: partners,
      path: "/Partners",
    },
    {
        name: "Games",
        image: carot,
        path: "/Utility",
    },
    {
        name: "Merch",
        image: merch,
        path: "/Merch",
    },
    {
      name: "Utilities",
      image: brcan,
      path: "/Utility",
    },
    {
        name: "Events",
        image: travelbob,
        path: "/Events",
    },
    {
        name: "Services",
        image: launchpad,
        path: "/Services",
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
                <h3 className="subhead" style={{ color: "white" }}>{button.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>

    
  );
};

export default Home;