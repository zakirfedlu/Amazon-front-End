import axios from "axios";

const axiosinstance = axios.create({
  //local baseURL
  //baseURL: "http://127.0.0.1:5001/clone-499ea/us-central1/api",

  // Deployed baseURL deployed on render
  baseURL: "https://amazon-api-deploy-1-5ceu.onrender.com/",
});



export  {axiosinstance}