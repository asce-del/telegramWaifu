import axios from "axios";
import React from "react";
import { useState } from "react";

interface loginProps {}

export const Login: React.FC<loginProps> = ({}) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const changeValue = (e: { target: { name: string; value: string } }) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login-user/", {
        values,
      })
      .then((res) => {
        console.log("[APP::LAUNCH]: ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-14">
        <div className="m-6 col-span-6 sm:col-span-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={changeValue}
            id="email"
            autoComplete="email"
            className="w-40 sm:w-full mt-3 border-2 rounded-md border-gray-400 shadow-sm"
          />
        </div>
        <div className="m-6 col-span-6 sm:col-span-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={changeValue}
            id="password"
            autoComplete="password"
            className="w-40 sm:w-full mt-3 border-2 rounded-md border-gray-400 shadow-sm"
          />
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="submit"
            className="w-full inline-flex justify-center rounded-md border border-transparent 
              shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
