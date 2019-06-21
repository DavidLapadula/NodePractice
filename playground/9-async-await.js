const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a === 0 || b === 0 ) {
                return reject('Number cannot be zero')
            }; 
            resolve(a + b);
        }, 2000);
    });
};

const doWork = async () => {
    const sum = await add (1, 99); 
    const sum2 = await add (sum, 0); 
    return sum2; 
}; 

doWork()
    .then((res) => {
        console.log('res', res);
    })
    .catch((e) => {
        console.log(e);
    });