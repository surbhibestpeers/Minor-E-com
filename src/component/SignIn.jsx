import React,{useState, useEffect} from 'react'
import './styles.css';
// import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { login } from './Redux/actions/authAction';

const SignIn = () => {
    
  const dispatch = useDispatch()
  const navigate= useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
      });
      const [error, setError]= useState('')
     
      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };
      const getdata = useSelector((state) => state.AuthReducer.login);
      
      useEffect(()=> { },[getdata])
  
      const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          email: data.email,
          password: data.password
        };
        
        dispatch(login(userData))
        if(getdata.token) {
          window.localStorage.setItem("token", getdata.token);
          navigate('/')
        } else {
          setError("No Token Generated")
        }
      }
    // try {
    //     axios.post("http://localhost:8000/api/auth", userData).then((response) => {
    //     if(response.data.token){
    //         window.localStorage.setItem("token", response.data.token);
    //         dispatch(login(response.data))
    //     } else {
    //         alert("No token Genetated")
    //     } })
    // } catch(error) {
    //   console.log(error.response.data.message)
    //   setError(error.response);
    // }     }
   
  return (
    <div className='main'>
    <div className='signUp_main'>
       <h3 className='heading'>SIGN IN </h3>
     
          <form onSubmit={handleSubmit}>

           <div className='input_position'>
               <p>Email:</p>
               <input type="email" name="email" value={data.email} onChange={handleChange}/>
           </div>

           <div className='input_position'>
             <p>Password:</p>
               <input  type="password" name="password" value={data.password} onChange={handleChange}/>
           </div>
           <button className='white_btn ' type="submit">LogIn</button>
           <p>New User? <Link to='/signUp'>Register Here</Link></p>
       </form>
       {error ? <div>{error.response.data.message}</div>: ''}
    </div>
</div>
  )
}
export default SignIn;
