import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import { lightTheme } from "./theme.ts";
import GlobalStyles from "./GlobalStyles.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
