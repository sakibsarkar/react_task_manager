import Layout from "../Layout/Layout";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />
    }
])