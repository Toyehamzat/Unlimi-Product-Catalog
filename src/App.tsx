import "./App.css";
import Navbar from "./components/navbar";
import { ProductProvider } from "./context/productContext";

function App() {
  return (
    <ProductProvider>
      <section className="bg-slate-100 h-screen w-screen">
        <Navbar />
      </section>
    </ProductProvider>
  );
}

export default App;
