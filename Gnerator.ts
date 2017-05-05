/**
 * Created by xiaoyunhuan on 2017/5/5.
 */
async function fn(args) {
}

function spawn(genF) {
    return new Promise(function(resolve, reject) {
        var gen = genF();
        function step(nextF) {
            try {
                var next = nextF();
            } catch(e) {
                return reject(e);
            }
            if(next.done) {
                return resolve(next.value);
            }
            Promise.resolve(next.value).then(function(v) {
                step(function() { return gen.next(v); });
            }, function(e) {
                step(function() { return gen.throw(e); });
            });
        }
        step(function() { return gen.next(undefined); });
    });
}

function logInOrder(urls) {
    // 远程读取所有URL
    const textPromises = urls.map(url => {
        return fetch(url).then(response => response.text());
    });

    // 按次序输出
    textPromises.reduce((chain, textPromise) => {
        return chain.then(() => textPromise)
            .then(text => console.log(text));
    }, Promise.resolve());
}