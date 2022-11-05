import "./Merch.css";
import merch from "../images/merch.png";

const Merch = () => {

return (

<div className="MerchMain">

<a href="https://bryanandrewpike.wixsite.com/website/bobby-rabbits-merch">
      <img
        className="MerchButton"
        src={merch}
        alt="merch"
      ></img>
<div className="Subtext">Bobby Rabbits</div> 
<div className="Subtext">Official Merch</div>
</a>

</div>
    
    );
};

export default Merch;