import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const GlobalStyle = createGlobalStyle`
  /* css reset */
  *{margin:0;padding:0;font:inherit;color:inherit;}
  *, :after, :before {box-sizing:border-box;}
  :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:4;}
  html, body, #root {height:100%;}
  img, picture, video, canvas, svg {display: block;max-width:100%;}
  button {background:none;border:0;cursor:pointer;}
  a {text-decoration:none}
  table {border-collapse:collapse;border-spacing:0}
  
  * {
      box-sizing: border-box;
      font-family: 'Noto Sans KR', sans-serif;
  }
    
  // hide scroll
  * {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;

const theme = {
  Color: {
    mainColor: "#ff3e3e",
    hoverColor: "#ff0000",
    activeColor: "#ff8d8d",
    inactiveColor: "#B0B1B0",

    borderColor: "#d9d9d9",
    backgroundColor: "#f6f6f6",

    mainFontColor: "#333333",
    captionFontColor: "#d1d1d1",
    defaultFontColor: "#717071",
    mutedFontColor: "#d5d5d5",

    componentColor: "#ffffff",
  },

  Border: {
    thickBorder: "1.5px solid #D9D9D9",
    thinBorder: "1px solid #D9D9D9",
  },

  // Font-size
  Fs: {
    sidebarTitle: "1.2rem",
    modalTitle: "1.12rem",
    tagTitle: "1.12rem",
    default: "0.875rem",
    caption: "0.625rem",
  },

  // Border-radius
  Br: {
    default: "0.25rem",
  },

  // Box-shadow
  Bs: {
    default: "3px 4px 16px 2px rgba(0, 0, 0, 0.06)",
  },

  Padding: {
    header: "0.75rem 1.25rem 0.75rem 1.25rem",
    default: "0.5rem",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
