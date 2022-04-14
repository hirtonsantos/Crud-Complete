import { ADD_USER, DELETE_USER, UPDATE_USER } from "./actionType";

const usersReducer = (state = [], action: any) => {
  const { data } = action;
  switch (action.type) {
    case ADD_USER:
      return data
    case UPDATE_USER:
      return data
    case DELETE_USER:
      console.log("oi")
      return data
    default:
      return state
  }
};

export default usersReducer;
