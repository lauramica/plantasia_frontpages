import "../css/ProfileView.css";
function ProfileView() {
  return (
    <div>
      <div className="container mt-3">
        <h3 className="galadali-regular profile-title">Welcome to your profile</h3>
        <div className="form-div proxima-nova-regular">
          <div className="d-flex flex-column flex-md-row">
            <div className="input-group d-flex flex-column me-md-1 mb-2">
              <label className="label-info-user" htmlFor="firstName">
                First Name
              </label>
              <span className="info-user">Ghibli</span>
            </div>
            <div className="input-group d-flex flex-column w-md-50 ms-md-1 mb-2">
              <label className="label-info-user" htmlFor="lastName">
                Last Name
              </label>
              <span className="info-user">The Fatzo</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <div className="input-group d-flex flex-column mb-2 me-md-1">
              <label className="label-info-user" htmlFor="address">
                Address
              </label>
              <span className="info-user">Somewhere in Narnia</span>
            </div>
            <div className="input-group d-flex flex-column me-md-1 w-md-50 mx-md-1 mb-2">
              <label className="label-info-user" htmlFor="city">
                City
              </label>
              <span className="info-user">Gotham</span>
            </div>
            <div className="input-group d-flex flex-column me-md-1 w-md-50 mx-md-1 mb-2">
              <label className="label-info-user" htmlFor="city">
                Country
              </label>
              <span className="info-user">UK</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <div className="input-group d-flex flex-column justify-content-between w-md-50 me-md-1 mb-2 state-province">
              <label className="label-info-user" htmlFor="state">
                State / Province
              </label>
              <span className="info-user">Little Terror</span>
            </div>
            <div className="input-group d-flex flex-column justify-content-between w-md-50 ms-md-1 me-md-1 mb-2 postal-code">
              <label className="label-info-user" htmlFor="postalCode">
                Postal code
              </label>
              <span className="info-user">1234</span>
            </div>
            <div className="input-group d-flex flex-column ms-md-1 mb-1 phone">
              <label className="label-info-user" htmlFor="phone">
                Phone
              </label>
              <span className="info-user">09001711</span>
            </div>
          </div>
          <div className="d-flex flex-md-row mt-2">
            <button className="btn edit-info-button ms-auto">Edit Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
