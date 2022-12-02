import React,{useEffect, useState} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useSelector,useDispatch} from 'react-redux';
import { add_cart, delete_wishlist, wishlist_get } from './Redux/actions/actions';

const WishList = () => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const wishdata = useSelector((state) => state.cartreducer.wishlist);
  const dispatch = useDispatch()

  const moveCart = (e) => {  
    dispatch(add_cart(e))
    dispatch(delete_wishlist(e._id))
    dispatch(wishlist_get())
  };

  useEffect(()=> {
   dispatch(wishlist_get())
  },[ dispatch])

  return (
    <div>
     <Offcanvas show={show} onHide={handleClose} placement='top' >
        <Offcanvas.Header closeButton className='cart_head'>
          <Offcanvas.Title>My Wishlist</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {wishdata.length > 0 ? (<>
            {wishdata.map((e)=> {
              return (<div style={{backgroundColor:'rgb(255, 249, 249)', padding:'10px'}}>
                <div style={{display:'flex'}}>
                 <img src={e.file} alt="cart_item" width='80'/>
                 <div className='detail'>
                    <p>{e.name}</p>
                    <p>M.R.P: &#8377; {e.price}/-</p>
                 </div>
                 <button className='wish_btn ' onClick={() => moveCart(e)}>Move to Cart</button>  
                </div>
                
               </div>
               )
              })
            }
            
            </>
          ): (<p>Nothing in Wishlist</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default WishList;
