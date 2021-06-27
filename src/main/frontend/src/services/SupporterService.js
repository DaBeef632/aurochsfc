import axios from 'axios';

const SUPPORTER_API_BASE_URL = "http://localhost:8080/api/v1/supporters";

class SupporterService {

    getSupporters(){
        return axios.get(SUPPORTER_API_BASE_URL);
    }

    createSupporter(supporter){
        return axios.post(SUPPORTER_API_BASE_URL, supporter);
    }

    getSupporterById(supporterId){
        return axios.get(SUPPORTER_API_BASE_URL + '/' + supporterId);
    }

    updateSupporter(supporter, supporterId){
        return axios.put(SUPPORTER_API_BASE_URL + '/' + supporterId, supporter);
    }

    deleteEmployee(supporterId){
        return axios.delete(SUPPORTER_API_BASE_URL + '/' + supporterId);
    }
}

export default new SupporterService()
