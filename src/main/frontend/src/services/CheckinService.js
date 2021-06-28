import axios from 'axios';

const CHECKIN_API_BASE_URL = "http://localhost:8080/api/v1/checkins";

class CheckinService {

    getAllCheckins(){
        return axios.get(CHECKIN_API_BASE_URL);
    }

    createCheckin(checkin){
        return axios.post(CHECKIN_API_BASE_URL, checkin);
    }

    getCheckinById(checkinId){
        return axios.get(CHECKIN_API_BASE_URL + '/' + checkinId);
    }

    updateCheckin(checkin, checkinId){
        return axios.put(CHECKIN_API_BASE_URL + '/' + checkinId, checkin);
    }

    deleteCheckin(checkinId){
        return axios.delete(CHECKIN_API_BASE_URL + '/' + checkinId);
    }
}

export default new CheckinService()