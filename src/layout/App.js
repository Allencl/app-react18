import {RouterProvider} from "react-router-dom";
import '@fontsource/roboto/500.css';

import router from "./router";

export default function App(){
    return <>
        <RouterProvider router={router} />
    </>
};
