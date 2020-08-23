import React, {useState} from "react";
import {Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import PokemonCard from "../components/PokemonCard";
import {startGetPokemons} from "../actions/pokemons";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({

    form: {
        margin: theme.spacing(3),
        textAlign: 'center'
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    errorMessage: {
        display: "flex",
        justifyContent: "center"
    }

}));

export default function () {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');
    const {request, error, pokemons} = useSelector(state => state.pokemons);

    const startSearch = (e) => {
        e.preventDefault();
        dispatch(startGetPokemons({
            name: search
        }));
    };

    return (
        <>
            <Grid container justify={"center"}>
                <Grid item sm={6}>
                    <form className={classes.form} onSubmit={startSearch}>
                        <TextField id={"pokemon-name"} label={"Ingrese el nombre del pokemon a buscar"} fullWidth={true}
                                   onChange={(e) => setSearch(e.target.value)}/>
                        <Button type={"submit"} variant={"contained"} color={"secondary"} className={classes.submit}>
                            Buscar
                        </Button>
                    </form>
                </Grid>
            </Grid>

            {
                request ? (

                    <Grid container justify={"center"}>
                        <CircularProgress/>
                    </Grid>

                ) : (

                    error ? (

                        error.errors && Object.keys(error.errors).map(field => (
                            error.errors[field].map((message, key) => (
                                <div className={classes.errorMessage} key={key}>
                                    <Typography component={"h3"} color={"secondary"}>
                                        {message}
                                    </Typography>
                                    <br/>
                                </div>

                            ))
                        ))

                    ) : (

                        <Grid container justify={"center"}>
                            {
                                pokemons.map(pokemon => {
                                    return (
                                        <Grid item key={pokemon.details.id}>
                                            <PokemonCard pokemon={pokemon}/>
                                        </Grid>
                                    );

                                })
                            }
                        </Grid>

                    )
                )
            }

            <Footer/>

        </>
    );

}