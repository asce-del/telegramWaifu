import React from "react";

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
  return (
    <div className="mt-14">
      <div className="m-6 col-span-6 sm:col-span-3">
        <label
          htmlFor="first_name"
          className="block text-sm font-medium text-gray-700"
        >
          First name
        </label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          autoComplete="given-name"
          className="w-40 sm:w-full mt-3 border-2 rounded-md border-gray-400 shadow-sm"
        />
      </div>

      <div className="m-6 col-span-6 sm:col-span-3">
        <label
          htmlFor="last_name"
          className="block text-sm font-medium text-gray-700"
        >
          Last name
        </label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          autoComplete="family-name"
          className="w-40 sm:w-full mt-3 border-2 rounded-md border-gray-400 shadow-sm"
        />
      </div>
      <div className="m-6 col-span-6 sm:col-span-4">
        <label
          htmlFor="email_address"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <input
          type="text"
          name="email_address"
          id="email_address"
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
          id="password"
          autoComplete="password"
          className="w-40 sm:w-full mt-3 border-2 rounded-md border-gray-400 shadow-sm"
        />
      </div>
    </div>
  );
};
