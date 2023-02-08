import {RouterProvider} from "react-router-dom";
import '@fontsource/roboto/500.css';

import router from "./router";
import { SnackbarProvider } from 'notistack';

export default function App(){
    return <>
        <SnackbarProvider maxSnack={3}>
            <RouterProvider router={router} />
        </SnackbarProvider>
    </>
};
