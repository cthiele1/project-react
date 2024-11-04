import React from "react";
import Header from "./Header";
import "./About.css";

import stock from "../images/stockphoto.jpg";

const About = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="box">
          <h1>History</h1>
          <p>
            By the 19th century, Southern cooking had begun to take shape, with
            dishes like fried chicken, collard greens, and cornbread emerging as
            staples. Enslaved cooks played a vital role, using their creativity
            to transform limited ingredients into flavorful meals, often using
            spices and cooking techniques from their African heritage. The Civil
            War and the Reconstruction era further influenced Southern cooking
            as communities sought hearty, affordable meals. Recipes for biscuits
            and gravy, gumbo, and jambalaya showcased the resourcefulness of
            Southern families, combining various influences into one pot.
          </p>
        </div>
        <div className="box">
          <h1>Goals</h1>
          <p>
            The Famous Southern Cooking Recipes website aims to preserve and
            celebrate the rich culinary heritage of the South by providing
            easy-to-follow recipes and informative content about the origins and
            cultural significance of traditional dishes. It seeks to make
            Southern cooking accessible to everyone, encouraging home cooks of
            all skill levels to experiment with recipes while highlighting local
            ingredients and seasonal produce. By fostering community engagement
            through user-generated content and social media interactions, the
            website promotes the diverse influences within Southern cuisine,
            including contributions from African American, Native American, and
            immigrant cultures. Additionally, it aspires to create visually
            engaging content that inspires creativity, serves as a comprehensive
            resource for cooking techniques and meal planning, and encourages
            culinary tourism by showcasing iconic dishes and the regions they
            come from.
          </p>
        </div>
        <div className="box">
          <h1>Mission</h1>
          <p>
            The mission of Famous Southern Cooking Recipes is to celebrate and
            preserve the rich culinary traditions of the South by providing
            accessible, authentic recipes and informative content that honors
            the diverse cultural influences within Southern cuisine. We aim to
            inspire home cooks of all skill levels to explore and experiment
            with these beloved dishes while fostering a vibrant community that
            shares a passion for Southern food. Through high-quality visuals and
            educational resources, we seek to connect people to the stories
            behind the recipes, promote local ingredients, and encourage a
            deeper appreciation for the flavors and heritage of Southern
            cooking.
          </p>
        </div>
        <div className="box">
          <h1>Achievements</h1>
          <p>
            Famous Southern Cooking Recipes has achieved a wealth of milestones,
            including the creation of an extensive library of authentic Southern
            recipes that features both traditional dishes and modern
            adaptations. The website has developed educational content that
            highlights the history and cultural significance of Southern cuisine
            while fostering an active online community where users share their
            own recipes and cooking experiences. Partnerships with local farms
            have promoted fresh, seasonal ingredients, supporting regional
            agriculture. High-quality visual content, including appealing photos
            and videos, enhances user engagement and inspires culinary
            exploration. The site has garnered recognition from culinary
            organizations and food bloggers for its contributions to Southern
            food culture, alongside significant social media growth that
            connects a global audience. Additionally, it has successfully
            highlighted iconic Southern dishes to encourage culinary tourism and
            has established a comprehensive resource hub with cooking techniques
            and meal planning guides, all while promoting diverse voices and
            recipes that reflect the rich tapestry of influences within Southern
            cooking.
          </p>
        </div>
        <div className="image">
          <img src={stock} alt="Southern Cooking" />
        </div>
      </div>
    </div>
  );
};

export default About;
