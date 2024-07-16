import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";

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
      {/* <Analytics /> */}
      <ScrollRestoration />
      <div className="main-container d-flex flex-column">
        <div>
          <Navbar navBarCollapse={navBarCollapse} handleNavbarCollapse={handleNavbarCollapse} />
          <div onClick={() => setNavBarCollapse(false)}>
            <ToastContainer
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
            />
            <Outlet />
          </div>
        </div>
        <div className="main-footer" onClick={() => setNavBarCollapse(false)}>
          <Footer className="justify-content-end" />
        </div>
      </div>
    </>
  );
}

export default Main;
