import React, { useEffect,useState,useCallback } from 'react';
import { Outlet } from "react-router-dom";

import {Paper,Button} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux'
import { showSnackBar } from './../store/snackBarSlice'
import { useSnackbar } from 'notistack';

import TopBar from "./TopBar";
import BottomButton from "./BottomButton";

export default function Layout() {
    const { enqueueSnackbar } = useSnackbar();

    const count = useSelector((state) => state.snackBar.value)
    const [count1, setCount1] = useState(0);


    const dispatch = useDispatch()


    const abc = ()=>{
        alert("klkk")    
        enqueueSnackbar('This is a success message!', { 
            variant: 'success',
            // preventDuplicate: true,  // 防止重复
            autoHideDuration: 1000,
        });
    };



    useEffect(() => {
        // setTimeout(()=>{
        //     enqueueSnackbar('This is a success message!', { 
        //         variant: 'success',
        //         // preventDuplicate: true,  // 防止重复
        //         autoHideDuration: 1000,
        //      });
        // },1000)
        // const aaa=count1;

        // abc()
        // console.log(aaa)


    },[]);




    return <>
        <TopBar />
        <Paper sx={{p:"70px 6px 70px 6px"}} elevation={0}>
            <p>{count1}</p>

            <Button onClick={() => abc() } variant="text">Text</Button>
            <Outlet />
        </Paper>
        <BottomButton />
    </>
};