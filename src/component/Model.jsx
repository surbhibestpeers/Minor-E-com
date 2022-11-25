import React,{useEffect, useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import {AiFillStar} from 'react-icons/ai'
import {FaAmazonPay} from 'react-icons/fa';
import {MdReplay} from 'react-icons/md';
import {CiDeliveryTruck} from 'react-icons/ci';
import {BsShieldCheck} from 'react-icons/bs';

const Model = ({data}) => {
  console.log("????????????",data)

  const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [view, setView] = useState('')

    useEffect(()=> {
         setShow(true)
         setView(data)
         setFullscreen(true)
    },[data])

  return (
    <div>
       <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'#1c5045'}}>{view.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal_view'>
          <div className='div_1'>
            <div >
              <img  src={view.file} className='modal_img' alt="mobile"/>
              </div>
            
            <div className='model_btn'>
              <button className='add_cart'>Add to Cart</button>
              <button className='buy'>Buy Now</button>
            </div>
          </div>
          <div className='div_2'> 
             <h3>{view.name}</h3>
             <h5 style={{color:'#2b7466'}}>visit the {view.brand} store</h5>
             <h4>Rating: 4 <AiFillStar color="orange"/></h4>
             <h6>Available Quantity: {view.qty}</h6>
             <hr/>
             <p className='deal'>Deal</p>
             <h5> M.R.P: &#8377; {view.price}/-</h5>
             <p className='deal'>Offer Price</p>
             <p>Inclusive of all taxes</p>
             <p><b>EMI</b> starts at ₹908. No Cost EMI available</p>
             <div className='box'>
                <p><b className='deal'>Save Extra</b> with 3 offers</p>
                <hr/>
                <p><b className='deal'> Exchange Offer:</b>  Up to ₹5000.00 off on Exchange</p>
               
                <hr/>
                <p><b className='deal'> No Cost EMI:</b>   Avail No Cost EMI on select cards for orders above ₹3000</p>
               
             </div>
             <div className='icon_main'>
              <div className='icons'>
                <FaAmazonPay size={30} />
                <p>Pay On delivery</p>
              </div>
              <div className='icons'>
                <MdReplay size={30} />
                <p>7 Days replacement</p>
              </div>
              <div className='icons'>
                <CiDeliveryTruck size={30} />
                <p>Fast delivery</p>
              </div>
              <div className='icons'>
                <BsShieldCheck size={30} />
                <p>One year warranty</p>
              </div>
             </div>
             <hr/>
             <div className='size_1'>
                <p> <b>Brand:</b> {view.brand}</p>
                <p> <b>Product Name:</b> {view.name}</p>
                <p> <b>Color:</b> { view.color}</p>
                <p> <b>Description: </b>{view.description}</p>
                </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Model