import axios from "../config/axios.config";

export const fetchRandonJoke = async () => {
  const response = await axios.get("/random");
  return response.data.value;
};

export const fetchJokeWithCategory = async (category) => {
  const response = await axios.get(`/random?category=${category}`);
  return response.data.value;
};

export const fetchCategories = async () => {
  const response = await axios.get("/categories");
  return response.data;
};
