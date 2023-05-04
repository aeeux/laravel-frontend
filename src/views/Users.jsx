import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider.jsx";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  useEffect(() => {
    getUsers();
  }, []);

  const onDeleteClick = (user) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }
    axiosClient.delete(`/users/${user.id}`).then(() => {
      setNotification("User was successfully deleted");
      getUsers();
    });
  };

  const getUsers = () => {
    setLoading(true);
    axiosClient
      .get("/users")
      .then(({ data }) => {
        setLoading(false);
        setUsers(data.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto my-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <Link
          className="btn-add bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          to="/users/new"
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
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Create Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          {loading && (
            <tbody>
              <tr>
                <td colSpan="5" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            </tbody>
          )}
          {!loading && (
            <tbody>
              {users.map((u, index) => (
                <tr
                  key={u.id}
                  className={`${
                    index % 2 ? "bg-gray-200" : "bg-gray-100"
                  } hover:bg-gray-300`}
                >
                  <td className="px-4 py-2">{u.id}</td>
                  <td className="px-4 py-2">{u.name}</td>
                  <td className="px-4 py-2">{u.email}</td>
                  <td className="px-4 py-2">{u.created_at}</td>
                  <td className="px-4 py-2">
                    <Link
                      className="btn-edit bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                      to={"/users/" + u.id}
                    >
                      Edit
                    </Link>
                    &nbsp;
                    <button
                      className="btn-delete bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                      onClick={(ev) => onDeleteClick(u)}
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
