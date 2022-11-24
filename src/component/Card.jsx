import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import "./styles.css";
import {useDispatch} from 'react-redux';
import { ADD } from './Redux/actions/actions';

const Cards = () => {

  // const [data, setData] = useState('');
  // console.log(data);

  // console.log("2",localStorage.getItem('token'))
  
    const [data, setData]= useState([])
    
    const products=()=> {
      axios.get('http://localhost:8000/api/product/all',{
        // headers: {authorization: JSON.stringify(localStorage.getItem('token'))
        headers: {authorization: `Bearer ${(localStorage.getItem('token'))}`
      }
    })
      .then((res)=> {
        console.log(res.data)
        setData(res.data)
      }).catch(err=> console.log(err))
    }
 
    useEffect(()=> {
           products()
    },[])

  const dispatch = useDispatch();


  const send = (e)=>{
    dispatch(ADD(e));
  }

  return (
    <div className="card_main">
      <div className="card_1" >
      
      {data.length>0 ? ( data.map((element) => {
            return (
              <>
              <div style={{width:"25%"}}>
              <Card  style={{
                      width: "80%",
                      border: "none",
                      background: "rgb(230,230,230)",
                    }}
                     className="card_style"
                   >
                  <Card.Img variant="top"
                      src={element.file}
                      style={{ height: "10rem", width: "5rem", margin: "auto" }}
                      className="mt-3 style_image"/>
                  <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <div >
                    <button
                      onClick={()=> send(element)}
                     className='white_btn_1'>Add to Cart</button>
                    </div>
                  
                  </Card.Body>
                </Card>
              </div>
                
                
              </>
            )
          }) ): <div className='no-data'>No Data to Show</div>}
        
       
        
      </div>
    </div>
  )
}

export default Cards;