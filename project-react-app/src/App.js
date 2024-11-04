import React from "react";
import Header from "./components/Header";
import Explore from "./components/Explore";
import TrendingRecipes from "./components/TrendingRecipes";
import News from "./components/News";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Explore />
      <TrendingRecipes />
      <News />
    </div>
  );
}

export default App;
