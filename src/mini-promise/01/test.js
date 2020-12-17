const MiniPromise = require('./promise');

// let p = new MiniPromise((resolve, reject) => {
//     console.log('new一个promise')
//     resolve('success')
//     reject('reject..error')
// })
//
// p.then(res => {
//     console.log('p...res', res)
// }, err => {
//     console.log('p...err', err)
// })

let p = new MiniPromise((resolve, reject) => {
    console.log('new一个promise')
    setTimeout(() => {
        resolve('success')
        reject('reject..error')
    }, 0)
})

p.then(res => {
    console.log('p...res', res)
}, err => {
    console.log('p...err', err)
})
