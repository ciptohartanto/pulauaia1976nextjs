import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.HYGRAPH,
  cache: new InMemoryCache(),
});

export default client;
