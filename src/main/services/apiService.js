import axios from 'axios'

import authHeader from './auth-header';

const httpClient = axios.create({
    baseURL: 'http://localhost:8080/joingroup'
    //baseURL: 'https://mperozo-consultorio-api.herokuapp.com/' 
})

class ApiService {

    constructor(apiURL) {
        this.apiURL = apiURL
    }

    post(url, objeto) {
        const requestURL = `${this.apiURL}${url}`
        return httpClient.post(requestURL, objeto, { headers: authHeader() });
    }

    put(url, objeto) {
        const requestURL = `${this.apiURL}${url}`
        return httpClient.put(requestURL, objeto, { headers: authHeader() });
    }

    delete(url) {
        const requestURL = `${this.apiURL}${url}`
        return httpClient.delete(requestURL, { headers: authHeader() });
    }

    get(url) {
        const requestURL = `${this.apiURL}${url}`
        return httpClient.get(requestURL, { headers: authHeader() });
    }

}
export default ApiService