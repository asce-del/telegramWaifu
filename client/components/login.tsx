import React from "react";

interface loginProps {}

export const Login: React.FC<loginProps> = ({}) => {
  return (
    <form>
      <div className="mt-14">
        <div className="m-6 col-span-6 sm:col-span-4">
          <label
            htmlFor="email_address"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            name="email_address"
            id="email_address"
            autoComplete="email_address"
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
