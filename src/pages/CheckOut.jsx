import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "../css/CheckOut.css";
import "../css/Loader.css";
import CheckOutItem from "../components/CheckOutItem";
import { createOrder } from "../redux/orderSlice";

function CheckOut() {
  const [modalState, setModalState] = useState(false);
  const [orderState, setOrderState] = useState(false);
  const [newOrder, setNewOrder] = useState({
    total_price: 15.0,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  //   const customer = useSelector((state) => state.customer);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTcyMDU2Njc3Mn0.GQPEuIZCcTEKClUTiDo6o31JwAxqjkjvwJtYkYRRxrY";

  //   useEffect(() => {
  //     setNewOrder({ ...newOrder, total_price: 0 });
  //     const totalPrice = () => {
  //       for (const product of cart) {
  //         setNewOrder({
  //           ...newOrder,
  //           total_price: newOrder.total_price
  //             ? newOrder.total_price + Number(product.price) * product.quantity
  //             : Number(product.price) * product.quantity,
  //         });
  //       }
  //     };
  //     totalPrice();
  //     console.log(newOrder.total_price);
  //   }, [cart]);

  useEffect(() => {
    setNewOrder({
      ...newOrder,
      products: cart.map((product) => {
        return {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: product.quantity,
          type: product.typeId,
        };
      }),
    });
  }, [cart]);

  const handleSubmit = async () => {
    if (!token) {
      return navigate("/login");
    }
    handleModalToggle();
    const storeOrder = await axios({
      url: `${import.meta.env.VITE_API_URL}/orders/create`,
      method: "POST",
      data: { ...newOrder },
      headers: { Authorization: `Bearer ${token}` },
    });
    setNewOrder({ ...newOrder, id: storeOrder.data.id });
    dispatch(createOrder(newOrder));
  };

  const handleModalToggle = () => {
    modalState ? setModalState(false) : setModalState(true);
  };

  /*  useEffect(() => {
    if (modalState) {
      setOrderState(false);
      const getOrder = async () => {
        const order = await axios();
      };
    }
  }, [modalState]); */

  return (
    <div className="checkout">
      {modalState && (
        <div className="purchasing-modal">
          <div className="block shadow p-5 position-relative">
            <h3 className="proxima-nova-bold darkgreen mb-5">
              {orderState ? "We are processing your order" : "Order succesfully processed"}
            </h3>
            {orderState ? (
              <span className="flower-loader"></span>
            ) : (
              <>
                <i
                  className="bi bi-x position-absolute top-0 end-0 fs-2 p-2 almond"
                  onClick={() => handleModalToggle()}
                ></i>
                <div className="links">
                  <Link to={"/products"} className="continue proxima-nova-regular darkgreen fs-5">
                    ← Continue Shopping
                  </Link>
                  <Link to={`/order/${newOrder.id}`} className="shadow proxima-nova-regular">
                    Go to order
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <div className="container px-sm-0 py-3">
        <h1 className="galadali-bold darkgreen mb-3">Hi! This is your shopping cart.</h1>
        <table className="table">
          <thead className="galadali-regular fs-4">
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="align-top proxima-nova-regular fs-5">
            {cart.map((product) => (
              <tr key={product.id}>
                <CheckOutItem product={product} />
              </tr>
            ))}
            <tr>
              <td colSpan={2}>
                <p className="darkgreen m-0 d-flex flex-column d-md-inline">
                  <span className="proxima-nova-bold me-1">Subtotal</span>
                  <span className="proxima-nova-regular">(Including Taxes)</span>
                </p>
              </td>
              <td>
                <p className="proxima-nova-regular darkgreen m-0">${newOrder.total_price}</p>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <div className="d-flex flex-column">
                  <label htmlFor="order-notes" className="proxima-nova-bold darkgreen mb-2">
                    Order notes
                  </label>
                  <textarea
                    rows={3}
                    name="order-notes"
                    id="order-notes"
                    className="mb-2 p-2 rounded-corner"
                  ></textarea>
                  <div className="mb-2">
                    <input
                      type="checkbox"
                      name="personal-message"
                      id="personal-message"
                      className="checkbox me-1"
                    />
                    <label htmlFor="personal-message" className="proxima-nova-bold darkgreen me-1">
                      Personal Message
                    </label>
                    <span className="proxima-nova-regular darkgreen">($15.00 excluding Taxes)</span>
                  </div>
                  <p className="proxima-nova-bold darkgreen m-0">+ Add a discount code</p>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <p className="proxima-nova-bold darkgreen m-0">Total</p>
              </td>
              <td>
                <p className="proxima-nova-regular darkgreen m-0">${newOrder.total_price}</p>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <p className="proxima-nova-bold darkgreen m-0 mb-3">Shipping Information</p>
                <div className="d-flex flex-column flex-md-row">
                  <div className="input-group d-flex flex-column me-md-1 mb-2 first-name">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Type your first name"
                      className="mt-1 p-1"
                      value={newOrder.buyer?.firstname ?? ""}
                      onChange={(e) =>
                        setNewOrder({
                          ...newOrder,
                          buyer: { ...newOrder.buyer, firstname: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="input-group d-flex flex-column w-md-50 ms-md-1 mb-2 last-name">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Type your last name"
                      className="mt-1 p-1"
                      value={newOrder.buyer?.lastname ?? ""}
                      onChange={(e) =>
                        setNewOrder({
                          ...newOrder,
                          buyer: { ...newOrder.buyer, lastname: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row">
                  <div className="input-group d-flex flex-column mb-2 me-md-1 address">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Type your address"
                      className="mt-1 p-1"
                      value={newOrder.order_address?.address ?? ""}
                      onChange={(e) =>
                        setNewOrder({
                          ...newOrder,
                          order_address: { ...newOrder.order_address, address: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="input-group d-flex flex-column me-md-1 w-md-50 mx-md-1 mb-2 city">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Type your city"
                      className="mt-1 p-1"
                      value={newOrder.order_address?.city ?? ""}
                      onChange={(e) =>
                        setNewOrder({
                          ...newOrder,
                          order_address: { ...newOrder.order_address, city: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="input-group d-flex flex-column justify-content-between w-md-50 me-md-1 mb-2 state-province">
                    <label htmlFor="state">State / Province</label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Type your state/province"
                      className="mt-1 p-1"
                      value={newOrder.order_address?.state ?? ""}
                      onChange={(e) =>
                        setNewOrder({
                          ...newOrder,
                          order_address: { ...newOrder.order_address, state: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row">
                  <div className="input-group d-flex flex-column ms-md-1 w-md-50 ms-md-1 mb-2 country">
                    <label htmlFor="country">Country</label>
                    <select
                      className="mt-1 p-1 w-100"
                      id="country"
                      defaultValue={newOrder.order_address?.country ?? ""}
                      onChange={(e) =>
                        setNewOrder({
                          ...newOrder,
                          order_address: { ...newOrder.order_address, country: e.target.value },
                        })
                      }
                    >
                      <option>Select a Country</option>
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
                  <div className="input-group d-flex flex-column justify-content-between w-md-50 ms-md-1 me-md-1 mb-2 postal-code">
                    <label htmlFor="postalCode">Postal code</label>
                    <input
                      type="text"
                      name="postalCode"
                      id="postalCode"
                      placeholder="Type your postal code"
                      className="mt-1 p-1"
                      value={newOrder.order_address?.postalcode ?? ""}
                      onChange={(e) =>
                        setNewOrder({
                          ...newOrder,
                          order_address: { ...newOrder.order_address, postalcode: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="input-group d-flex flex-column ms-md-1 mb-1 phone">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Type your phone"
                      className="mt-1 p-1"
                      value={newOrder.buyer?.phone ?? ""}
                      onChange={(e) =>
                        setNewOrder({
                          ...newOrder,
                          buyer: { ...newOrder.buyer, phone: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <p className="proxima-nova-bold darkgreen m-0 mb-3">Payment</p>
                <div className="d-flex align-items-center mb-2">
                  <input
                    type="radio"
                    name="paymentOptions"
                    id="creditCard"
                    className="radioBtn me-2"
                    value="creditCard"
                    onChange={(e) =>
                      setNewOrder({
                        ...newOrder,
                        payment: e.target.value,
                      })
                    }
                  />
                  <label className="me-3" htmlFor="creditCard">
                    Credit card
                  </label>
                  <input
                    type="radio"
                    name="paymentOptions"
                    id="payPal"
                    className="radioBtn me-2"
                    value="payPal"
                    onChange={(e) =>
                      setNewOrder({
                        ...newOrder,
                        payment: e.target.value,
                      })
                    }
                  />
                  <label className="me-3" htmlFor="payPal">
                    PayPal
                  </label>
                  <input
                    type="radio"
                    name="paymentOptions"
                    id="eTransfer"
                    className="radioBtn me-2"
                    value="eTransfer"
                    onChange={(e) =>
                      setNewOrder({
                        ...newOrder,
                        payment: e.target.value,
                      })
                    }
                  />
                  <label className="me-3" htmlFor="eTransfer">
                    eTransfer
                  </label>
                </div>
                <div className="d-flex flex-column flex-md-row">
                  <div className="d-flex flex-column flex-md-row card-data-one">
                    <div className="input-group d-flex flex-column justify-content-between me-md-1 mb-2">
                      <label htmlFor="cardNumber">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        placeholder="Type your card number"
                        className="mt-1 p-1"
                      />
                    </div>
                    <div className="input-group d-flex flex-column justify-content-between ms-md-1 me-md-1 mb-2">
                      <label htmlFor="cardHolder">Card Holder</label>
                      <input
                        type="text"
                        name="cardHolder"
                        id="cardHolder"
                        placeholder="Type your card holder"
                        className="mt-1 p-1"
                      />
                    </div>
                  </div>
                  <div className="d-flex card-data-two">
                    <div className="input-group d-flex flex-column justify-content-between ms-md-1 me-1 mb-2">
                      <label htmlFor="expirationDate">Expiration Date (MM/YY)</label>
                      <input
                        type="text"
                        name="expirationDate"
                        id="expirationDate"
                        placeholder="Type your expiration date"
                        className="mt-1 p-1"
                      />
                    </div>
                    <div className="input-group d-flex flex-column justify-content-between ms-1 mb-2">
                      <label htmlFor="cvc">CVC</label>
                      <input
                        type="text"
                        name="cvc"
                        id="cvc"
                        placeholder="Type your cvc code"
                        className="mt-1 p-1"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-between">
          <div>
            <Link to="/products" className="proxima-nova-regular mediumgreen go-back fs-5">
              ← Continue Shopping
            </Link>
          </div>
          <button className="form-button rounded-pill mb-2 shadow" onClick={handleSubmit}>
            Continue to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
