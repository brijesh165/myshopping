import React from 'react';

import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" component="div" sx={{ textAlign: 'left', flexGrow: 1 }}>
                        My Shopping
                    </Typography>
                    <Button variant="inherit" startIcon={<LoginOutlinedIcon fontSize="large" />}></Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;