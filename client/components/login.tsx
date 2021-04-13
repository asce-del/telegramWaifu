import React from "react";

interface loginProps {}

export const Login: React.FC<loginProps> = ({}) => {
  return (
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
          className="mt-3 border-2 rounded-md border-gray-400 shadow-sm"
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
          className="focus:ring-2 focus:ring-blue-600 mt-3 border-2 rounded-md border-gray-400 shadow-sm"
        />
      </div>
    </div>
  );
};
