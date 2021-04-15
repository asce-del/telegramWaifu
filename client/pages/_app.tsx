import { ApolloProvider } from "@apollo/client";
import React from "react";
import "tailwindcss/tailwind.css";
import { useApollo } from "../utils/apolloClient";

function MyApp({ Component, pageProps }) {
  const client = useApollo();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
