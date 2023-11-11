import axios from "axios";
let url = "https://bank-api-back.onrender.com";
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  url = "https://bank-api-back.onrender.com";
}

export const API = axios.create({
  baseURL: url,
});
