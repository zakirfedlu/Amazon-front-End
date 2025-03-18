import axios from "axios";

const axiosinstance = axios.create({
  //local baseURL
  //baseURL: "http://127.0.0.1:5001/clone-499ea/us-central1/api",

  // Deployed baseURL deployed on render
  baseURL: "http://localhost:5000/",
});

export { axiosinstance };
