import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {remove_cart,add_wishlist, get_cart, update_cart} from "./Redux/actions/actions";

const CartData = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);

  const [cart, setCart] = useState(getdata);
  const [price, setPrice] = useState("");

  console.log(cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_cart());
  }, [dispatch, cart]);

  const dlt = (e) => {
    console.log(e);
    dispatch(remove_cart(e));
    dispatch(get_cart());
  };

  const wish = (e) => {
    console.log(e);
    dispatch(add_wishlist(e));
    dispatch(remove_cart(e._id));
    dispatch(get_cart());
  };

  useEffect(() => {
    if (cart.length > 0) {
      const total = () => {
        let price = 0;
        cart.map((ele) => {
          return (price = parseInt(ele.price) * ele.qty + parseInt(price));
        });
        setPrice(price);
      };
      total();
    }
  }, [cart]);

  const increment = (e) => {
    setCart((cart) =>
      cart.map((item) =>
        e === item._id
          ? { ...item, qty: item.qty + (item.qty < 10 ? 1 : 0) }
          : item
      )
    );
    dispatch(update_cart(e, cart));
  };

  const decrement = (e) => {
    setCart((cart) =>
      cart.map((item) =>
        e === item._id
          ? { ...item, qty: item.qty - (item.qty > 1 ? 1 : 0) }
          : item
      )
    );
    dispatch(update_cart(e, cart));
  };

  return (
    <div>
      {cart.length > 0 ? (
        <>
          {cart.map((e, index) => {
            return (
              <div
                style={{
                  backgroundColor: "rgb(255, 249, 249)",
                  padding: "10px",
                }}
                key={index}
              >
                <div style={{ display: "flex" }}>
                  <img src={e.file} alt="cart_item" width="80" />
                  <div className="detail">
                    <p>{e.name}</p>
                    <p>M.R.P: &#8377; {e.price}/-</p>
                    <p>
                      Quantity:{" "}
                      <button
                        className="qty_btn"
                        onClick={() => decrement(e._id)}
                      >
                        -
                      </button>
                      {e.qty}
                      <button
                        className="qty_btn"
                        onClick={() => increment(e._id)}
                      >
                        +
                      </button>
                    </p>
                  </div>
                </div>
                <div className="cart_btn">
                  <button className="cbtn_1 " onClick={() => wish(e)}>
                    Move to Wishlist
                  </button>
                  <button className="cbtn_2 " onClick={() => dlt(e._id)}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div>
            <h4>Price Detail</h4>
            <div className="rate">
              <p>Price</p>₹ {price}
            </div>
            <div className="rate_1">
              <p>Discount</p>
              <p className="free">None</p>
            </div>
            <div className="rate_1">
              <p>Delivery</p>
              <p className="free">Free</p>
            </div>
            <hr />
            <div className="rate_1">
              <p>TOTAL AMOUNT</p>
              <p>₹ {price}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="display-cart">
          <p>cart is empty</p>
          {/* <iframe src="./empty-cart.mp4" width="300" height="480" frameBorder="0"  allowFullScreen></iframe> */}
          <img src="./cart.gif" alt="empty-jpg" width="200" height="200" />
        </div>
      )}
    </div>
  );
};

export default CartData;
