import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Master() {

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Master;
