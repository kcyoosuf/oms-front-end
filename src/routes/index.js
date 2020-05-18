import React from "react";
import Router from "./router";
import { ConnectedRouter } from "connected-react-router";
const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  );
};
export default App;