import { Link } from "react-router-dom";
import axiosClient from "../axios-client.js";
import { createRef } from "react";
import { useStateContext } from "../context/ContextProvider.jsx";
import { useState } from "react";

export default function Login() {
  const emailRef = createRef();
  const passwordRef = createRef();
  const { setUser, setToken } = useStateContext();
  const [message, setMessage] = useState(null);

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
      });
  };

  return (
    <div className="login-signup-form min-h-screen flex items-center justify-center bg-gray-100">
      <div className="form bg-white shadow-md rounded p-8 w-full max-w-md animated fadeInDown">
        <form onSubmit={onSubmit}>
          <h1 className="title text-2xl font-bold mb-6 text-center">
            Login into your account
          </h1>

          {message && (
            <div className="alert bg-red-200 text-red-700 p-4 mb-4 rounded">
              <p>{message}</p>
            </div>
          )}

          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <button className="btn btn-block w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none">
            Login
          </button>
          <p className="message text-center mt-4">
            Not registered?{" "}
            <Link to="/signup" className="text-blue-500 hover:text-blue-700">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
