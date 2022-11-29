import axios from "axios"
import {ADD, remove,get, wishlist, remove_wishlist, get_wishlist} from './actionCreators';


export const add_cart =(record)=>{
    return dispatch =>{
        axios.post("http://localhost:8000/api/cart/add-cart",record).then((res)=>{
            dispatch(ADD(res.data))
        }).catch((err)=>{
            console.log(err);
        })
    }
  }
  
  export const remove_cart =(id)=>{
    
    return dispatch =>{
        axios.delete(`http://localhost:8000/api/cart/remove-cart/${id}`).then((res)=>{
            dispatch(remove(res.data))
        }).catch((err)=>{
            console.log(err);
        })
    }
}

export const get_cart =()=>{
    return dispatch =>{
        axios.get("http://localhost:8000/api/cart/get-cart").then((res)=>{
            
            dispatch(get(res.data))
        }).catch((err)=>{
            console.log(err);
        })
    }
}

export const add_wishlist =(record)=>{
    console.log("record",record)
    return dispatch =>{
        axios.post("http://localhost:8000/api/wishlist/add-wishlist",record).then((res)=>{
            dispatch(wishlist(res.data))
        }).catch((err)=>{
            console.log(err);
        })
    }
  }
  
  export const delete_wishlist =(id)=>{
    console.log("deletew",id)
    return dispatch =>{
        axios.delete(`http://localhost:8000/api/wishlist/remove-wishlist/${id}`).then((res)=>{
            dispatch(remove_wishlist(res.data))
        }).catch((err)=>{
            console.log(err);
        })
    }
}

export const wishlist_get =()=>{
    return dispatch =>{
        axios.get("http://localhost:8000/api/wishlist/get-wishlist").then((res)=>{
            dispatch(get_wishlist (res.data))
        }).catch((err)=>{
            console.log(err);
        })
    }
}