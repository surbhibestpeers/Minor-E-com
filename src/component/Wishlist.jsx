import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { add_cart, delete_wishlist, wishlist_get} from "./Redux/actions/actions";

const WishList = () => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const wishdata = useSelector((state) => state.cartreducer.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wishlist_get());
  }, [dispatch]);

  const moveCart = (e) => {
    console.log(e);
    dispatch(add_cart(e));
    dispatch(delete_wishlist(e.product_id));
    dispatch(wishlist_get());
  };

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className="cart_head">
          <Offcanvas.Title>My Wishlist</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {wishdata.length > 0 ? (
            <>
              {wishdata.map((e) => {
                return (
                  <div
                    style={{
                      backgroundColor: "rgb(255, 249, 249)",
                      padding: "10px",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <img src={e.file} alt="cart_item" width="80" />
                      <div className="detail">
                        <p>{e.name}</p>
                        <p>M.R.P: &#8377; {e.price}/-</p>
                      </div>
                      <button className="wish_btn " onClick={() => moveCart(e)}>
                        Move to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="display-cart">
              <p>Nothing in Wishlist</p>
              {/* <iframe src="./empty-cart.mp4" width="300" height="480" frameBorder="0"  allowFullScreen></iframe> */}
              <img src="./cart.gif" alt="empty-jpg" width="200" height="200" />
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default WishList;
