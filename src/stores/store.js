import {action, extendObservable, toJS} from 'mobx';
import httpService from '../services/http.service';



class Store {

    _buffer     = null;
    _counter    = 0;
    _isEnd      = false;
    _isPending  = false;
    _pageNum    = 0;

    PAGE_LEN    = 4;

    constructor(httpService) {
        this.httpService = httpService;

        extendObservable(this, {
            isLoading:  false,
            list:       [],
            // get activeItem() {
            //     return this.activeIndex != null ? this.items[this.activeIndex] : null;
            // },
            // activeIndex: null,
            // items: StorageService.get() || fakeItems,
        });
    }


    getList = () => {
        this._isPending = true;

        this._getChunk()
            .then(action.bound(res => {
                let entities = res.body.entities;

                if (entities) this.list = this._setItemId(entities);
            }))
            .catch(this._onError);
    };


    _getChunk() {
        return this.httpService.get(`inventory?page=${++this._pageNum}&per_page=${this.PAGE_LEN}`);
    };


    _onSuccess = action.bound(res => {
        debugger

        this.loadMore();
    });


    _onError = action.bound( err => console.error(`HTTPService Error: ${err.message}`) );


    _fillBuffer = (arr) => {
        this._buffer = this._setItemId(arr);
    };


    _setItemId(arr) {
        arr.forEach(item => item.id = String(Date.now()));
        return arr;
    }


    _useBuffer = action(() => {
        if (!this._buffer) return;

        this.list.splice(this.list.length, 0, ...this.buffer);
        this._buffer = null;
    });




}



const store = new Store(httpService);
export default store;
