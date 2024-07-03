import "./App.css";
import ProductTable from "./components/ProductTable";
import Navbar from "./components/navbar";
import { ProductProvider } from "./context/productContext";

function App() {
  return (
    <ProductProvider>
      <section className="m-auto bg-slate-100 h-screen max-w-full">
        <div className="">
          <Navbar />
          <ProductTable />
        </div>
      </section>
    </ProductProvider>
  );
}

export default App;
