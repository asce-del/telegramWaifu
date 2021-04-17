import React from "react";
import "tailwindcss/tailwind.css";
import axios from "axios"

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = process.env.REACT_APP_API
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
