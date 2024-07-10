import { useEffect } from "react";
import "../css/ProfileView.css";
import { logoutCustomer } from "../redux/customerSlice";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

function ProfileView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedCustomer = useSelector((state) => state.customer);

  const handleSession = () => {
    dispatch(logoutCustomer());
    return navigate("/login");
  };

  if (!loggedCustomer.token) {
    useEffect(() => {
      return navigate("/login");
    }, []);
  } else {
    return (
      loggedCustomer && (
        <div>
          <div className="container mt-3">
            <h3 className="galadali-regular profile-title">Welcome to your profile</h3>
            <div className="form-div proxima-nova-regular">
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
                  <span className="info-user">{loggedCustomer.address?.address ?? ""}</span>
                </div>
                <div className="input-group d-flex flex-column me-md-1 w-md-50 mx-md-1 mb-2">
                  <label className="label-info-user" htmlFor="city">
                    City
                  </label>
                  <span className="info-user">{loggedCustomer.address?.city ?? ""}</span>
                </div>
                <div className="input-group d-flex flex-column me-md-1 w-md-50 mx-md-1 mb-2">
                  <label className="label-info-user" htmlFor="city">
                    Country
                  </label>
                  <span className="info-user">{loggedCustomer.address?.country ?? ""}</span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row">
                <div className="input-group d-flex flex-column justify-content-between w-md-50 me-md-1 mb-2 state-province">
                  <label className="label-info-user" htmlFor="state">
                    State / Province
                  </label>
                  <span className="info-user">{loggedCustomer.address?.state ?? ""}</span>
                </div>
                <div className="input-group d-flex flex-column justify-content-between w-md-50 ms-md-1 me-md-1 mb-2 postal-code">
                  <label className="label-info-user" htmlFor="postalCode">
                    Postal code
                  </label>
                  <span className="info-user">{loggedCustomer.address?.postalcode ?? ""}</span>
                </div>
                <div className="input-group d-flex flex-column ms-md-1 mb-1 phone">
                  <label className="label-info-user" htmlFor="phone">
                    Phone
                  </label>
                  <span className="info-user">{loggedCustomer.phone}</span>
                </div>
              </div>
              <div className="d-flex flex-md-row mt-2">
                <Link to="/edit-user" className="btn edit-info-button me-auto">
                  Edit Info
                </Link>
                <button className="btn edit-info-button ms-auto" onClick={handleSession}>
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default ProfileView;
