export const registerUser = (user)=> {
   console.log("reggggg",user)
  return {
      type:'REGISTER_USER',
      payload:user

  }
}

export const loginUser= (user)=> {
   console.log("logggggg",user)
  return {
      type:'LOGIN_USER',
      payload:user

  }
}