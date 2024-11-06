import "../styles/styles.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />;
      <div className="explore-degree">
        <div className="imgcolor">
          <div className="sidebar-image">
            <img src="/images/projectimage1.jpg" alt="Sidebar" />
          </div>
        </div>
        <div className="right-side">
          <h2>
            <strong>Welcome to Famous Southern Cooking Recipes!!</strong>
          </h2>
          <p>
            Welcome to Famous Southern Cooking Recipes, your go-to destination
            for the heart and soul of Southern cooking! Here, we celebrate the
            rich traditions, flavors, and stories that make Southern cuisine so
            special. From savory gumbo and crispy fried chicken to sweet pecan
            pie, our collection of recipes is crafted with love and a dash of
            nostalgia. Join us as we explore time-honored family recipes, share
            tips for perfecting classic dishes, and uncover the secrets behind
            that signature Southern hospitality. Whether you’re a seasoned chef
            or a curious beginner, we invite you to roll up your sleeves and
            savor the joy of cooking with us. Let’s gather around the table and
            make some delicious memories together!
          </p>

          <p>
            {" "}
            At Famous Southern Cooking Recipes, we believe that food is more
            than just a meal; it’s an experience that brings people together.
            Our community is filled with passionate home cooks, eager to share
            their stories and culinary adventures. Explore our blog for
            heartfelt anecdotes, cooking tips, and seasonal favorites that
            highlight the bounty of the South. Dive into our extensive
            collection of recipes, each one lovingly tested to ensure that every
            dish bursts with authentic Southern flavor. From barbecue to
            biscuits, we’ll guide you step-by-step, making it easy for you to
            create unforgettable meals that will impress family and friends. We
            also embrace the vibrant diversity of Southern cooking, celebrating
            influences from African, Native American, and immigrant traditions.
            Join us in discovering the regional specialties that make our
            cuisine so unique, and don’t forget to check out our community
            forum, where you can share your own recipes, ask questions, and
            connect with fellow food lovers. So grab your apron, pour yourself a
            glass of sweet tea, and let’s embark on this culinary journey
            together. Welcome to the family!
          </p>
        </div>
      </div>
      <div className="paying-for-school">
        <div className="title">
          <h1>
            <strong>Top Trending Recipes</strong>
          </h1>
        </div>
        <div className="title-text">
          <p>
            {" "}
            Our collection features the most beloved Southern recipes, cherished
            for their rich flavors and comforting qualities. Each dish has a
            story to tell, capturing the essence of home-cooked meals that bring
            families together. Explore these crowd-pleasers that have stood the
            test of time and are sure to delight your taste buds!
          </p>
        </div>
        <div className="img">
          <img
            src="/images/maccheese.jpeg"
            alt="Mac and Cheese"
            width="300"
            height="150"
          />
          <h4>Mac and Cheese</h4>
          <p>
            {" "}
            This recipe for Southern-style mac and cheese is baked rather than
            made on the stovetop, meaning you can easily slice portions to
            serve. The combination of cheddar, mozzarella and gouda cheeses is
            accented by mustard and Cajun seasonings for a nice kick.{" "}
          </p>
        </div>
        <div className="img">
          <img
            src="/images/pecanpie.jpeg"
            alt="Pecan Pie"
            width="300"
            height="150"
          />
          <h4>Pecan Pie</h4>
          <p>
            Pecan trees grow wild throughout much of the Southern United States,
            and the trees' nuts feature in many local specialties. This iconic
            Southern pie makes use of these sweet nuts that form a crunchy crust
            over a layer of ooey-gooey filling.{" "}
          </p>
        </div>
        <div className="img">
          <img
            src="/images/buiscuits.jpeg"
            alt="Biscuits"
            width="300"
            height="150"
          />
          <h4>Biscuits</h4>
          <p>
            {" "}
            Biscuits are a favorite Southern quick bread that takes little time
            to prepare since they don't require yeast or proofing and get their
            rise from baking powder. These fluffy biscuits are great with any
            meal and can be the perfect vessels for sweet or savory fillings.
          </p>
        </div>

        <div className="take-step">
          <img
            src="/images/newsimage.jpg"
            alt="News "
            width="200"
            height="200"
          />
          <div className="step-content">
            <h2>News in the Cooking World</h2>
            <p>
              {" "}
              Recent news in the cooking world has been buzzing with exciting
              trends and developments, particularly the growing emphasis on
              sustainable and plant-based cooking. Many chefs are now
              incorporating locally sourced, seasonal ingredients into their
              menus, reflecting a heightened awareness of environmental impact
              and health benefits. Additionally, innovative culinary techniques,
              such as fermentation and foraging, are gaining popularity, as
              chefs seek to explore bold flavors and preserve traditional
              practices. The rise of home cooking continues, fueled by social
              media platforms where food influencers share creative recipes and
              cooking tips, making gourmet cooking more accessible than ever.
              Furthermore, several prominent culinary events have returned,
              showcasing diverse cuisines and fostering community connections
              through food, while culinary schools are adapting their programs
              to meet the evolving demands of the industry, emphasizing both
              sustainability and global culinary traditions.
            </p>
            <br />
            <p>
              {" "}
              In recent weeks, the cooking world has been abuzz with the rise of
              food technology innovations, particularly the use of artificial
              intelligence and smart kitchen appliances that streamline cooking
              processes. Chefs and home cooks alike are leveraging apps that
              suggest recipes based on available ingredients, while smart
              devices offer real-time cooking assistance and precise temperature
              control. Additionally, there’s been a notable surge in the
              popularity of global cuisines, with chefs experimenting with
              fusion dishes that blend flavors and techniques from different
              cultures. Social media challenges, like cooking with mystery
              ingredients or recreating classic dishes with a twist, have
              captivated audiences, further driving engagement in the culinary
              space. On the health front, interest in gut health has sparked a
              resurgence of fermentation techniques, leading to a variety of
              homemade pickles, kimchi, and sourdough bread making a comeback in
              kitchens everywhere. Overall, the culinary landscape is evolving
              rapidly, blending tradition with innovation and connecting food
              lovers around the globe.
            </p>
            <a href="https://www.southernliving.com/food" className="button2">
              {" "}
              Link to Cooking News!!
            </a>
          </div>
        </div>
      </div>
      <script src="script.js"></script>
    </>
  );
}
