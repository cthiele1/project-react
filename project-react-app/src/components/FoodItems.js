import React from "react";
import Header from "./Header"; // Adjust the path if necessary
import gcake from "../images/gcake.jpg"; // Adjust the path as necessary
import friedTomato from "../images/friedtomato.jpg"; // Adjust the path as necessary
import skilletCornbread from "../images/skilletcornbread.jpg"; // Adjust the path as necessary
import cheddarPie from "../images/cheddarpie.jpg"; // Adjust the path as necessary
import pimento from "../images/pimento.jpg"; // Adjust the path as necessary

import "./FoodItems.css";

const MainContent = () => {
  return (
    <div>
      <Header />
      <main id="main-content">
        <div id="assignment-section">
          <h2 id="Assignments" className="flex container">
            <div id="container">
              {[
                {
                  title: "German Chocolate Cake",
                  image: gcake,
                  description:
                    "Even though the name may indicate otherwise, the German Chocolate Cake actually has Southern roots dating back to the 1950s. The classic cake is defined by its decadent Coconut-Pecan Frosting. Just make sure to let the cake layers cool completely before lathering on the frosting.",
                },
                {
                  title: "Southern Fried Green Tomatoes",
                  image: friedTomato,
                  description:
                    "While certainly not the only way to enjoy green tomatoes, this is simply the most delectable and Southern way to do it. The best fried green tomatoes are crispy, lightly coated slices of tangy green tomatoes, fried in vegetable oil or bacon grease. Some buttermilk and a 50-50 blend of cornmeal and flour is all you need.",
                },
                {
                  title: "Southern Skillet Cornbread",
                  image: skilletCornbread,
                  description:
                    "In our opinion, the only way to make classic cornbread is in a cast-iron skillet. Plus we skip the sugar and opt for bacon drippings instead. Once you have a skillet, all you need is a handful of ingredients and 10 minutes to get your cornbread cooking.",
                },
                {
                  title: "Tomato, Cheddar, And Bacon Pie",
                  image: cheddarPie,
                  description:
                    "We love in-season tomatoes so much that we'll bake them into pies. With its mayonnaise and shredded cheese, old-fashioned tomato pie has a decidedly retro appeal. But unlike retro dishes such as congealed salad, we'll chow this down any day.",
                },
                {
                  title: "Pimento Cheese",
                  image: pimento,
                  description:
                    "Pimiento cheese is one of those recipes that proves a recipe doesn't have to be complicated to be a crowd pleaser. It comes together in just 15 minutes with no cooking required, just a little bit of grating. Yes, grating your own cheese is vital for this recipe, don't dare buy the pre-shredded kind.",
                },
              ].map((item, index) => (
                <section className="column" key={index}>
                  <a href="#">
                    <h3>{item.title}</h3>
                    <img
                      src={item.image}
                      alt={`Recipe ${index + 1} picture`}
                      height="200"
                      width="200"
                    />
                  </a>
                  <p>{item.description}</p>
                </section>
              ))}
            </div>
          </h2>
        </div>
      </main>
    </div>
  );
};

export default MainContent;
