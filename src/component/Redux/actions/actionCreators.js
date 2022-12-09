

export const ADD = (item) => {
   
  return {
      type: "ADD_CART",
      payload: item
  }
}

export const get = (item) => {
   
  return {
      type: "GET_CART",
      payload: item
  }
}



export const remove = (id)=> {

  return {
      type:'DELETE_ITEM',
      payload:id

  }
}

 export const clearCart = (id)=> {
  return {
    type:'CLEAR_CART',
    payload:id
  }
 }


export const update = (item)=> {
   console.log(item)
  return {
      type:'UPDATE_ITEM',
      payload:item

  }
}

export const saveAddress = (item)=> {
  return {
    type:'ADDRESS_SAVE',
    payload:item
  }
}

export const getAddress = (item) => {
  return {
      type: "GET_ADDRESS",
      payload: item
  }
}

export const removeAdd = (id)=> {
 
  return {
      type:'DELETE_ADDRESS',
      payload:id

  }
}

export const wishlist = (item) => {
  
  return {
      type: "WISHLIST_CART",
      payload: item
  }
}

export const remove_wishlist= (id)=> {
 
  return {
      type:'REMOVE_ITEM',
      payload:id

  }
}
export const get_wishlist = (item) => {
   
  return {
      type: "GET_WISHLIST",
      payload: item
  }
}

