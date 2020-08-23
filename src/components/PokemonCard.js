import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
    card: {
        minWidth: '275px',
        maxWidth: '275px',
        textAlign: 'center',
        margin: theme.spacing(3)
    },
    titleRoot: {
        border: 'solid 1px red',
        color: '#ffffff',
        backgroundColor: '#f50057'
    },
    title: {
        textTransform: 'uppercase'
    },
    image: {
        width: '96px',
        height: '96px'
    },
    chip: {
        margin: theme.spacing(1),
    },
    normal: {
      color: '#000000',
      borderColor: '#000000',
    },
    poison: {
        color: '#b300ff',
        borderColor: '#b300ff'
    },
    grass: {
        color: '#10af00',
        borderColor: '#10af00'
    },
    bug: {
        color: '#0c6100',
        borderColor: '#0c6100'
    },
    electric: {
        color: '#fff800',
        borderColor: '#fff800'
    },
    flying: {
        color: '#abcdef',
        borderColor: '#abcdef',
    },
    fire: {
        color: '#ff0000',
        borderColor: '#ff0000',
    },
    fairy: {
        color: '#f53ce3',
        borderColor: '#f53ce3',
    },
    water: {
        color: '#20b8c6',
        borderColor: '#20b8c6',
    },
    psychic: {
        color: '#bb20c6',
        borderColor: '#bb20c6',
    },
    fighting: {
        color: '#ff4f00',
        borderColor: '#ff4f00',
    },
    ground: {
        color: '#a1512b',
        borderColor: '#a1512b',
    }
}));

export default function ({pokemon}) {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                title={pokemon.name}
                subheader={`Nº ${pokemon.details.id}`}
                classes={{
                    root: classes.titleRoot,
                    title: classes.title
                }}/>
            <CardContent>
                <img
                    className={classes.image}
                    src={pokemon.details.img}
                />
            </CardContent>
            <CardActions>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                        <Typography variant={"overline"}>
                            Height
                        </Typography>
                        <br/>
                        <Typography variant={"overline"}>
                            {pokemon.details.height}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Typography variant={"overline"}>
                            Base Exp.
                        </Typography>
                        <br/>
                        <Typography variant={"overline"}>
                            {pokemon.details.base_experience}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Typography variant={"overline"}>
                            Weight
                        </Typography>
                        <br/>
                        <Typography variant={"overline"}>
                            {pokemon.details.weight}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant={"overline"}>
                            Types
                        </Typography>
                        <br/>
                        {
                            pokemon.details.types.map(type => (
                                <Chip key={type.type.name} size={"small"} color={"primary"} variant={"outlined"} label={type.type.name}
                                      classes={{
                                          root: classes.chip,
                                          colorPrimary: classes[type.type.name]
                                      }}/>
                            ))
                        }
                    </Grid>
                </Grid>


            </CardActions>
        </Card>
    );

}
