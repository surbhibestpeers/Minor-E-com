

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

export const wishlist = (item) => {
  
  return {
      type: "WISHLIST_CART",
      payload: item
  }
}

export const remove_wishlist= (id)=> {
  console.log("rrrrrrrr",id)
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
