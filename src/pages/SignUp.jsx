import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "../css/FormsPages.css";

function SignUp() {
  const navigate = useNavigate();

  const [alert, setAlert] = useState(false);
  const [customer, setCustomer] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    if (checkAllInputs()) {
      const register = async () => {
        await axios({
          url: `${import.meta.env.VITE_API_URL}/customers`,
          method: "POST",
          data: customer,
        });
      };
      register();
      return navigate("/login");
    }
    setAlert(true);
    return;
  };

  const checkAllInputs = () => {
    try {
      if (customer.firstname && customer.lastname && customer.email && customer.password)
        return true;
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
            className="desktop-form-container"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
                import.meta.env.VITE_IMAGES_URL
              }home/home_banner.png)`,
            }}
          >
            <h2 className="title-welcome proxima-nova-regular">Become a plant lover</h2>
            <img
              className="forms-logo"
              src={`${import.meta.env.VITE_IMAGES_URL}Plantasia_white.svg`}
              alt="Plantasia-logo"
            />
          </div>
          <div className="form-container">
            <h2 className="title-forms text-center galadali-bold">Sign Up</h2>
            <form action="" className="proxima-nova-regular" onSubmit={handleRegister}>
              <div onClick={() => setAlert(false)}>
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="forms-input form-control rounded-pill"
                    aria-describedby="firstname"
                    placeholder="First Name"
                    value={customer.firstname}
                    onChange={(e) => setCustomer({ ...customer, firstname: e.target.value })}
                  />
                  <div
                    className={`${
                      alert && !customer.firstname ? "d-inline" : "d-none"
                    } position-absolute bg-white border border-warning p-2 alert rounded-corner`}
                  >
                    First Name is required
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="forms-input form-control rounded-pill"
                    aria-describedby="lastname"
                    placeholder="Last Name"
                    value={customer.lastname}
                    onChange={(e) => setCustomer({ ...customer, lastname: e.target.value })}
                  />
                  <div
                    className={`${
                      alert && !customer.lastname ? "d-inline" : "d-none"
                    } position-absolute bg-white border border-warning p-2 alert rounded-corner`}
                  >
                    Last Name is required
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="forms-input form-control rounded-pill"
                    aria-describedby="email"
                    placeholder="E-mail"
                    value={customer.email}
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
                    className="forms-input form-control rounded-pill"
                    aria-describedby="password"
                    placeholder="Password"
                    value={customer.password}
                    onChange={(e) => setCustomer({ ...customer, password: e.target.value })}
                  />
                  <div
                    className={`${
                      alert && !customer.password ? "d-inline" : "d-none"
                    } position-absolute bg-white border border-warning p-2 alert rounded-corner`}
                  >
                    Password is required
                  </div>
                </div>
              </div>
              <button className="btn-forms form-control rounded-pill my-4">Sign Up</button>
              <div
                className={`${
                  alert ? "d-inline" : "d-none"
                } position-absolute end-0 bg-white border border-warning p-2 alert rounded-corner`}
              >
                There are some required fields, that need to be filled
              </div>
            </form>
            <p className="proxima-nova-regular darkgreen text-center">
              Already have an account?
              <Link to="/login" className="forms-link proxima-nova-bold text-decoration-none ms-1">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
