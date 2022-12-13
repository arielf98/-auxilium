import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorNotFound from "../pages/error";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorNotFound />
    },
])