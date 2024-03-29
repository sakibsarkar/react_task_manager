import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import CreateTask from "../Pages/CreateTask/CreateTask";
import DashboardLayout from "../Layout/DashboardLayout";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import MyTask from "../Pages/MyTask/MyTask";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/task',
        element: <DashboardLayout />,
        children: [
            {
                path: "/task/myTask",
                element: <MyTask />
            },
            {
                path: "/task/createTask",
                element: <CreateTask />
            }
            ,
            {
                path: "/task/completed",
                element: <CompletedTask />
            }
        ]
    }
])