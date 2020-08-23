import pokemonsConstants from '../constants/pokemons';

const pokemonsReducerInitialState = {
    request: false,
    error: null,
    pokemons: []
};

export default (state = pokemonsReducerInitialState, action) => {

    switch (action.type) {

        case pokemonsConstants.GET_POKEMONS_REQUEST:
        case pokemonsConstants.GET_POKEMON_REQUEST:

            return {
                ...state,
                request: true,
                error: null
            };

        case pokemonsConstants.GET_POKEMONS_FAILURE:
        case pokemonsConstants.GET_POKEMON_FAILURE:

            return {
                ...state,
                request: false,
                error: action.error
            };

        case pokemonsConstants.GET_POKEMONS_SUCCESS:

            return {
                ...state,
                request: false,
                pokemons: action.pokemons
            };

        case pokemonsConstants.GET_POKEMON_SUCCESS:

            return {
                ...state,
                request: false,
                [action.pokemon.id]: action.pokemon
            };

        default:

            return state;

    }

}