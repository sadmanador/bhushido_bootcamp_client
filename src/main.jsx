import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router/router.jsx";
import "./index.css";
import UserContext from "./contexts/UserContext/UserContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContext>
        <RouterProvider router={router}></RouterProvider>
      </UserContext>
    </QueryClientProvider>
  </React.StrictMode>
);
