import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default ({children}) => (
    <div style={{
        margin: 0,
        padding: 0
    }}>

        <AppBar position={"static"} color={"secondary"}>
            <Toolbar>
                <Typography variant={"h6"}>
                    Pokemon list
                </Typography>
            </Toolbar>
        </AppBar>

        {children}
    </div>
)