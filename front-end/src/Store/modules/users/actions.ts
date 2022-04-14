import { ADD_USER, DELETE_USER, UPDATE_USER } from "./actionType"

interface Users {
    id: number
    name: string
    email: string
    phone: string
  }

export const registerUser = (data: Users) => ({
    type: ADD_USER,
    data,
});

export const updateUser = (data: Users) => ({
  type: UPDATE_USER,
  data,
});

export const deleteUser = (data: number) => ({
  type: DELETE_USER,
  data,
});
