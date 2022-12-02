import React,{useEffect, useState} from 'react'
import './styles.css';
import Badge from "@mui/material/Badge";
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';
import {useSelector,useDispatch} from 'react-redux';
import CartDetail from './CartDetail';
import WishList from './Wishlist';
import { get_cart,wishlist_get } from './Redux/actions/actions';
import {BsFillPersonFill} from 'react-icons/bs';
import AuthModal from './AuthModal';
import { Avatar } from '@mui/material';
    
const Header = () => {

      const getdata = useSelector((state) => state.cartreducer.carts);

      const getwishlist = useSelector((state) => state.cartreducer.wishlist);

      const[ prevUser, setPrevUser]= useState('')
      const [shownCart,setShownCart]=useState(false)
      const [showWishlist,setShowWishlist]=useState(false)
      const [modalShow, setModalShow] = useState(false);
      const dispatch= useDispatch()

      useEffect(() => {
        const loggedInUser = localStorage.getItem("userrecord");
        if (loggedInUser) {
          setPrevUser(loggedInUser);
        }
      }, []);
   
      useEffect(() => {
        dispatch(get_cart());
        dispatch(wishlist_get())
      }, [dispatch]);

      const loggedInUser = localStorage.getItem("userrecord");
      if (loggedInUser) {
        var name = JSON.parse(localStorage.getItem('userrecord')).user.firstname;
      }
     
      useEffect(() => { }, [loggedInUser]);

      const handleLogout = () => {
       localStorage.clear();
      window.location.reload();
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
            <div style={{display:'flex', paddingTop:'10px'}}>
            <Badge
              badgeContent={getdata.length}
              color="primary"
              id="basic-button"
              style={{marginRight:'20px', marginLeft:'-10px' }}
              onClick={()=>openCart()}
            >
            <AiOutlineShoppingCart size={30} style={{color:'#fff', marginRight:'20px',cursor:'pointer'}}/>
            </Badge>

            <Badge
              badgeContent={getwishlist.length}
              color="primary"
              id="basic-button"
              style={{marginRight:'20px', marginLeft:'-10px' }}
              onClick={()=>openWish()}
            >
            <AiOutlineHeart size={30} style={{color:'#fff', marginRight:'20px',cursor:'pointer'}}/>
            </Badge>

            {prevUser? 
            <div style={{display:'column', marginRight:'20px', alignItems:'center'}}>
              <Avatar
            onClick={handleLogout}
            alt="Remy Sharp"
            variant="circle"
            sx={{ width: 30, height: 30 }}
           
            />
            <p style={{color:'#fff'}}>{name}</p>
            </div>
            : 
            <BsFillPersonFill size={30} style={{color:'#fff', marginRight:'20px',cursor:'pointer'}} onClick={() => setModalShow(true)}/>}
           
            </div> 
          </nav>

          <AuthModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          {shownCart ? <CartDetail/> : ''}
          {showWishlist ? <WishList/> : ''}
          
        </div>
      );
    };
    
    export default Header;
