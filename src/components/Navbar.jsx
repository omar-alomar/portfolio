import React from 'react';
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box } from "@mui/material";
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail, coickckck} from "@mui/icons-material";


const Navbar = () => {
  return (
      <>
        <Box component="nav">
            <AppBar position="static" style={{ background: "#222" }}>
                <Toolbar>
                    <IconButton>
                        <ArrowBack style={{color: "tomato"}} />
                    </IconButton>
                    <Typography variant="h5">
                        Projects
                    </Typography>
                </Toolbar>
            </AppBar>

        </Box>
      </>
  );
};

export default Navbar;
