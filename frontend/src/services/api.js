import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const generateBlueprint = async (idea) => {
  const response = await API.post("/chat", {
    message: idea,
  });

  return response.data;
};