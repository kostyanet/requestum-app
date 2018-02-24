class HTTPService {
    BASE_URL = 'http://localhost:8080/';

    get(query) {
        return fetch(this.BASE_URL + query)
            .then((res) => {
                if (/^2/.test(res.status)) {
                    return Promise.resolve(res.json());
                } else {
                    return Promise.reject(new Error(`${res.status} - ${res.statusText}`))
                }
            });
    }
}


const httpService = new HTTPService();
export default httpService;
