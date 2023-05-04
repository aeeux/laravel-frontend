import { Link } from "react-router-dom";
import { createRef, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";

export default function Signup() {
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();
  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState(null);

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };
    axiosClient
      .post("/signup", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <div className="login-signup-form min-h-screen flex items-center justify-center bg-gray-100">
      <div className="form bg-white shadow-md rounded p-8 w-full max-w-md animated fadeInDown">
        <form onSubmit={onSubmit}>
          <h1 className="title text-2xl font-bold mb-6 text-center">
            Signup for Free
          </h1>

          {errors && (
            <div className="alert bg-red-200 text-red-700 p-4 mb-4 rounded">
              {Object.keys(errors).map((key) => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          )}

          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            ref={emailRef}
            type="email"
            placeholder="Email Address"
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            ref={passwordConfirmationRef}
            type="password"
            placeholder="Repeat Password"
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <button className="btn btn-block w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none">
            Signup
          </button>
          <p className="message text-center mt-4">
            Already registered?{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
