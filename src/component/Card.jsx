import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add_cart } from "./Redux/actions/actions";
import { get_cart, update_cart } from "./Redux/actions/actions";
import { TextField } from "@mui/material";
import Model from "./Model";
import axios from "axios";
import "./styles.css";

const Cards = () => {
  const [data, setData] = useState([]);
  const [record, setRecord] = useState("");
  const [display, setDisplay] = useState(false);
  const [searchProduct, setSearchProduct]= useState('');

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
  // let arr = [];

  //console.log(window.localStorage.getItem("userrecord"));
  // {
  //   data.map((e) => {
  //     return arr.push(e.brand);
  //   });
  // }

  let uniqueBrand = [ "vivo", "samsung", "realme", "redmi", "oneplus" ];

  const lowtohigh = () => {
    const priceltoh = [...data].sort((a, b) => a.price - b.price);
    setData(priceltoh);
  };

  const hightolow = () => {

    const pricelhtl = [...data].sort((a, b) => a.price - b.price).reverse();
    setData(pricelhtl);
  };

  let newValue = []
  const filterByBrand = val => {
     newValue.push(val)
     console.log(newValue)
    // let values = newValue
     let result =  data.filter(e => e.brand === val)
     setData(result)
  }
  const handleSearch=(event)=> {
    setSearchProduct(event)
    setData(newRecord)
  }

   let newRecord = data.filter((value) => { 
      if (searchProduct === "") {
        return value;
      } else if (
        value.name.toLowerCase().includes(searchProduct.toLowerCase()) 
      ) {
        return value;
      } else if (
        value.brand
          .toLowerCase()
          .includes(searchProduct.toLowerCase())
      ) {
        return value;
      }
    })

  // const handleSearch = (event) => {
   
  //   const query = event.target.value;
    
  //   let updatedList = [...data];
   
  //   updatedList = updatedList.filter((item) => {
  //     return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  //   });
  
  //   setData(updatedList);
  // };

  return (
    <div className="card_main">
      <div style={{ display: "flex" }}>
        <div className="filter_cart">
          <h4>Filter Products</h4>

          <div>
            <TextField
              style={{ display: "flex", justifyContent: "flex-start" }}
              id="standard-search"
              label="Search"
              type="search"
              variant="standard"
              onChange={(event)=>handleSearch(event.target.value)}
            />
          </div>

          <div className="brand">
            <h5>Brands</h5>

            {uniqueBrand.map((e, i) => {
              return (
                <div key={i} className="check_brand">
                  <input
                    className="input_brand"
                    onChange={(e)=>filterByBrand(e.target.value)}
                    value={e}
                    type="checkbox"
                    // onChange={(event) => setSelectedBrand(event.target.value)}
                  />
                  <p className="i_brand">{e}</p>
                </div>
              );
            })}
          </div>

          <div className="brand">
            <h5>Price</h5>
            <div className="check_brand">
              <input
                className="input_brand"
                type="checkbox"
                onClick={hightolow}
              />
              <p className="i_brand">High to Low</p>
            </div>
            <div className="check_brand">
              <input
                className="input_brand"
                type="checkbox"
                onClick={lowtohigh}
               />{" "}
              <p className="i_brand">Low to High</p>
            </div>
          </div>
        </div>
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
      </div>

      {display ? <Model data={record} /> : ""}
    </div>
  );
};

export default Cards;
