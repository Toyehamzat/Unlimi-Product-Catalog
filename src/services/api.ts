import axios from "axios";

const BASE_URL = "http://3.88.1.181:8000/products/public/catalog";

export const fetchProducts = async (
  searchTerm: string = "",
  first: number = 0,
  last: number = 100
) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        supplier: "FragranceX",
        first,
        last,
        search: searchTerm,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
