import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
    overrides: {
      MuiAppBar: {
        colorPrimary: 'white'
      }
    }
});

export { theme };
