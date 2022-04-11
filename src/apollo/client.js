import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api.curri.com/graphql",
  cache: new InMemoryCache(),
});
