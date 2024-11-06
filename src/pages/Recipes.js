import "../styles/recipes.css";
import Header from "../components/Header";
import React from "react";
export default function Recipes() {
  return (
    <>
      <Header />;
      <main id="main-content">
        <div id="assignment-section">
          <h2 id="Assignments" className="flex container">
            <div id="container">
              <section className="column">
                <h3>German Chocolate Cake</h3>
                <img
                  src="/images/gcake.jpg"
                  alt="Recipe 1 "
                  height="200"
                  width="200"
                />

                <p>
                  Even though the name may indicate otherwise, the German
                  Chocolate Cake actually has Southern roots dating back to the
                  1950s. The classic cake is defined by its decadent
                  Coconut-Pecan Frosting. Just make sure to let the cake layers
                  cool completely before lathering on the frosting.
                </p>
              </section>

              <section className="column">
                <h3>Southern Fried Green Tomatoes</h3>

                <img
                  src="/images/friedtomato.jpg"
                  alt="Recipe 2"
                  height="200"
                  width="200"
                />
                <p>
                  While certainly not the only way to enjoy green tomatoes, this
                  is simply the most delectable and Southern way to do it. The
                  best fried green tomatoes are crispy, lightly coated slices of
                  tangy green tomatoes, fried in vegetable oil or bacon grease.
                  Some buttermilk and a 50-50 blend of cornmeal and flour is all
                  you need.
                </p>
              </section>

              <section className="column">
                <h3>Southern Skillet Cornbread</h3>

                <img
                  src="/images/skilletcornbread.jpg"
                  alt="Recipe 3 "
                  height="200"
                  width="200"
                />
                <p>
                  In our opinion, the only way to make classic cornbread is in a
                  cast-iron skillet. Plus, we skip the sugar and opt for bacon
                  drippings instead. Once you have a skillet, all you need is a
                  handful of ingredients and 10 minutes to get your cornbread
                  cooking.
                </p>
              </section>

              <section className="column">
                <h3>Tomato, Cheddar, And Bacon Pie</h3>

                <img
                  src="/images/cheddarpie.jpg"
                  alt="Recipe 4"
                  height="200"
                  width="200"
                />
                <p>
                  We love in-season tomatoes so much that we'll bake them into
                  pies. With its mayonnaise and shredded cheese, old-fashioned
                  tomato pie has a decidedly retro appeal. But unlike retro
                  dishes such as congealed salad, we'll chow this down any day.
                </p>
              </section>

              <section className="column">
                <h3>Pimento Cheese</h3>

                <img
                  src="/images/pimento.jpg"
                  alt="Recipe 5"
                  height="200"
                  width="200"
                />
                <p>
                  Pimiento cheese is one of those recipes that proves a recipe
                  doesn't have to be complicated to be a crowd-pleaser. It comes
                  together in just 15 minutes with no cooking required, just a
                  little bit of grating. Yes, grating your own cheese is vital
                  for this recipe, don't dare buy the pre-shredded kind.
                </p>
              </section>
            </div>
          </h2>
        </div>
      </main>
    </>
  );
}
