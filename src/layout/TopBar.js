import React, {useEffect } from 'react';
import {useNavigate,useLocation} from "react-router-dom";


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function AppTopBarNavigation() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // console.log(location)
    },[location]);

    return <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={()=>{
                            navigate(-1);
                        }}
                    >
                        <NavigateBeforeIcon />
                    </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </>
}