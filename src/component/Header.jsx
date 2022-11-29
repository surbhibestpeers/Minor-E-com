import React,{useEffect, useState} from 'react'
import './styles.css';
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';
import {useSelector,useDispatch} from 'react-redux';
import CartDetail from './CartDetail';
import WishList from './Wishlist';
import { get_cart,wishlist_get } from './Redux/actions/actions';

    
const Header = () => {

      const[ prevUser, setPrevUser]= useState('')
      const [shownCart,setShownCart]=useState(false)
      const [showWishlist,setShowWishlist]=useState(false)

      const navigate = useNavigate();

      const getdata = useSelector((state) => state.cartreducer.carts);

      const getwishlist = useSelector((state) => state.cartreducer.wishlist);

      const dispatch= useDispatch()

      useEffect(() => {
        const loggedInUser = localStorage.getItem("token");
        if (loggedInUser) {
          setPrevUser(loggedInUser);
        }
      }, []);

      
      useEffect(() => {
        dispatch(get_cart());
        dispatch(wishlist_get())
      }, [dispatch]);

      const handleLogout = () => {
        // window.location.reload();
        navigate("/signin")
        localStorage.clear();
      };
      const openCart=()=> {
        setShownCart(true)
      }

      const openWish=()=> {
        setShowWishlist(true)
      }

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
              onClick={()=>openCart()}
            >
            <AiOutlineShoppingCart size={30} style={{color:'#fff', marginRight:'20px'}}/>
            </Badge>

            <Badge
              badgeContent={getwishlist.length}
              color="primary"
              id="basic-button"
              // aria-controls={open ? "basic-menu" : undefined}
              // aria-haspopup="true"
              // aria-expanded={open ? "true" : undefined}
              // onClick={handleClick}
              style={{marginRight:'20px', marginLeft:'-10px' }}
              onClick={()=>openWish()}
            >
            <AiOutlineHeart size={30} style={{color:'#fff', marginRight:'20px'}}/>
            </Badge>

            {prevUser? <button className="white_btn" onClick={handleLogout}>
              Logout</button> : <button className="white_btn"  onClick={()=> navigate("/signin")}>SignIn</button>}
            </div> 
          </nav>
          {shownCart ? <CartDetail/> : ''}
          {showWishlist ? <WishList/> : ''}
        </div>
      );
    };
    
    export default Header;
