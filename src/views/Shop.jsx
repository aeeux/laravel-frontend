import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";

export default function ShopProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setLoading(true);
    axiosClient
      .get("/public/products")
      .then(({ data }) => {
        setLoading(false);
        setProducts(data.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const addToCart = (product) => {
    // Handle adding the product to the cart
  };

  return (
    <div className="container mx-auto my-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading && <div className="text-center">Loading...</div>}
        {!loading &&
          products.map((p) => (
            <div
              key={p.id}
              className="card bg-white shadow rounded p-4 animated fadeInDown"
            >
              <h2 className="text-xl font-bold mb-2">{p.name}</h2>
              <p className="text-gray-600 mb-4">{p.description}</p>
              <p className="font-semibold mb-4">Price: {p.price}</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                onClick={() => addToCart(p)}
              >
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
