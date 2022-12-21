import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { update_user } from "./Redux/actions/authAction";
import { useDispatch } from "react-redux";

const Password = (props) => {
  const loggedInUser = localStorage.getItem("userrecord");
  if (loggedInUser) {
    var data = JSON.parse(localStorage.getItem("userrecord")).user;
  }

  useEffect(() => {}, [loggedInUser]);


  const dispatch = useDispatch();

  const [user, setUser] = useState([data]);
  const [display, setDisplay] = useState(false);
  const [error, setError] = useState('')
  const [show, setShow]= useState(false)
  const [newpass, setNewPass]= useState('')
  const [msg,setMsg]= useState('')

  const onInputChange = (e) => {
    console.log(e)
    setUser({ ...user[0], [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
   };

  const handleUpdate = (id, user) => {
    dispatch(update_user(id, user));
    handleLogout()
  
  };
    
  const checkInput = (e) => {
       if(e.target.value === data.password) {
         setError("Password Matched")
         setShow(true)
       } else  {
        setError("Please Enter Valid Password")
       }
  };

  const onChangePassword=(e)=> {
    setNewPass(e.target.value)
  }

  const onConfirmPass = (e)=> {
        if(e.target.value === newpass) {
          setMsg("Password matched")
          console.log(e.target.value)
          onInputChange(e)
        } else {
          setMsg("Password does'nt match")
        }
  }

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="signUp_main">
          <>
            {display ? (
              <div style={{ display: "column" }}>
                <div>
                <div className="input_position">
                  <p>Old Password:</p>
                  <input
                    className="input_auth_1"
                    type="password"
                    name="oldPassword"
                    onChange={(e) => checkInput(e)}
                  />
                </div>
                <p className="err_password">{error}</p>
                </div>
                
                {show ? <>
                  <div className="input_position">
                  <p>New Password:</p>
                  <input
                    className="input_auth_1"
                    type="password"
                    name="checkpassword"
                    onChange={(e) => onChangePassword(e)}
                  />
                </div>
                  
                  <div>
                  <div className="input_position">
                  <p>Confirm Password:</p>
                  <input
                    className="input_auth_1"
                    type="password"
                    name="password"
                    onChange={(e) => onConfirmPass(e)}
                  />
                </div>
                <p className="err_password">{msg}</p>
                  </div>
                
                </> : ' '}
                
              </div>
            ) : (
              <>
                {loggedInUser ? (
                  <>
                    {user.map((ele, i) => {
                      return (
                        <div key={i}>
                          <div>
                            <p className="user_">
                              Name : {ele.firstname} {ele.lastname}
                            </p>
                          </div>
                          <div>
                            <p className="user_">Email : {ele.email} </p>
                          </div>
                          <div>
                            <button
                              className="user_btn"
                              onClick={() => setDisplay(!display)}
                            >
                              Edit password
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </>
            )}
          </>
        </Modal.Body>
        <Modal.Footer>
          {show ? 
          <button
            className="white_btn "
            type="submit"
            onClick={() => handleUpdate([data][0]._id, user)}
          >
            Save Password
          </button> : ' '
          }
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Password;
