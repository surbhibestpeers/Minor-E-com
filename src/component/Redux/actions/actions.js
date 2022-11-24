export const ADD = (item) => {
    console.log(".....", item)
    return {
        type: "ADD_CART",
        payload: item
    }
}

