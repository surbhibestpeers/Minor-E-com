
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React,{useEffect, useState} from 'react'
import './styles.css';
import Badge from "@mui/material/Badge";
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';
import {useSelector,useDispatch} from 'react-redux';
import CartDetail from './CartDetail';
import WishList from './Wishlist';
import { get_cart,wishlist_get } from './Redux/actions/actions';
import AuthModal from './AuthModal';  
import {BsFillPersonFill} from 'react-icons/bs';

const Head = () => {

  const getdata = useSelector((state) => state.cartreducer.carts);

  const getwishlist = useSelector((state) => state.cartreducer.wishlist);

  const[ prevUser, setPrevUser]= useState('')
  const [shownCart,setShownCart]=useState(false)
  const [showWishlist,setShowWishlist]=useState(false)
  const [modalShow, setModalShow] = useState(false);

  const dispatch= useDispatch()

  const date= new Date();
  const hour = date.getHours()

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
    <Navbar expand="lg" className="navbar" >
      
        <Navbar.Brand href="/" style={{color:'#fff'}}><h1>ShopDay</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"   />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="set">
            
          <Badge
              badgeContent={getdata.length}
              color="primary"
              id="basic-button"
              style={{marginRight:'20px', marginLeft:'-10px' }}
              onClick={()=>openCart()}
            >
            <AiOutlineShoppingCart size={30} className='head_icon'/>
            </Badge>

            <Badge
              badgeContent={getwishlist.length}
              color="primary"
              id="basic-button"
              style={{marginRight:'20px', marginLeft:'-10px' }}
              onClick={()=>openWish()}
            >
              
            <AiOutlineHeart size={30} className='head_icon'/>
            </Badge>
            
            {prevUser ? 
            <div className='time_zone'>{hour>=12 ? hour >=16 ? <p>Good Evening</p> : <p>Good Afternoon</p> : <p>Good Morning </p>} {name}</div> : ''}
            <NavDropdown style={{marginTop:'-5px'}}  title= {prevUser ?  '' : <BsFillPersonFill className='head_icon space_top' size={30}  />  } id="basic-nav-dropdown"  className='drop' >
 
              {prevUser ? <NavDropdown.Item  onClick={handleLogout}>
                LogOut
              </NavDropdown.Item> : 
              <>
              <NavDropdown.Item onClick={() => setModalShow(true)}>New User?  Sign Up</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setModalShow(true)}>
                 Sign IN
              </NavDropdown.Item> 
              </>
              }  
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
   
       <AuthModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    /> 
        {shownCart ? <CartDetail/> : ''}
        {showWishlist ? <WishList/> : ''}
       </div>
  );
}

export default Head
