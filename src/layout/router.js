import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "./ErrorPage";




import Layout from "./Layout";
import Home from "./Home";

import Page1 from "./../page/page1.js";
import Page2 from "./../page/page2.js";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: <Home />,
            },  
            {
                path: "page1",
                element: <Page1 />,
            },
            {
                path: "page2",
                element: <Page2 />,
            },
        ]

    },
]);


export default router;
