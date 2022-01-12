import React from 'react';
import ReactDOM from 'react-dom';
import './styles/export.scss';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { ContentfulRestLink } from 'apollo-link-contentful'

const space = process.env.REACT_APP_CONTENTFUL_SPACE
const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN

const client = new ApolloClient({
  link: new ContentfulRestLink({
    space,
    accessToken,
  }, {
    include: 10,
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
