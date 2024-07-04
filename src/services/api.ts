import axios from "axios";

const API_URL = `http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX&first=0&last=100`;

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
