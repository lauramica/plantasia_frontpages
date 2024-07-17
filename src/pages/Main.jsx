import { useState, useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import "../css/App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { clearCart } from "../redux/cartSlice";
import { logoutCustomer } from "../redux/customerSlice";

function Main() {
  const dispatch = useDispatch();
  const [navBarCollapse, setNavBarCollapse] = useState(false);
  const [customerValidated, setCustomerValidated] = useState(false);
  const cart = useSelector((state) => state.cart);
  const loggedCustomer = useSelector((state) => state.customer);

  const handleNavbarCollapse = () => {
    navBarCollapse ? setNavBarCollapse(false) : setNavBarCollapse(true);
  };

  useEffect(() => {
    if (loggedCustomer.token) {
      const customerValidation = async () => {
        const response = await axios({
          url: `${import.meta.env.VITE_API_URL}/customers/${loggedCustomer.id}`,
          method: "GET",
          headers: { Authorization: `Bearer ${loggedCustomer.token}` },
        });
        if (!response.data.customer) {
          dispatch(logoutCustomer());
          dispatch(clearCart());
        }
      };
      customerValidation();
    }
    setCustomerValidated(true);
  }, []);

  useEffect(() => {
    const saveCart = async () => {
      await axios({
        url: `${import.meta.env.VITE_API_URL}/customers/${loggedCustomer.id}`,
        method: "POST",
        data: { cart: cart },
        headers: { Authorization: `Bearer ${loggedCustomer.token}` },
      });
    };
    loggedCustomer.token && saveCart();
  }, [cart]);

  return (
    customerValidated && (
      <>
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
    )
  );
}

export default Main;
