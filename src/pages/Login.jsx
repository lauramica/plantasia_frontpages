import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "../css/FormsPages.css";
import { initCart } from "../redux/cartSlice";
import { loginCustomer } from "../redux/customerSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({ email: "customer@gmail.com", password: "1234" });
  const [alert, setAlert] = useState(false);

  const loggedCustomer = useSelector((state) => state.customer);

  useEffect(() => {
    if (loggedCustomer.token) {
      const getCart = async () => {
        const response = await axios({
          url: `${import.meta.env.VITE_API_URL}/customers/${loggedCustomer.id}`,
          method: "GET",
          headers: { Authorization: `Bearer ${loggedCustomer.token}` },
        });
        response.data.customer.cart.length > 0 && dispatch(initCart(response.data.customer.cart));
      };
      getCart();
      return navigate("/");
    }
  }, [loggedCustomer]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (checkAllInputs()) {
      const login = async () => {
        const response = await axios({
          url: `${import.meta.env.VITE_API_URL}/customers/tokens`,
          method: "POST",
          data: customer,
        });
        dispatch(loginCustomer(response.data));
      };
      login();
      return;
    }
    setAlert(true);
    return;
  };

  const checkAllInputs = () => {
    try {
      if (customer.email && customer.password) return true;
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return (
    <>
      <div className="window-box">
        <div className="container bg-form m-3">
          <div
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
                import.meta.env.VITE_IMAGES_URL
              }home/home_banner.png)`,
            }}
            className="desktop-form-container"
          >
            <h2 className="title-welcome proxima-nova-regular">Welcome back!</h2>
            <Link to="/">
              <img
                className="forms-logo"
                src={`${import.meta.env.VITE_IMAGES_URL}Plantasia_white.svg`}
                alt="Plantasia-logo"
              />
            </Link>
          </div>
          <div className="form-container">
            <h2 className="title-forms text-center galadali-bold">Log In</h2>
            <form className="proxima-nova-regular" onSubmit={handleLogin}>
              <div onClick={() => setAlert(false)}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={customer.email}
                    className="forms-input form-control rounded-pill"
                    aria-describedby="email"
                    placeholder="E-mail"
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  />
                  <div
                    className={`${
                      alert && !customer.email ? "d-inline" : "d-none"
                    } position-absolute bg-white border border-warning p-2 alert rounded-corner`}
                  >
                    Email is required
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={customer.password}
                    className="forms-input form-control rounded-pill"
                    aria-describedby="password"
                    placeholder="Password"
                    onChange={(e) => setCustomer({ ...customer, password: e.target.value })}
                  />
                  <div
                    className={`${
                      alert && !customer.password ? "d-inline" : "d-none"
                    } position-absolute bg-white border border-warning p-2 alert rounded-corner`}
                  >
                    Password is required
                  </div>
                  <Link to="/reset-password" className="d-flex justify-content-end forms-link mt-2">
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div className="position-relative">
                <button className="btn-forms form-control rounded-pill my-4">Log In</button>
                <div
                  className={`${
                    alert ? "d-inline" : "d-none"
                  } position-absolute end-0 bg-white border border-warning p-2 alert rounded-corner`}
                >
                  There are some required fields, that need to be filled
                </div>
              </div>
            </form>
            <p className="text-center darkgreen">
              Don't have an account?
              <Link
                to="/register"
                className="forms-link proxima-nova-bold text-decoration-none ms-1"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
