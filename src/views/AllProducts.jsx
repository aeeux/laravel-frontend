import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { Link } from "react-router-dom";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const onDeleteClick = (product) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }
    axiosClient.delete(`/products/${product.id}`).then(() => {
      getProducts();
    });
  };

  const getProducts = () => {
    setLoading(true);
    axiosClient
      .get("/products")
      .then(({ data }) => {
        setLoading(false);
        setProducts(data.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto my-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link
          className="btn-add bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          to="/products/new"
        >
          Add new
        </Link>
      </div>
      <div className="card animated fadeInDown bg-white shadow rounded">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left bg-gray-300">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Create Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          {loading && (
            <tbody>
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            </tbody>
          )}
          {!loading && (
            <tbody>
              {products.map((p, index) => (
                <tr
                  key={p.id}
                  className={`${
                    index % 2 ? "bg-gray-200" : "bg-gray-100"
                  } hover:bg-gray-300`}
                >
                  <td className="px-4 py-2">{p.id}</td>
                  <td className="px-4 py-2">{p.name}</td>
                  <td className="px-4 py-2">{p.description}</td>
                  <td className="px-4 py-2">{p.price}</td>
                  <td className="px-4 py-2">{p.created_at}</td>
                  <td className="px-4 py-2">
                    <Link
                      className="btn-edit bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                      to={`/products/${p.id}`}
                    >
                      Edit
                    </Link>
                    &nbsp;
                    <button
                      className="btn-delete bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                      onClick={(ev) => onDeleteClick(p)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
