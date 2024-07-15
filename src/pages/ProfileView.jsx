import { useEffect } from "react";
import "../css/ProfileView.css";
import { logoutCustomer } from "../redux/customerSlice";
import { clearOrders } from "../redux/orderSlice";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

function ProfileView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedCustomer = useSelector((state) => state.customer);

  const handleSession = () => {
    dispatch(logoutCustomer());
    dispatch(clearCart());
    dispatch(clearOrders());
    return navigate("/login");
  };

  if (!loggedCustomer.token) {
    useEffect(() => {
      return navigate("/login");
    }, []);
  } else {
    return (
      loggedCustomer && (
        <div className="container mt-3 p-sm-0">
          <h3 className="galadali-regular profile-title">Welcome to your profile</h3>
          <div className="form-div proxima-nova-regular mb-3">
            <div className="d-flex flex-column flex-md-row">
              <div className="input-group d-flex flex-column me-md-1 mb-2">
                <label className="label-info-user" htmlFor="firstName">
                  First Name
                </label>
                <span className="info-user">{loggedCustomer.firstname}</span>
              </div>
              <div className="input-group d-flex flex-column w-md-50 ms-md-1 mb-2">
                <label className="label-info-user" htmlFor="lastName">
                  Last Name
                </label>
                <span className="info-user">{loggedCustomer.lastname}</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row">
              <div className="input-group d-flex flex-column mb-2 me-md-1">
                <label className="label-info-user" htmlFor="address">
                  Address
                </label>
                <span className="info-user">{loggedCustomer.address?.address ?? "Adress"}</span>
              </div>
              <div className="input-group d-flex flex-column me-md-1 w-md-50 mx-md-1 mb-2">
                <label className="label-info-user" htmlFor="city">
                  City
                </label>
                <span className="info-user">{loggedCustomer.address?.city ?? "City"}</span>
              </div>
              <div className="input-group d-flex flex-column me-md-1 w-md-50 mx-md-1 mb-2">
                <label className="label-info-user" htmlFor="city">
                  Country
                </label>
                <span className="info-user">{loggedCustomer.address?.country ?? "Country"}</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row">
              <div className="input-group d-flex flex-column justify-content-between w-md-50 me-md-1 mb-2 state-province">
                <label className="label-info-user" htmlFor="state">
                  State / Province
                </label>
                <span className="info-user">
                  {loggedCustomer.address?.state ?? "State/Province"}
                </span>
              </div>
              <div className="input-group d-flex flex-column justify-content-between w-md-50 ms-md-1 me-md-1 mb-2 postal-code">
                <label className="label-info-user" htmlFor="postalCode">
                  Postal Code
                </label>
                <span className="info-user">
                  {loggedCustomer.address?.postalcode ?? "Postal Code"}
                </span>
              </div>
              <div className="input-group d-flex flex-column ms-md-1 mb-1 phone">
                <label className="label-info-user" htmlFor="phone">
                  Phone
                </label>
                <span className="info-user">{loggedCustomer.phone}</span>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <Link to="/orders" className="profile-view-orders align-self-center">
                View Orders
              </Link>
              <Link to="/edit-user" className="btn edit-info-button">
                Edit Info
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-start mb-3">
            <button className="profile-logout" onClick={handleSession}>
              <i className="bi bi-box-arrow-left me-2"></i>Logout
            </button>
          </div>
        </div>
      )
    );
  }
}

export default ProfileView;
