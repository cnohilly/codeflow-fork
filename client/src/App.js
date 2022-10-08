import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SingleProject from "./pages/SingleProject";
import ProfileMain from "./pages/ProfileMain";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    ...headers,
    authorization: token ? `Bearer ${token}` : "",
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <main className="App custom-height bg-secondary">
          <Routes>
            <Route path="/single-project" element={<SingleProject />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<ProfileMain />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
