import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  useStyleConfig,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserPages from "./pages/UserPages.jsx";
import PostPages from "./pages/PostPages.jsx";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.100", "#101010")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useStyleColorMode: true,
};

const colors = {
  gray: {
    light: "#616161",
    dark: "#1e1e1e",
  },
};

const theme = extendTheme({ config, styles, colors });

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:username",
        element: <UserPages />,
      },
      {
        path: "/:username/post/:p id",
        element: <PostPages />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
  