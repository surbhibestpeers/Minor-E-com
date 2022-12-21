export const registerUser = (user)=> {
   console.log("reggggg",user)
  return {
      type:'REGISTER_USER',
      payload:user

  }
}

export const loginUser= (user)=> {
  
  return {
      type:'LOGIN_USER',
      payload:user

  }
}

export const update= (user)=> {
  
  return {
      type:'UPDATE_USER',
      payload:user

  }
}
