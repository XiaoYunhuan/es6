/**
 * Created by xiaoyunhuan on 2017/5/5.
 */
//start
// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done');
//     });
// }
// timeout(3000).then((value) => {
//     console.log(value);
// });

//Promise内立即执行
// let promise1 = new Promise(function(resolve, reject) {
//     console.log('Promise');
//     resolve();
// });
// promise1.then(function() {
//     console.log('Resolved.');
// });
// console.log('Hi!');

//
// var p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('fail')), 3000)
// });
//
// var p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(p1), 1000)
// });
//
// p2.then(result => console.log(result))
//     .catch(error => console.log(error));
//
// var promise2 = new Promise(function(resolve, reject) {
//     resolve('ok');
//     //setTimeout(function() { throw new Error('test') }, 0)
// });
// promise2.then(function(value) { console.log(value) });
//
// var someAsyncThing = function() {
//     return new Promise(function(resolve, reject) {
//         // 下面一行会报错，因为x没有声明
//         resolve(x + 2);
//     });
// };
//
// someAsyncThing()
//     .catch(function(error) {
//         console.log('oh no', error);
//     })
//     .then(function() {
//         console.log('carry on');
//     });

const f = () => console.log('now');
// (function(){
//     return new Promise(
//         function(resolve){
//             return resolve(f());
//         }
//     )
// })();
function logInOrder(urls) {
    // 远程读取所有URL
    const textPromises = urls.map( function (url){
        return fetch(url).then(function(response){
            return response.text();
        });
    });

    // 按次序输出
    textPromises.reduce((chain, textPromise) => {
        return chain.then(() => textPromise)
            .then(text => console.log(text));
    }, Promise.resolve());
}