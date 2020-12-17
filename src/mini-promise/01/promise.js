// const { nextId } = require('../util');
const PENDING   = void 0;
const FULFILLED = 1;
const REJECTED  = 2;

let resolve = (promise, value) => {
    if(promise._state !== PENDING){ return }
    promise._result = value;
    promise._state = FULFILLED;
    if(promise._subscribers.length === 0) return;
    for(let i  = 0; i < promise._subscribers.length; i += 2){

    }
}

let reject = (promise, reason) => {
    if(promise._state !== PENDING) return;
    promise._state = REJECTED;
    promise._result = reason;
}
class MiniPromise{
    constructor(executor){
        // this.promiseId = nextId();
        this._result = this._state = undefined;
        this._subscribers = [];
        try {
            executor((value) => {
                resolve(this, value);
            }, (reason) => {
                reject(this, reason);
            });
        } catch(e) {
            reject(this, e);
        }
    }

    then(onFulfillment, onRejection){
        if(this._state){
            const callback = arguments[this._state - 1]
            //_state, child, callback, parent._result
            callback(this._result);
        } else {
            // parent, child, onFulfillment, onRejection
            this._subscribers[0] = onFulfillment;
            this._subscribers[1] = onRejection;
        }
    }
}


module.exports = MiniPromise;
