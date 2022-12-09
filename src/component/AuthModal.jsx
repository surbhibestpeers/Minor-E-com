import React, { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { login, registration } from "./Redux/actions/authAction";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const AuthModal = (props) => {
  const [registers, setRegistors] = useState(false);

  const { register, handleSubmit, reset, formState: { errors }} = useForm();

  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (data) => {
    dispatch(registration(data));
    setRegistors(false);
    reset();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password,
    };
    dispatch(login(userData));
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {registers ? (
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Registor User
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="signUp_main">
                <div className="input_position">
                  <p>First Name:</p>
                  <input
                    className="input_auth"
                    {...register("firstname", {
                      required: true,
                      pattern: /^[a-zA-Z ]*$/,
                    })}
                  />
                  {errors.firstname && errors.firstname.type === "required" && (
                    <p className="errorMsg">First Name is required.</p>
                  )}
                </div>
                <div className="input_position">
                  <p>Last Name:</p>
                  <input
                    className="input_auth"
                    {...register("lastname", {
                      required: true,
                      pattern: /^[a-zA-Z ]*$/,
                    })}
                  />
                  {errors.lastname && errors.lastname.type === "required" && (
                    <p className="errorMsg"> Last Name is required.</p>
                  )}
                </div>
                <div className="input_position">
                  <p>Email:</p>
                  <input
                    className="input_auth"
                    {...register("email", {
                      required: true,
                      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p className="errorMsg">Email is required.</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="errorMsg">Email is not valid.</p>
                  )}
                </div>
                <div className="input_position">
                  <p>Password:</p>
                  <input
                    className="input_auth"
                    {...register("password", {
                      required: true,
                    })}
                  />
                  {errors.password && errors.password.type === "required" && (
                    <p className="errorMsg"> Password is required.</p>
                  )}
                </div>
              </Modal.Body>
              <Modal.Footer
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p>
                  Have Already An Account?{" "}
                  <b
                    onClick={() => setRegistors(!registers)}
                    style={{ cursor: "pointer" }}
                  >
                    Login
                  </b>
                </p>
                <button className="white_btn " type="submit">
                  Register
                </button>
              </Modal.Footer>
            </form>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmitForm}>
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Sign In User
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="signUp_main">
                <div className="input_position">
                  <p>Email:</p>
                  <input
                    className="input_auth"
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="input_position">
                  <p>Password:</p>
                  <input
                    className="input_auth"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                  />
                </div>

                {/* {error ? <div>"No User Found"</div>: ''} */}
              </Modal.Body>
              <Modal.Footer
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p>
                  New User?{" "}
                  <b
                    onClick={() => setRegistors(!registers)}
                    style={{ cursor: "pointer" }}
                  >
                    Register
                  </b>
                </p>
                <button className="white_btn " type="submit">
                  LogIn
                </button>
              </Modal.Footer>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AuthModal;
