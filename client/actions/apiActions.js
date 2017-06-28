import axios from 'axios';

export function getAction(request, data) {
    return dispatch => {
        return axios
            .get(`/api/v1/${request}`, {params: data})
            .then(res => {
                return res
            })
    }
}