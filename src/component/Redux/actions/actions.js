import axios from "axios";
import {
  ADD,
  remove,
  get,
  update,
  wishlist,
  remove_wishlist,
  get_wishlist,
  saveAddress,
  getAddress,
  removeAdd, clearCart
} from "./actionCreators";

export const add_cart = (record) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8000/api/cart/add-cart", record)
      .then((res) => {
        
        dispatch(ADD(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const remove_cart = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8000/api/cart/remove-cart/${id}`)
      .then((res) => {
        dispatch(remove(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const remove_all = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8000/api/cart/removeall/${id}`)
      .then((res) => {
        dispatch(clearCart(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



export const update_cart = (id,item) => {
    
  return dispatch => {
       axios.put(`http://localhost:8000/api/cart/update-cart/${id}`, item).then((res)=> {
        console.log(res)
          dispatch(update(res.data))
       }).catch((err)=> {
          console.log(err)
       })
  }
}

export const get_cart = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8000/api/cart/get-cart")
      .then((res) => {
        let arr = [];
        let list = res.data 

         list.forEach((e) => {
          
            if (e.user_id === JSON.parse(localStorage.getItem("userrecord")).user._id) {
              arr.push(e)
            } 
          
          } 
          )
        
        dispatch(get(arr));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const add_wishlist = (record) => {
  console.log("record", record);
  return (dispatch) => {
    axios
      .post("http://localhost:8000/api/wishlist/add-wishlist", record)
      .then((res) => {
        dispatch(wishlist(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const delete_wishlist = (id) => {
  console.log("deletew", id);
  return (dispatch) => {
    axios
      .delete(`http://localhost:8000/api/wishlist/remove-wishlist/${id}`)
      .then((res) => {
        dispatch(remove_wishlist(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const wishlist_get = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8000/api/wishlist/get-wishlist")
      .then((res) => {
        let arr = [];
        let list = res.data;
        
          list.forEach((e) => {
            if (
              e.user_id ===
              JSON.parse(localStorage.getItem("userrecord")).user._id
            ) {
              
              arr.push(e);
            }
          });
        
        dispatch(get_wishlist(arr));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const add_Address = (record) => {
    
  return (dispatch) => {
    axios
      .post("http://localhost:8000/api/address/addAddress", record)
      .then((res) => {
        dispatch(saveAddress(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const get_Address = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8000/api/address/getAddress")
      .then((res) => {
        let arr = [];
        let list = res.data;
        
          list.forEach((e) => {
            if (
              e.user_id ===
              JSON.parse(localStorage.getItem("userrecord")).user._id
            ) {
              arr.push(e);
            }
          });
        
        dispatch(getAddress(arr));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const removeAddress = (id) => {

  return (dispatch) => {
    axios
      .delete(`http://localhost:8000/api/address/removeAddress/${id}`)
      .then((res) => {
        dispatch(removeAdd(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};