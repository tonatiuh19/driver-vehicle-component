import React from "react";
import Home from "./src/screens/Home/Home";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/apollo/client";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
