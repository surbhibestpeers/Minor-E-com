import React,{useEffect, useState} from 'react'
import './styles.css';
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {useSelector} from 'react-redux';
    const Header = () => {

      const[ prevUser, setPrevUser]= useState('')

      const navigate = useNavigate();

      const getdata = useSelector((state) => state.cartreducer.carts);
      console.log("<<<<?????",getdata.length)

      useEffect(() => {
        const loggedInUser = localStorage.getItem("token");
        if (loggedInUser) {
          setPrevUser(loggedInUser);
        }
      }, []);

      const handleLogout = () => {
        
        // window.location.reload();
        navigate("/signin")
        localStorage.clear();
      };

      return (
        <div>
          <nav className="navbar">
            <h1>ShopDay</h1>
            <div style={{display:'flex'}}>
            <Badge
              badgeContent={getdata.length}
              color="primary"
              id="basic-button"
              // aria-controls={open ? "basic-menu" : undefined}
              // aria-haspopup="true"
              // aria-expanded={open ? "true" : undefined}
              // onClick={handleClick}
              style={{marginRight:'20px', marginLeft:'-10px' }}
            >
            <AiOutlineShoppingCart size={30} style={{color:'#fff', marginRight:'20px'}}/>
            </Badge>
            {prevUser? <button className="white_btn" onClick={handleLogout}>
              Logout</button> : <button className="white_btn"  onClick={()=> navigate("/signin")}>SignIn</button>}
            </div>
            
          </nav>
        </div>
      );
    };
    
    export default Header;
