import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import placeholder from "../images/bunnyhead.png";
import carotsend from "../images/carot.png";
import bulkIcon from "../images/icons/bulksend.png";
import dashboardIcon from "../images/icons/dashboard.png";
import galleryIcon from "../images/icons/gallery.png";
import slotIcon from "../images/icons/slots.png";
import walletIcon from "../images/icons/wallet.png";
import "./Services.css";

const Services = () => {

  return (
    <>
      {/* <img src={carotShop} className='carotshopimage' alt='carot shop'/> */}
      <div className="MainShopContainer">
        <div className="menuContainer">
          <div className="menuHeading">
            <h1 className="menuTitle">
                Powered by 
                <br></br>
                Bobby Rabbits
            </h1>
            <h2 className="menuSubtitle" style={{marginTop: "20px", marginBottom: "20px"}}>Services Menu</h2>
            <a href="https://discord.gg/d6tDkSaCQC">
                <h2 className="ticketSubtitle" style={{marginTop: "20px", marginBottom: "20px"}}>Click To Open Ticket</h2>
            </a>
          </div>

          <div className="TheMenu">

            <div className="Category">

                <div className="CategoryTitle">
                    <h2 className="CatTitle">Pre-mint setup</h2>
                    <div className="underline"></div>
                </div>

                <div className="menuItems">

                    <div className="items1">
                        <h3 className="eachMenuItem">Prepare Metadata</h3>
                        <h3 className="Prices">0.002 SOL/NFT</h3>
                    </div>
                    <div className="itemsUnderline"></div>

                    <div className="items1">
                        <h3 className="eachMenuItem">Configure & Upload</h3>
                        <h3 className="Prices">0.002 SOL/NFT</h3>
                    </div>
                    <div className="itemsUnderline"></div>

                    
                    <div className="items1">
                        <h3 className="eachMenuItem">+ Unlimited White List Tokens</h3>
                        <h3 className="Prices">Free With Config & Upload</h3>
                    </div>
                    <div className="itemsUnderline"></div>

                    <div className="items1">
                        <h3 className="eachMenuItem">Basic Mint Button + Hosting</h3>
                        <h3 className="Prices">2 Solana</h3>
                    </div>
                    <div className="itemsUnderline"></div>
                
                    <div className="items1">
                        <h3 className="eachMenuItem">Custom Mint Page + Hosting</h3>
                        <h3 className="Prices">10 Solana</h3>
                    </div>
                    <div className="itemsUnderline"></div>

                    <div className="items1">
                        <h3 className="eachMenuItem">+Crosmint Button (mint with credit card)</h3>
                        <h3 className="Prices">+1 Solana</h3>
                    </div>
                    <div className="itemsUnderline"></div>

                </div>
            </div>

            <div className="Category">

                <div className="CategoryTitle">
                    <h2 className="CatTitle">post-mint features</h2>
                    <div className="underline"></div>
                </div>

                <div className="menuItems">
                    <div className="items1">
                        <h3 className="eachMenuItem">Custom Fungible Tokens</h3>
                        <h3 className="Prices">0.25 Solana Total</h3>
                    </div>
                    <div className="itemsUnderline"></div>

                    <div className="items1">
                        <h3 className="eachMenuItem">Stake Pool Setup</h3>
                        <h3 className="Prices">1 Solana</h3>
                    </div>
                    <div className="itemsUnderline"></div>

                    <div className="items1">
                        <h3 className="eachMenuItem">Custom Staking Front End</h3>
                        <h3 className="Prices">20 Solana</h3>
                    </div>
                    <div className="itemsUnderline"></div>
                
                    <div className="items1">
                        <h3 className="eachMenuItem">Fungible Token Art/Metadata Update</h3>
                        <h3 className="Prices">0.1 Solana</h3>
                    </div>
                    <div className="itemsUnderline"></div>
                
                    <div className="items1">
                        <h3 className="eachMenuItem">Stake Pool Updates</h3>
                        <h3 className="Prices">0.25 Solana</h3>
                    </div>
                    <div className="itemsUnderline"></div>

                </div>
            </div>

            <div className="Category">
                <div className="CategoryTitle">
                    <h2 className="CatTitle">Website Development</h2>
                    <div className="underline"></div>
                </div>

                <div className="menuItems">
                    <div className="items1">
                        <h3 className="eachMenuItem">Full Website Development</h3>
                        <h3 className="Prices">Ask for a quote!</h3>
                    </div>
                    <div className="itemsUnderline"></div>
                </div>
                
            </div>

            <footer className="footerText">*Please note: our cost to upload depends on file sizes, and our pricing estimates are based on ~5mb/NFT. 
            <br></br>
            Abnormally large file sizes may incur extra costs, and will be discussed with creators prior to agreement.
            <br></br>
            We will confirm final pricing and payment details before agreeing to any work.
            </footer>

          </div>

          {/* <div className='toolsContainer'>
        {items.map(item => (
         
          <Link to={item.path} style={{color: 'black'}}>
            <div className='item'>
              <h1 className='itemTitle'>{item.itemTitle}</h1>
              <img className='itemImage' src={item.itemImage} alt='Utility'></img>
             <br></br>
            </div>
            </Link>
      
        ))}
     
      </div> */}
        </div>
      </div>
    </>
  );
};

export default Services;
