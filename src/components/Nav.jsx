import React from "react";
import { AppBar,Toolbar,Typography,Button,Link} from "@mui/material";
function Nav(){
    return(
        <AppBar position="static" style={{backgroundColor: "#20232a"}}>
        <Toolbar>
        <Typography variant="h6" sx={{flexGrow:1}}>
          My Website
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        </Toolbar>   
    </AppBar>
    );
};
export default Nav;