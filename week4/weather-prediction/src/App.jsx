import GlobalStyles from "./styles/globalStyle";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
