const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise 1 resolvida'), 1000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise 2 resolvida'), 500)
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise 3 resolvida'), 100)
});

Promise.all([promise1, promise2, promise3])
.then((message) => {
    console.log(message)
})
Promise.race([promise1, promise2, promise3])
.then((message) => {
    console.log(message)
})