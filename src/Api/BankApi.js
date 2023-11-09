import axios from "axios";
let url = "http://localhost:5000/";
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  url = "/";
}

export const API = axios.create({
  baseURL: url,
});
