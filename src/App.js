import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Recipes from "./pages/Recipes";
import PopularCooks from "./pages/PopularCooks";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="admin" element={<Admin />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="contact" element={<Contact />} />
          <Route path="PopularCooks" element={<PopularCooks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
