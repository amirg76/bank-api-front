import axios from "axios";
let url = "https://bank-api-front.onrender.com";
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  url = "/";
}

export const API = axios.create({
  baseURL: url,
});
