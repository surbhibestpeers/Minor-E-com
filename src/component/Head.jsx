
import Container from 'react-bootstrap/Container';
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

const Head = () => {

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
    <Navbar expand="lg" className="navbar" >
      <Container>
        <Navbar.Brand href="/" style={{color:'#fff'}}><h1>ShopDay</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="set">
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
            <NavDropdown style={{color:'#fff'}}  title= {prevUser ?  name : "Profile" } id="basic-nav-dropdown"   >

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
      </Container>
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
