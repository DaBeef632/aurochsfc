import axios from 'axios';

const BEER_API_BASE_URL = "http://localhost:8080/api/v1/beers";

class BeerService {

    getAllBeers(){
        return axios.get(BEER_API_BASE_URL);
    }

    createBeer(beer){
        return axios.post(BEER_API_BASE_URL, beer);
    }

    getBeerById(beerId){
        return axios.get(BEER_API_BASE_URL + '/' + beerId);
    }

    updateBeer(beer, beerId){
        return axios.put(BEER_API_BASE_URL + '/' + beerId, beer);
    }

    deleteBeer(beerId){
        return axios.delete(BEER_API_BASE_URL + '/' + beerId);
    }
}

export default new BeerService()