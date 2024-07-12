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

  alert(`//////////////////////// ToDo List
- Footer
- Date-fns on Order List
- Password Recovery
- Narrow Components distance (better definition of the blocks and straight lines)
- About This Project
- Banner Home, Lorem and Height
- Product Detail, Price and Icons
- Edit User, Country margin bottom
- Links to go back, (fix some and add more)
- CheckOut inputs enchance
- Change all the anchor points to Links
- NavBar Icons Size
////////////////////////////////////////////`);

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
