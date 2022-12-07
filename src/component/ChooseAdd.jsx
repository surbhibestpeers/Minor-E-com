import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {CiCircleRemove} from 'react-icons/ci';
import { removeAdd } from './Redux/actions/actionCreators';
import { get_Address } from './Redux/actions/actions';


const ChooseAdd = () => {

  const [add,setAdd]=useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const getAdd = useSelector((state) => state.cartreducer.address);

  
  
  // const address = () => {
  //   axios
  //     .get( "http://localhost:8000/api/address/getAddress" )
  //     .then((res) => {
  //       setRecord(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   address();
  // }, []);

  useEffect(()=> {
    dispatch(get_Address())
  },[])

  const removeAddress=(e)=> {
    console.log(e)
    dispatch(removeAdd(e))
    dispatch(get_Address())
  }

  const continueAddress = ()=> {
    window.localStorage.setItem('deliver',add)
    navigate('/order')
  }


  return (
    <div className="main_add">
    <div className="head_add">
      <h4>Select delivery address</h4> 
    </div>
    <p className='add_new' onClick={()=>navigate('/address')}>+ Add new address</p>
    <hr/> 
    {getAdd.length > 0 ? (<>
    {getAdd.map((data, index)=> {
      return(
        <div style={{display:'flex', justifyContent:'space-between', paddingRight:'30px'}} key={index}>
         
        <div className='add_shown' >
        <CiCircleRemove  onClick={()=>removeAddress(data._id)}/>
        
        <div>{data.name}</div>
        <div>{data.house} {data.area} {data.city} {data.state} {data.pin}</div>
        <div>phone: {data.phone}</div>
       </div>
       
        <input type="radio" value={data._id} onChange={(event)=>setAdd(event.target.value)}/>
       </div>
      )
      
    })}
   </> ) : (<p>please add address</p>)}
   <button className="save_add" onClick={()=>continueAddress()}>
          Deliver Here 
        </button>
    </div>
  )
}

export default ChooseAdd;
