const initialState = {
  user: [],
  login: [],
};

export const AuthReducer = (state = initialState, action) => {
  
  
  switch (action.type) {
    
    case "REGISTER_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGIN_USER":
      return {
        ...state,
        login: action.payload,
      };

    default:
      return state;
  }
};
