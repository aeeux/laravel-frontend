import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client.js";
import { useEffect } from "react";

export default function DefaultLayout() {
  const { user, token, setUser, setToken, notification } = useStateContext();

  if (!token) {
    return <Navigate to="/home" />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post("/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <div id="defaultLayout" className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-4">
        <Link
          to="/products"
          className="block py-2 px-4 rounded hover:bg-gray-200"
        >
          Products
        </Link>
        <Link to="/users" className="block py-2 px-4 rounded hover:bg-gray-200">
          Users
        </Link>
      </aside>
      <div className="flex flex-col w-full">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="font-bold text-xl">Header</div>

          <div className="flex items-center">
            <span className="mr-4">{user.name}</span>
            <a
              onClick={onLogout}
              className="btn-logout bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 cursor-pointer"
              href="#"
            >
              Logout
            </a>
          </div>
        </header>
        <main className="flex-grow p-4">
          <Outlet />
        </main>
        {notification && (
          <div className="notification bg-green-100 border border-green-400 text-green-700 p-4 mt-4 rounded">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
}
