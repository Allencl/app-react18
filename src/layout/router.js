import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "./ErrorPage";




import Layout from "./Layout";
import Home from "./Home";

import Page1 from "./../page/page1.js";
import Form from "./../page/Form.js";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: <Home />,
                description:"德斯德基"
            },  
            {
                path: "page1",
                element: <Page1 />,
            },
            {
                path: "form",
                element: <Form />,
            },
        ]

    },
]);


export default router;
