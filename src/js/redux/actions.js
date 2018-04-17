/**
 * ./src/js/redux/actions.js
 */

import * as constants from './constants';
import * as query from './queries';

export const sendRequest = () => ({
    type: constants.SEND_REQUEST
});

export const recieveArticles = article => ({
    type: constants.RECIEVE_ARTICLES,
    payload: article
});

export const fetch_all_data = () => {
    return dispatch => {
        dispatch(sendRequest());

        const headers = {
            method: 'POST',
            body: JSON.stringify({ query: query.fetch_alls_query }),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return fetch('http://192.168.43.200:5000/graphql', headers)
            .then(resp => resp.json())
            .then(res => dispatch(recieveArticles(res)));
    };
};
