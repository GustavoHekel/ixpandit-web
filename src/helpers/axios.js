import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

instance.interceptors.response.use(function (response) {

    return response.data;

}, function (error) {

    let exceptionData;

    if (error.response) {

        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        exceptionData = error.response.data;

    } else if (error.request) {

        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        exceptionData = error.request;

    } else {

        // Something happened in setting up the request that triggered an Error
        exceptionData = error.message;

    }

    throw exceptionData;

});

export default instance;
