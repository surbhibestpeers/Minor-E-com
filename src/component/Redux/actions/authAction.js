import axios from "axios"
import {registerUser,loginUser, update } from '../actions/authActionCreators';




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
       console.log(".....", res.data)
       window.localStorage.setItem('userrecord',JSON.stringify(res.data))
          dispatch(loginUser(res.data))
      }).catch((err)=>{
          console.log(err);
      })
  }
}



export const update_user = (id,item) => {
    console.log("???????", id,item)
    return dispatch => {
         axios.put(`http://localhost:8000/api/users/updateUser/${id}`, item).then((res)=> {
          console.log(res)
            dispatch(update(res.data))
         }).catch((err)=> {
            console.log(err)
         })
    }
  }