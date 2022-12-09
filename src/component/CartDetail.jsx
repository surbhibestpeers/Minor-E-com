import React, { useState} from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartData from "./CartData";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartDetail = () => {

  const getdata = useSelector((state) => state.cartreducer.carts);

  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className="cart_head">
          <Offcanvas.Title>My Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartData />
          {getdata.length > 0 ? (
            <button className="place" onClick={() => navigate("/chooseadd")}>
              Place Order
            </button>
          ) : (
            ""
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartDetail;
