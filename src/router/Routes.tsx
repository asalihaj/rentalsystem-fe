import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../App";
import Login from "../pages/users/Login";
import { Box } from "@mui/material";
import Register from "../pages/users/Register";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'not-found', element: <Box>Not found</Box> },
            { path: '*', element: <Navigate replace to='/not-found' /> },
        ]
    }
]

export const router = createBrowserRouter(routes);