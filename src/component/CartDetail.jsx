import React,{useState,useEffect} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useSelector,useDispatch} from 'react-redux';
import { remove_cart, add_wishlist,get_cart } from './Redux/actions/actions';

const CartDetail = () => {

  const [show, setShow] = useState(true);
  const [price, setPrice]= useState('')
  const handleClose = () => setShow(false);

  const getdata = useSelector((state) => state.cartreducer.carts);
  
  const dispatch = useDispatch()
  const dlt = (e) => {
    console.log(e)
    dispatch(remove_cart(e));
    dispatch(get_cart())
  };

  const wish = (e) => {
    console.log(e)
    dispatch(add_wishlist(e));
    dispatch(remove_cart(e._id));
    dispatch(get_cart())
    
  };

  
  
  useEffect(() => { 
    const total = () => {
      let price = 0;
      getdata.map((ele) => {
        return(
        price = parseInt(ele.price) + parseInt(price)
        )
      });
      setPrice(price);
    };
    total();
  }, [getdata]);
   



  return (
    <div>
     <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton className='cart_head'>
          <Offcanvas.Title>My Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {getdata.length > 0 ? (<>
            {getdata.map((e)=> {
              return (<div style={{backgroundColor:'rgb(255, 249, 249)', padding:'10px'}}>
                <div style={{display:'flex'}}>
                 <img src={e.file} alt="cart_item" width='80'/>
                 <div className='detail'>
                    <p>{e.name}</p>
                    <p>M.R.P: &#8377; {e.price}/-</p>
                 </div>
                </div>
                <div className='cart_btn'>
                  <button className='cbtn_1 ' onClick={() => wish(e)}>Move to Wishlist</button>
                  <button className='cbtn_2 ' onClick={() => dlt(e._id)}>Remove</button>
                </div>
               </div>
               )
              })
            }
            <div>
              <h4>Price Detail</h4>
              <div className='rate'>
                <p>Price</p>
                ₹ {price}
              </div>
              <div className='rate_1'>
                <p>Discount</p>
                <p className='free'>None</p>
              </div>
              <div className='rate_1'>
                <p>Delivery</p>
                <p className='free'>Free</p>
              </div>
              <hr/>
              <div className='rate_1'>
                <p>TOTAL AMOUNT</p>
                <p >₹ {price}</p>
              </div>
              <button className='place'>Place Order</button>
            </div>
            </>
          ): (<p>cart is empty</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default CartDetail;
