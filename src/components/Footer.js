import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";

export default function () {
    return (
        <Grid
            style={{marginTop: '30px'}}
            direction={"column"}
            container
            alignItems={"center"}
            justify={"center"}
        >
            <Grid item sm={12} md={12}>
                <Typography variant={"overline"} gutterBottom>
                    Hecho por &nbsp;
                    <a href={"https://github.com/GustavoHekel"}>
                        Gustavo Hekel
                    </a>
                </Typography>
            </Grid>
        </Grid>
    );
}