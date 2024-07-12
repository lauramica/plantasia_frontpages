import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "../css/App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Main() {
  const [navBarCollapse, setNavBarCollapse] = useState(false);

  const handleNavbarCollapse = () => {
    navBarCollapse ? setNavBarCollapse(false) : setNavBarCollapse(true);
  };

  return (
    <>
      {/* <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      /> */}
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
