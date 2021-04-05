import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./header.component";
import About from "../pages/about.page";
import Home from "../pages/home.page";
import client from "../common/apollo-client";
import Info from "../pages/info.page";
import Footer from "./footer.component";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ApolloProvider>
  );
};

export default App;
