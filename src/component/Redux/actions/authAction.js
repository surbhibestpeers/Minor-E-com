import axios from "axios"
import {registerUser,loginUser } from '../actions/authActionCreators';




export const registration =(user)=>{
  return dispatch =>{
      axios.post("http://localhost:8000/api/users",user).then((res)=>{
          dispatch(registerUser(res.data))
      }).catch((err)=>{
          console.log(err);
      })
  }
}

export const login =(user)=>{
  return dispatch =>{
      axios.post("http://localhost:8000/api/auth",user).then((res)=>{
          dispatch(loginUser(res.data))
      }).catch((err)=>{
          console.log(err);
      })
  }
}