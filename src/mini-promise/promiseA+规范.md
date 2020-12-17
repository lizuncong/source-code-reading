#### 术语
- `promise`是一个拥有`then`方法的对象或者方法
- `thenable` 是一个定义了 `then` 方法的对象或者函数
- `value` 是任意合法的javascript的值，包括 `undefined`、`thenable`、或者 `promise`
- `exception` 通过 `throw` 抛出来的异常
- `reason` 是一个描述 `promise` reject的原因


#### then方法
`promise`的 `then` 方法接收两个参数：
```js
promise.then(onFulfilled, onRejected)
```
- `onFulfilled` 和 `onRejected` 都是可选参数
    + 如果 `onFulfilled` 不是一个函数，则忽略
    + 如果 `onRejected` 不是一个函数，则忽略
- 如果 `onFulfilled` 是一个函数
    + `promise`状态更新为`fulfilled`时，就调用 `onFulfilled`方法，参数为 `promise` 的 `value`
    + `promise` 在状态 `fulfilled` 之前不能调用 `onFulfilled`方法。
    + `onFulfilled` 方法不能被多次调用
- rug
