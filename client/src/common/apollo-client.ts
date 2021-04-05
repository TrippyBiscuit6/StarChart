import { ApolloClient, InMemoryCache } from "@apollo/client";

//init client
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export default client;
