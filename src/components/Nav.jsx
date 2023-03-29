import React from "react";
import { Menu } from "@mui/icons-material";
import { AppBar,Toolbar,Typography,Button,Link, IconButton,Box} from "@mui/material";
function Nav(){
    return(
        <AppBar position="static" style={{backgroundColor: "#20232a"}}>
        <Toolbar>
        <Typography variant="h6" sx={{flexGrow:1}}>
          My Website
        </Typography>
        <IconButton color="inherit" sx={{display:{md:"none"},}}>
          <Menu />
        </IconButton>
        <Box sx={{display:{xs:"none", md: "block"},
          }}
        >
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        </Box>
        </Toolbar>   
      </AppBar>
    );
};
export default Nav;