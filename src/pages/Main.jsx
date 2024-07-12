import "../css/App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

function Main() {
  const [navBarCollapse, setNavBarCollapse] = useState(false);

  const handleNavbarCollapse = () => {
    navBarCollapse ? setNavBarCollapse(false) : setNavBarCollapse(true);
  };

  return (
    <>
      <ScrollRestoration />
      <div className="main-container">
        <div>
          <Navbar navBarCollapse={navBarCollapse} handleNavbarCollapse={handleNavbarCollapse} />
          <div onClick={() => setNavBarCollapse(false)}>
            <Outlet />
          </div>
        </div>
        <div className="main-footer" onClick={() => setNavBarCollapse(false)}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main;
