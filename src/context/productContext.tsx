import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { fetchProducts } from "../services/api";

interface Product {
  id: string;
  name: string;
  sku: string;
  image: string;
  title: string;
  description: string;
  brand: string;
  costPrice: number;
  quantity: number;
  size: string;
}

interface ProductContextType {
  products: Product[];
  loading: boolean;
  // error: string | null;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

interface ProductProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data", error);
        // setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  const value = { products, loading, searchTerm, setSearchTerm };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProductContext(): ProductContextType {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
}
