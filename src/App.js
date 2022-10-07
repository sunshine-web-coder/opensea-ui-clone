import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/login/Login";
import Assets from "./pages/assets/Assets";
import Solana from "./pages/solana-collections/Solana";
import Art from "./pages/categories/Art";
import Collectibles from "./pages/categories/Collectibles";
import DomainNames from "./pages/categories/DomainNames";
import Music from "./pages/categories/Music";
import Photography from "./pages/categories/Photography";
import Sports from "./pages/categories/Sports";
import TradingCards from "./pages/categories/TradingCards";
import Utility from "./pages/categories/Utility";
import VirtualWorlds from "./pages/categories/VirtualWorlds";
import Rankings from "./pages/stats/Rankings";
import Activity from "./pages/stats/Activity";
import Partner from "./pages/partner/Partner";
import GasFree from "./pages/gas-free/GasFree";
import TaxResources from "./pages/tax-resources/TaxResources";
import About from "./pages/about/About";
import Career from "./pages/career/Career";
import Ventures from "./pages/ventures/Ventures";
import ScrollToTop from "./components/ScrollToTop";

export const ThemeContext = createContext(null);

function App(props) {
  const [theme, setTheme] = useState("light");

  const storedMode = localStorage.getItem("theme");
  if (storedMode == null) {
    localStorage.setItem("theme", "dark");
  }
  useEffect(() => {
    setTheme(storedMode);
  }, [storedMode]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    if (storedMode === "light" || storedMode === null) {
      localStorage.removeItem("theme");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.removeItem("theme");
      localStorage.setItem("theme", "light");
      setTheme("Light");
    }
  };
  let location = useLocation();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      <div className="App" id={theme}>
        <ScrollToTop />
        <Header toggleTheme={toggleTheme}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/solana-collections" element={<Solana />} />
          <Route path="/category/art" element={<Art />} />
          <Route path="/category/collectibles" element={<Collectibles />} />
          <Route path="/category/domain-names" element={<DomainNames />} />
          <Route path="/category/music" element={<Music />} />
          <Route path="/category/photography" element={<Photography />} />
          <Route path="/category/sports" element={<Sports />} />
          <Route path="/category/trading-cards" element={<TradingCards />} />
          <Route path="/category/utility" element={<Utility />} />
          <Route path="/category/virtual-worlds" element={<VirtualWorlds />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/partners" element={<Partner />} />
          <Route path="/gas-free" element={<GasFree />} />
          <Route path="/tax-resources" element={<TaxResources />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/opensea-ventures" element={<Ventures />} />
        </Routes>
        {location.pathname !== '/assets' &&
        location.pathname !== '/solana-collections' &&
        location.pathname !== '/category/art' &&
        location.pathname !== '/category/collectibles' &&
        location.pathname !== '/category/domain-names' &&
        location.pathname !== '/category/music' &&
        location.pathname !== '/category/photography' &&
        location.pathname !== '/category/trading-cards' &&
        location.pathname !== '/category/utility' &&
        location.pathname !== '/category/virtual-worlds' &&
        location.pathname !== '/rankings' &&
        location.pathname !== '/activity' &&
        <Footer />}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
