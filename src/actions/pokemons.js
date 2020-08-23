import pokemonConstants from '../constants/pokemons'
import {getPokemonService} from "../services/pokemon";

const getPokemonsRequest = () => ({
    type: pokemonConstants.GET_POKEMONS_REQUEST
})

const getPokemonsFailure = (error) => ({
    type: pokemonConstants.GET_POKEMONS_FAILURE,
    error
})

const getPokemonsSuccess = (pokemons) => ({
    type: pokemonConstants.GET_POKEMONS_SUCCESS,
    pokemons
})

export const startGetPokemons = (queryString) => {

    return async (dispatch) => {

        try {

            dispatch(getPokemonsRequest());

            const response = await getPokemonService(queryString);

            dispatch(getPokemonsSuccess(response.data));

        } catch (e) {

            dispatch(getPokemonsFailure(e))

        }

    }

}