import axios from "axios"

const service = axios.create({

  withCredentials: true,
  baseURL: import.meta.env.REACT_APP_BASE_API_URL || "http://localhost:3000",

});

export function createUser(body){

  return service.post("/users", body).then(response => response.data);

}