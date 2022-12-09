import React, { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_Address } from "./Redux/actions/actions";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#2b7466",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#2b7466",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#2b7466",
    },
    "&:hover fieldset": {
      borderColor: "#2b7466",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2b7466",
    },
    "& label": {
      color: "#2b7466",
    },
  },
});

const Address = () => {
  const navigate = useNavigate();
  const [addressInfo, setAddressInfo] = useState({
    name: "",
    phone: "",
    pincode: "",
    state: "",
    city: "",
    house: "",
    area: "",
    type: "",
  });

  const dispatch = useDispatch();

  const loggedInUser = localStorage.getItem("userrecord");
  if (loggedInUser) {
    var userid = JSON.parse(localStorage.getItem("userrecord")).user;
  }

  useEffect(() => {}, [loggedInUser]);

  const handleChange = (event) => {
    setAddressInfo({ ...addressInfo, [event.target.name]: event.target.value });
  };

  const handleSave = (e, id) => {
    // event.preventDefault();
    let d = e;
    d.user_id = id;
    dispatch(add_Address(e));

    console.log(e);
    navigate("/chooseadd");
  };

  return (
    <div className="main_add">
      <div className="head_add">
        {" "}
        <h4>Add delivery address</h4>
      </div>
      <form className="form_add ">
        <CssTextField
          className="textField"
          label="Full Name (Required)*"
          value={addressInfo.name}
          name="name"
          onChange={(event) => handleChange(event)}
        />
        <CssTextField
          label="Phone number (Required)*"
          className="textField"
          value={addressInfo.phone}
          name="phone"
          onChange={handleChange}
        />

        <CssTextField
          label="Pincode (Required)*"
          className="textField"
          value={addressInfo.pincode}
          name="pincode"
          onChange={(event) => handleChange(event)}
        />
        <CssTextField
          label="State (Required)*"
          className="textField"
          value={addressInfo.state}
          name="state"
          onChange={(event) => handleChange(event)}
        />

        <CssTextField
          label="City (Required)*"
          className="textField"
          value={addressInfo.city}
          name="city"
          onChange={(event) => handleChange(event)}
        />
        <CssTextField
          label="House No., Building Name (Required)*"
          className="textField"
          name="house"
          value={addressInfo.house}
          onChange={(event) => handleChange(event)}
        />
        <CssTextField
          label="Road name, Area, Colony (Required)*"
          style={{ width: "84%" }}
          className="textField"
          value={addressInfo.area}
          name="area"
          onChange={(event) => handleChange(event)}
        />

        <p className="text_add">Type of address </p>
        <div className="but_add">
          <div>
            <input
              type="radio"
              value="home"
              name="type"
              onChange={(event) => handleChange(event)}
            />{" "}
            <AiFillHome /> Home
          </div>

          <div className="office">
            <input
              type="radio"
              value="office"
              name="type"
              onChange={(event) => handleChange(event)}
            />{" "}
            <FaBuilding />
            Office
          </div>
        </div>
        <button
          className="save_add"
          onClick={() => handleSave(addressInfo, userid._id)}
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default Address;
