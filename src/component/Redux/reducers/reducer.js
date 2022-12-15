const INIT_STATE = {
    carts: [],
    wishlist: [],
    address: [],
    orders:[]
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        
        case "ADD_CART":
            return{
                ...state,
                carts: [...state.carts, action.payload]
            }

            case "GET_CART":
            return{
                ...state,
                carts:  action.payload
            }

            case "UPDATE_ITEM":
            return{
                ...state,
                carts:  action.payload
            }

 
       case "DELETE_ITEM":
        const data = state.carts.filter((el)=>el._id !== action.payload);
        return{
          ...state,
          carts:data
        }

        case "CLEAR_CART": 
        const datas = state.carts.filter((el)=>el.user_id !== action.payload);
        return{
          ...state,
          carts:datas
        }

        case "WISHLIST_CART":
            return{
                ...state,
                wishlist: [...state.wishlist, action.payload]
            }

            case "REMOVE_ITEM":
                const item = state.wishlist.filter((el)=>el._id !== action.payload);
                return{
                  ...state,
                  wishlist:item
                }

                case "GET_WISHLIST":
                    return{
                        ...state,
                        wishlist: action.payload
                    }

               case "ADDRESS_SAVE":
                return{
                    ...state,
                    address: [...state.address, action.payload]
                }
               
                case "GET_ADDRESS":
            return{
                ...state,
                address:  action.payload
            }

            case "DELETE_ADDRESS":
                console.log(state.address)
                const remove = state.address.filter((el)=>el._id !== action.payload);
                return{
                  ...state,
                  address:remove
                }

                case "ADD_ORDER":
                    return{
                        ...state,
                        orders: [ ...state.orders ,action.payload ]
                    }

                        
                case "GET_ORDERS":
                    return{
                        ...state,
                        orders:  action.payload
                    }

        default:
            return state
    }
}