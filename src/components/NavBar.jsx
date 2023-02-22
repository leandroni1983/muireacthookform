import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link as RouterLink } from "react-router-dom";
import { Link } from '@mui/material'

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }} textAlign='center'>
            <AppBar position="static">
                <Toolbar>
                    <Link

                        component={RouterLink}
                        color="inherit"
                        underline='none'
                        to="/">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>

                    <Link

                        component={RouterLink}
                        color="inherit"
                        underline='none'
                        to="/auth/login">
                        <Button color="inherit">LogIn</Button>
                    </Link>

                </Toolbar>

            </AppBar>
        </Box >
    );
}