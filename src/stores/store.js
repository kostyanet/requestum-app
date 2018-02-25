import {action, extendObservable} from 'mobx';

import AppSettings from '../common/app.settings';
import HTTPService from '../services/http.service';



class Store {

    _buffer     = null;
    _isPending  = false;
    _pageNum    = 0;
    _total;

    constructor(httpService) {
        this.httpService = httpService;

        extendObservable(this, {
            isLoading:  false,
            list:       [],
            get isEnd() {
                return this._total === this.list.length;
            }
        });
    }


    getList = () => {
        this.isLoading = true;

        this._getChunk()
            .then(action.bound(res => {
                let entities = res.body.entities;

                this._total = res.body.total;
                this.isLoading = false;

                if (entities) this.list = this._setItemId(entities);

                this.loadMore();
            }))
            .catch(this._onError);
    };


    _getChunk() { return this.httpService.get(`inventory?page=${++this._pageNum}&per_page=${AppSettings.PAGE_LEN}`); };


    loadMore = action('loadMore', () => {
        this._buffer && this._useBuffer();

        if (this.isEnd) return;

        if (this._isPending) {
            this.isLoading = true;
            return;
        }

        this._isPending = true;

        this._getChunk()
            .then(this._onSuccess)
            .catch(this._onError);
    });


    _onSuccess = action.bound(res => {
        this._isPending = false;
        this._fillBuffer(res.body.entities);

        if (this.isLoading) this.loadMore();

        this.isLoading = false;
    });


    _onError = action.bound( err => console.error(`HTTPService Error: ${err.message}`) );


    _fillBuffer = (arr) => this._buffer = this._setItemId(arr);


    _setItemId(arr) {
        arr.forEach( item => item.id = Math.random().toString(36).substr(2) );
        return arr;
    }


    _useBuffer = action(() => {
        if (!this._buffer) return;

        this.list.splice(this.list.length, 0, ...this._buffer);
        this._buffer = null;
    });

}


const store = new Store(HTTPService);
export default store;
