import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove_all, add_to_orders } from "./Redux/actions/actions";

const Payment = () => {
  const [price, setPrice] = useState("");
  const [gshow, setGshow]= useState(false)
  const [pshow, setPshow]= useState(false)
  const [ushow, setUshow]= useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);

  const getOrder = useSelector((state) => state.cartreducer.orders);
  console.log(getOrder)

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
    savetohistory()
    dispatch(remove_all(userid._id));
  };

  const savetohistory=()=> {
    getdata.map((ele)=> {
      return(
        dispatch(add_to_orders(ele))
      )
    })
  }

  const handleGshow=()=> {
    setGshow(true)
    setPshow(false)
    setUshow(false)
  }

  const handlePshow=()=> {
    setPshow(true)
    setGshow(false)
    setUshow(false)
  }
  const handleUshow=()=> {
    setUshow(true)
    setPshow(false)
    setGshow(false)
  }
   

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
        <div style={{display:'flex'}}>
        <div>
        <div>
          <input type="radio" name="pay" value="gpay" onClick={handleGshow}/> GooglePay
          <img src="./gpay.png" width="60" alt="gpay" style={{ marginLeft: "50px" }} />  
        </div>
        <div>
          <input type="radio" name="pay" value="ppay" onClick={handlePshow}/> PhonePe
          <img src="./PhonePe.png" width="80" alt="phonepe" style={{ marginLeft: "50px" }} />
        </div>
        <div>
          <input type="radio" name="pay" value="upi" onClick={handleUshow}/> UPI
          <img src="./upi.webp" width="40" alt="upi" style={{ marginLeft: "100px" }} />
        </div>
        </div>
        {gshow ?  <img src="./gpay.jpg" width="100" alt="upi" style={{ marginLeft: "100px" }} /> : " "}
        {pshow ?  <img src="./ppay.jpeg" width="100" alt="upi" style={{ marginLeft: "100px" }} /> : " "}
        {ushow ?  <div className="upi_block">
                  <p>Enter UPI ID</p>
                  <input className="upi_input"/>
        </div>  : " "}
        
        </div>
      </div>
      <hr/>
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
