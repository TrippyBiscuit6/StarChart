import { ApolloClient, InMemoryCache } from "@apollo/client";

//init client
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export default client;
