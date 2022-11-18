import "./About.css";
import Bobby from "../images/bobby.jpg";
import Bryan from "../images/bryan.jpg";
import Tyler from "../images/tyler.jpg";

const About = () => {

return (

<div className="AboutMain">

    <heading className="heading">
        <h1>What is Bobby Rabbits?</h1>
    </heading>

    <body className="body">
        <h3 className="synopsis">
            Bobby Rabbits began as a limited collection of 1,000 unique rabbit characters represented by NFTs on the Solana blockchain. 
            The original "Bobby Rabbits" were randomly generated from attributes created by Los Angeles-based artist “Bobby”. Inspired 
            primarily by the LA street art scene, Bobby Rabbits are on a mission to carry the traditions of street art into the metaverse while 
            providing real-world value through participation in a community with an intense passion for developing the future of Web3 technology. 
            The original collection consists of various LA street art themes and pop culture references while the special edition "Icy Rabbits" are 
            influenced by Hip Hop culture and bling, an homage to Bryan's hometown of Atlanta and his love for the music industry. The Bobby Rabbits team 
            made some significant pivots over the past year driven by Tyler's incredible technology, and with the addition of "Services" we hope to reignite 
            our ability to generate revenue and provide growth and value for our holders and partners. We sincerely thank all of those who have stood unwaveringly 
            by us throughout a turbulent year. Not only are we still here - we truly believe we are on the precipice of greatness in this wacky world of Web3. Again, thank you!
        <br></br>
        <br></br>
            -The Bobby Rabbits Team
        </h3>
    </body>

    <heading className="heading2">
        <h1>Meet The Team</h1>
    </heading>

    <body className="body">

        <div className="founder">
            <img
                className="founderimg"
                src={Bobby}
                alt="Bobby"
            ></img>
            <h2 className="founderName">Bobby</h2>
            <h3 className="founderBio">
                Bobby is the legendary artist behind Bobby Rabbits. He was born and raised in LA 
                where he currently resides with his lovely wife and fur baby. Bobby started doing graffiti in High School and moved on to 
                canvas later on. He has now been painting on canvas for about 8 years. In addition to developing the creative vision for Bobby 
                Rabbits and creating all of the original artwork, he was responsible for much of our early growth in social media and does some heavily 
                lifting when it comes to our brand. His hands-on involvement in the project created a genuine community who feel a deep connection to the 
                characters in our NFTs. Bobby has recently been working with paint and canvas - his true passion - and you can own one of his physical pieces 
                which are absolutely incredible through live auctions on his Instagram, @inbobbywetrustt. Make sure to follow him and order a custom for your own 
                home today!
            </h3>
        </div>

        <div className="founder">
            <img
                className="founderimg"
                src={Bryan}
                alt="Bobby"
            ></img>
            <h2 className="founderName">Bryan</h2>
            <h3 className="founderBio">
                Bryan is the co-founder of Bobby Rabbits and is responsible for a range of business-related functions. 
                In 2013, Bryan obtained his Series 7 and 63 FINRA licenses and became a stock broker for E*TRADE. Seven years later in 
                2020, he ended his financial career with a Series 66 license managing a book of clients worth over $200 
                million. With a degree from Auburn University in Marketing, he is responsible for our marketing 
                strategy and business development, and created the original white paper for Bobby Rabbits. Under the direction of Tyler, 
                He has spent the past year learning web development and is constantly working to enhance the project technologically. Bryan
                also developed the Edd Fox project for our friend Reuben using skills and foundations from Tyler. He lives in Atlanta, Georgia 
                where he is taking classes at Georgia Tech to learn full stack development and enjoys music production and videography in his spare time.
            </h3>
        </div>

        <div className="founder">
            <img
                className="founderimg"
                src={Tyler}
                alt="Tyler"
            ></img>
            <h2 className="founderName">Tyler</h2>
            <h3 className="founderBio">
                Tyler, who we lovingly refer to as "Corn Pop", is arguably the most valuable player this year. Out of the blue, he assumed his role 
                from within the Bobby Rabbit's community, finding us on Discord and jumping in to help with development prior to our very first mint.  
                He has a background in technology and education, having worked as an integration engineer and a teacher in the past. Tyler initially 
                managed the minting engine and NFT technology for Bobby Rabbits, and then went on to build us this incredible platform, site, and apps we 
                have today. He currently lives in Iowa where he spends his time producing music and burying his head in his computer exploring the world 
                of blockchain technology. Having risen from the new member rank of Rascally Rabbit to having a major role in the project, 
                Tyler embodies the fundamental mission of Bobby Rabbits - bringing together a community of like-minded 
                folks to become our friends and build something great together.
            </h3>
        </div>

    </body>
</div>
    );
};

export default About;