import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { Tooltip } from "@base-ui/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Tooltip> */}
        <App />
      {/* </Tooltip> */}
    </BrowserRouter>
  </StrictMode>
);

