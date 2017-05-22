import axios from 'axios';

export function userSignUpRequest(userData) {
    return () => {
        //return axios.post('/api/users/', userData)
        axios.get('https://cloud-api.yandex.net/v1/data/app/databases/users/?name=newUser', {
            headers: {"Authorization":"OAuth AQAAAAAeCSXPAARE3p83IRDoB0wps7WeB61MmlM"}
        })
    }
}