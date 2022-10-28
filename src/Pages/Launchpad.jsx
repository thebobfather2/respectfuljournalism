import launchimg from "../images/launchimg.png";
import gnarmint from "../images/MintGnar.png";
import "./Launchpad.css";

const Launchpad = () => {
  return (
    <div className="LaunchpadMain">
      <img className="launchimg"
          src={launchimg}
          alt="launchimg">
      </img>

      <br></br>

      <div className="Projects">

      <div className="LaunchpadMain2" style={{paddingBottom: "500px"}}>
      <a href="https://gnarafdao.vercel.app/">
        <img
          className="gnarmint"
          src={gnarmint}
          alt="gnarmint"
      ></img>
         <h3 className="subtitle">Mint Gnar AF DAO Card</h3>
      </a>
      </div>
      <h2 className="bottomtitle">More Projects Coming Soon!</h2>
      </div>

    </div>
  );
};

export default Launchpad;