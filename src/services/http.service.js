import AppSettings from '../common/app.settings';


export default class HTTPService {

    static get(query) {
        return fetch(AppSettings.BASE_URL + query)
            .then((res) => {
                if (/^2/.test(res.status)) {
                    return Promise.resolve(res.json());
                } else {
                    return Promise.reject(new Error(`${res.status} - ${res.statusText}`))
                }
            });
    }
}
