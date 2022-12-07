import React,{useState,useEffect} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartData from './CartData';
import { useNavigate } from 'react-router-dom';

const CartDetail = () => {

  const navigate = useNavigate()

  const [show, setShow] = useState(true);
 
  const handleClose = () => setShow(false);

  
  return (
    <div>
     <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton className='cart_head'>
          <Offcanvas.Title>My Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartData/>
          <button className='place' onClick={()=>navigate('/chooseadd')}>Place Order</button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default CartDetail;
