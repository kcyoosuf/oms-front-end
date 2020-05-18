import React from "react";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import store, { history } from "./store/store";
import AppRoutes from "./routes";
import theme from "./theme";
const app = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <AppRoutes history={history} />
    </MuiThemeProvider>
  </Provider>
);
export default app;