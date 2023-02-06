import { Outlet } from "react-router-dom";

import {Paper} from '@mui/material';


import TopBar from "./TopBar";
import BottomButton from "./BottomButton";

export default function Layout() {


    return <>
        <TopBar />

        <Paper sx={{p:"70px 6px 70px 6px"}} elevation={0}>
            <Outlet />
        </Paper>


        <BottomButton />



    </>
};