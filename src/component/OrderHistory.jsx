import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch} from "react-redux";
import { get_Order_detail } from "./Redux/actions/actions";

const OrderHistory = () => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const getOrder = useSelector((state) => state.cartreducer.orders);
  console.log(getOrder)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_Order_detail());
  }, [dispatch]); 


  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className="cart_head">
          <Offcanvas.Title>My Orders</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {getOrder.length > 0 ? (
            <>
              {getOrder.map((e, i) => {
                return (
                  <div key={i}
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
                   <hr/>
                  </div>
                </div>
                );
              })}
            </>
          ) : (
            <div className="display-cart">
              <p>Nothing in Order History</p>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OrderHistory;
