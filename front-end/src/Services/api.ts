import axios from "axios";

export const api = axios.create({
  baseURL: "https://psql-server-hirtonsantos.herokuapp.com",
});