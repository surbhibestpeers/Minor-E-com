import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { add_cart } from "./Redux/actions/actions";
import Model from "./Model";
import { get_cart, update_cart } from "./Redux/actions/actions";

const Cards = () => {
  const [data, setData] = useState([]);
  const [record, setRecord] = useState("");
  const [display, setDisplay] = useState(false);

  const getdata = useSelector((state) => state.cartreducer.carts);

  const products = () => {
    axios
      .get("http://localhost:8000/api/product/all")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    products();
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_cart());
  }, [dispatch]);

  const increment = (e) => {
    let getdatas = getdata.map((item) =>
      e === item._id
        ? { ...item, qty: item.qty + (item.qty < 10 ? 1 : 0) }
        : item
    );

    //console.log(cart)
    console.log(e, getdatas);
    dispatch(update_cart(e, getdatas));
  };

  const send = (e, id) => {
    let d = e;
    d.user_id = id;

    if (getdata.find((x) => x.product_id === e.product_id)) {
      let newData = getdata.find((x) => x.product_id === e.product_id);
      increment(newData._id);
    } else {
      dispatch(add_cart(e));
    }
  };

  const show = (e) => {
    setRecord(e);
    setDisplay(true);
  };

  const loggedInUser = localStorage.getItem("userrecord");
  if (loggedInUser) {
    var userid = JSON.parse(localStorage.getItem("userrecord")).user;
  }

  useEffect(() => {}, [loggedInUser]);

  //console.log(window.localStorage.getItem("userrecord"));

  return (
    <div className="card_main">
      <div className="card_1">
        {data.length > 0 ? (
          data.map((element, index) => {
            return (
              <div className="size" key={index}>
                <Card className="card_style">
                  <Card.Img
                    variant="top"
                    src={element.file}
                    style={{ height: "10rem", width: "5rem", margin: "auto" }}
                    className="mt-3 style_image"
                    onClick={() => show(element)}
                  />
                  <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>Price : ₹ {element.price}</Card.Text>
                    <div>
                      <button
                        onClick={() => send(element, userid._id)}
                        className="white_btn_1"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })
        ) : (
          <div className="no-data">No Data to Show</div>
        )}
      </div>

      {display ? <Model data={record} /> : ""}
    </div>
  );
};

export default Cards;
