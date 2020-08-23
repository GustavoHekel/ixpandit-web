import {axios} from '../helpers';
import {buildQuery} from '../helpers';

export const getPokemonService = (queryString) => {

    return axios.get('pokemon?' + buildQuery(queryString));

}