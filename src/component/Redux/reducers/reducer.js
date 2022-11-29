const INIT_STATE = {
    carts: [],
    wishlist: []
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


       case "DELETE_ITEM":
        const data = state.carts.filter((el)=>el._id !== action.payload);
        return{
          ...state,
          carts:data
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
        
        default:
            return state
    }
}