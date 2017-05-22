import axios from 'axios';

export function login(data) {
    return dispatch => {
        // return axios.post('/api/auth', data).then(res => {
        //     const token = res.data.token;
        // }, console.log('reject'));

        return axios.get({
            method: 'get',
            url: 'https://cloud-api.yandex.net/v1/data/app/databases/users/?name=newUser',
            headers: {'Authorization ': 'bc76d06ee4ec4c30ac2e55da8085adc8'}
        })
    }
}