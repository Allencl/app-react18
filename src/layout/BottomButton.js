import * as React from 'react';

import {useNavigate} from "react-router-dom";


import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';

export default function AppBottomNavigation() {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{flexGrow:1}}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {

                        switch (newValue) {
                            case 0:
                                navigate('/page1',{state:{name:'1111'}})
                                break;
                            case 1:
                                navigate('/home',{state:{name:'home'}})
                                break;
                            case 2:
                                navigate('/page2',{state:{name:'222'}})
                                break;                        
                            default:
                                break;
                        }
                        // console.log(newValue);
                        // console.log( navigate )
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="登录" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="首页" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="表单" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}