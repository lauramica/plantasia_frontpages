import "../css/App.css";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Main() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Outlet />

        <div className="main-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main;
