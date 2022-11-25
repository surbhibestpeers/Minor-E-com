import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import "./styles.css";
import {useDispatch} from 'react-redux';
import { ADD } from './Redux/actions/actions';
import Model from './Model';



const Cards = () => {

    const [data, setData]= useState([])
    const [record,setRecord]=useState('')
    const [display,setDisplay]=useState(false)
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

  const show=(e)=> {
    setRecord(e)
    setDisplay(true)
  }


  return (
    <div className="card_main">
      <div className="card_1" >
      
      {data.length>0 ? ( data.map((element) => {
            return (
              <>
              <div className='size'>
              <Card  
                     className="card_style"
                   >
                  <Card.Img variant="top"
                      src={element.file}
                      style={{ height: "10rem", width: "5rem", margin: "auto" }}
                      className="mt-3 style_image"  onClick={()=>show(element)}/>
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
              </>)
          }) ): <div className='no-data'>No Data to Show</div>}
      </div>
        
  {display ? <Model data={record} /> : ''}
    </div>
  )
}

export default Cards;