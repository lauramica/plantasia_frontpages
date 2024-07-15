import "../css/EditUser.css";

import { useDispatch, useSelector } from "react-redux";
import { logoutCustomer, updateCustomer } from "../redux/customerSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EditUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedCustomer = useSelector((state) => state.customer);
  const [updateValues, setUpdateValues] = useState({
    firstname: "",
    lastname: "",
    address: {
      address: "",
      state: "",
      city: "",
      country: "",
      postalcode: "",
    },
    phone: "",
  });

  useEffect(() => {
    const { firstname, lastname, address, phone } = loggedCustomer;
    setUpdateValues({ firstname, lastname, address, phone });
  }, []);

  const handleUpdateCustomer = async (e) => {
    e.preventDefault();
    await axios({
      url: `${import.meta.env.VITE_API_URL}/customers/${loggedCustomer.id}`,
      method: "POST",
      data: { ...updateValues },
      headers: { Authorization: `Bearer ${loggedCustomer.token}` },
    });
    dispatch(updateCustomer(updateValues));
    return navigate("/profile");
  };

  const handleDeleteCustomer = async () => {
    await axios({
      url: `${import.meta.env.VITE_API_URL}/customers/${loggedCustomer.id}/delete`,
      method: "GET",
      headers: { Authorization: `Bearer ${loggedCustomer.token}` },
    });
    dispatch(logoutCustomer());
    return navigate("/");
  };

  return (
    <div className="container mt-3 p-sm-0">
      <h3 className="galadali-regular title-admin-user">Account Settings</h3>
      <form onSubmit={handleUpdateCustomer} className="form-div proxima-nova-regular mb-3">
        <div className="d-flex flex-column flex-md-row">
          <div className="input-group d-flex flex-column me-md-1 mb-2">
            <label className="label-form" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Type your first name"
              className="mt-1 p-1 input-form"
              value={updateValues.firstname}
              onChange={(e) => setUpdateValues({ ...updateValues, firstname: e.target.value })}
            />
          </div>
          <div className="input-group d-flex flex-column w-md-50 ms-md-1 mb-2">
            <label className="label-form" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Type your last name"
              className="mt-1 p-1 input-form"
              value={updateValues.lastname}
              onChange={(e) => setUpdateValues({ ...updateValues, lastname: e.target.value })}
            />
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row">
          <div className="input-group d-flex flex-column mb-2 me-md-1">
            <label className="label-form" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Type your address"
              className="mt-1 p-1 input-form"
              value={updateValues.address?.address ?? ""}
              onChange={(e) =>
                setUpdateValues({
                  ...updateValues,
                  address: { ...updateValues.address, address: e.target.value },
                })
              }
            />
          </div>
          <div className="input-group d-flex flex-column me-md-1 w-md-50 mx-md-1 mb-2">
            <label className="label-form" htmlFor="city">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Type your city"
              className="mt-1 p-1 input-form"
              value={updateValues.address?.city ?? ""}
              onChange={(e) =>
                setUpdateValues({
                  ...updateValues,
                  address: { ...updateValues.address, city: e.target.value },
                })
              }
            />
          </div>
          <div className="input-group d-flex flex-column ms-md-1 w-md-50 ms-md-1 mb-2">
            <label className="label-form" htmlFor="country">
              Country
            </label>
            <select
              className="mt-1 p-1 w-100 select-form"
              value={updateValues.address?.country ?? ""}
              onChange={(e) =>
                setUpdateValues({
                  ...updateValues,
                  address: { ...updateValues.address, country: e.target.value },
                })
              }
            >
              <option value="">Select your country</option>
              <option value="AF">Afghanistan</option>
              <option value="AX">Åland Islands</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia, Plurinational State of</option>
              <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo, the Democratic Republic of the</option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="CI">Côte d'Ivoire</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CW">Curaçao</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (Malvinas)</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard Island and McDonald Islands</option>
              <option value="VA">Holy See (Vatican City State)</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran, Islamic Republic of</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IM">Isle of Man</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KP">Korea, Democratic People's Republic of</option>
              <option value="KR">Korea, Republic of</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Lao People's Democratic Republic</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macao</option>
              <option value="MK">Macedonia, the former Yugoslav Republic of</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia, Federated States of</option>
              <option value="MD">Moldova, Republic of</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestinian Territory, Occupied</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="RE">Réunion</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation</option>
              <option value="RW">Rwanda</option>
              <option value="BL">Saint Barthélemy</option>
              <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="MF">Saint Martin (French part)</option>
              <option value="PM">Saint Pierre and Miquelon</option>
              <option value="VC">Saint Vincent and the Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SX">Sint Maarten (Dutch part)</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="GS">South Georgia and the South Sandwich Islands</option>
              <option value="SS">South Sudan</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
              <option value="SZ">Swaziland</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syrian Arab Republic</option>
              <option value="TW">Taiwan, Province of China</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania, United Republic of</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="UM">United States Minor Outlying Islands</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela, Bolivarian Republic of</option>
              <option value="VN">Viet Nam</option>
              <option value="VG">Virgin Islands, British</option>
              <option value="VI">Virgin Islands, U.S.</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row">
          <div className="input-group d-flex flex-column justify-content-between w-md-50 me-md-1 mb-2 state-province">
            <label className="label-form" htmlFor="state">
              State / Province
            </label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Type your state/province"
              className="mt-1 p-1 input-form"
              value={updateValues.address?.state ?? ""}
              onChange={(e) =>
                setUpdateValues({
                  ...updateValues,
                  address: { ...updateValues.address, state: e.target.value },
                })
              }
            />
          </div>
          <div className="input-group d-flex flex-column justify-content-between w-md-50 ms-md-1 me-md-1 mb-2 postal-code">
            <label className="label-form" htmlFor="postalCode">
              Postal code
            </label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              placeholder="Type your postal code"
              className="mt-1 p-1 input-form"
              value={updateValues.address?.postalcode ?? ""}
              onChange={(e) =>
                setUpdateValues({
                  ...updateValues,
                  address: { ...updateValues.address, postalcode: e.target.value },
                })
              }
            />
          </div>
          <div className="input-group d-flex flex-column ms-md-1 mb-1 phone">
            <label className="label-form" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Type your phone"
              className="mt-1 p-1 input-form"
              value={updateValues.phone}
              onChange={(e) => setUpdateValues({ ...updateValues, phone: e.target.value })}
            />
          </div>
        </div>
        <div className="d-flex flex-md-row mt-2">
          <button className="btn confirm-button ms-auto">Confirm</button>
        </div>
      </form>
      <div className="mb-3">
        <button
          className="profile-delete me-auto border-0 bg-white p-0"
          onClick={handleDeleteCustomer}
        >
          <i className="bi bi-trash3 me-2"></i>Delete account
        </button>
      </div>
    </div>
  );
}

export default EditUser;
