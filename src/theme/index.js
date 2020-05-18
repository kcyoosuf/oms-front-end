import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9a0036",
      green: "#1b5e20"
    },
    secondary: {
      main: "#009688"
    }
  },
  typography: {
    useNextVariants: true
  }
});
export default responsiveFontSizes(theme);
