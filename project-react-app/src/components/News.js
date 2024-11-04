import React from "react";
import "./News.css";
import news from "../images/newsimage.jpg";

const News = () => {
  return (
    <div className="take-step">
      <img src={news} alt="News" width="200" height="200" />
      <div className="step-content">
        <h2>News in the Cooking World</h2>
        <p>
          Recent news in the cooking world has been buzzing with exciting
          trends...
        </p>
        <a href="https://www.southernliving.com/food" className="button2">
          Link to Cooking News!!
        </a>
      </div>
    </div>
  );
};

export default News;
