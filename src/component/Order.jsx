import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { get_Address } from "./Redux/actions/actions";

import CartData from "./CartData";

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addId = window.localStorage.getItem("deliver");

  const getAdd = useSelector((state) => state.cartreducer.address);

  const result = getAdd.find((obj) => obj._id == addId);

  const newResult = [result];
  console.log(newResult);

  useEffect(() => {
    dispatch(get_Address());
  }, [dispatch]);

  return (
    <div className="main_add">
      <div className="head_add">
        <h4>Order Summary</h4>
      </div>
      <div>
        <div className="deliver">
          <b>Deliver to: </b>
          <button
            onClick={() => navigate("/chooseadd")}
            className="deliver_btn"
          >
            Change
          </button>
        </div>
        {newResult.length > 0 ? (
          <>
            {newResult.map((ele) => {
              return (
                <div className="o_add">
                  <div style={{ display: "flex" }}>
                    <b>{ele.name}</b>{" "}
                    <p style={{ color: "grey", marginLeft: "10px" }}>
                      {ele.type}
                    </p>
                  </div>

                  <div>
                    {ele.house} {ele.area} {ele.city} {ele.pincode}
                  </div>
                  <p>{ele.phone}</p>
                </div>
              );
            })}
          </>
        ) : (
          <p className="add_new" onClick={() => navigate("/address")}>
            + Add new address
          </p>
        )}
      </div>

      <div className="order-cart">
        <CartData />
      </div>
      <div>
        <button className="save_add_1" onClick={() => navigate("/payment")}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Order;
