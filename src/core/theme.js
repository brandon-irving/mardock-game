import { createMuiTheme } from '@material-ui/core/styles';
const themeOptions = {
    palette: {
      type: 'dark',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  };
const theme = createMuiTheme({
...themeOptions
  });


  export default theme
  