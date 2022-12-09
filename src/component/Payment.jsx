import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove_all } from "./Redux/actions/actions";

const Payment = () => {
  const [price, setPrice] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);

  const loggedInUser = localStorage.getItem("userrecord");
  if (loggedInUser) {
    var userid = JSON.parse(localStorage.getItem("userrecord")).user;
  }

  useEffect(() => {}, [loggedInUser]);

  useEffect(() => {
    if (getdata.length > 0) {
      const total = () => {
        let price = 0;
        getdata.map((ele) => {
          return (price = parseInt(ele.price) * ele.qty + parseInt(price));
        });
        setPrice(price);
      };
      total();
    }
  }, [getdata]);

  const onToken = (token) => {
    console.log(token);
    navigate("/");
    dispatch(remove_all(userid._id));
  };

  return (
    <div className="main_add">
      <div className="head_add">
        <h4>Payment</h4>
      </div>
      <div className="p_option">
        <h5>
          <b>Payment Options</b>
        </h5>
        <hr />
        <div>
          <input type="radio" name="pay" value="gpay" /> GooglePay
          <img src="./gpay.png" width="60" alt="gpay" style={{ marginLeft: "50px" }} />
        </div>
        <div>
          <input type="radio" name="pay" value="ppay" /> PhonePe
          <img src="./PhonePe.png" width="80" alt="phonepe" style={{ marginLeft: "50px" }} />
        </div>
        <div>
          <input type="radio" name="pay" value="upi" /> UPI
          <img src="./upi.webp" width="40" alt="upi" style={{ marginLeft: "100px" }} />
        </div>
      </div>

      <div
        style={{ display: "flex", alignItems: "flex-start", padding: "20px" }}
      >
        <StripeCheckout
          stripeKey="pk_test_51MCKgPSG9K2b6lDfYkwL24j9uKsvJgKeo6bPgkpI3HOrWxJqr7hFEtmDu67x8PXOxQJ562Wus8LayEYHTjMZsTKw00OIMlqtpP"
          name="shopday"
          token={onToken}
          billingAddress
          shippingAddress
          currency="inr"
          amount={price * 100}
        />
      </div>
    </div>
  );
};

export default Payment;
