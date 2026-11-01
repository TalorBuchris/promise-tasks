// part 1
// 1
function delayedGreet(name, delay) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("hello " + name)
        }, delay);
    })
}

delayedGreet("Talor", 3000).then((data) => { console.log(data) })

// 3
function randomOperation() {
    return new Promise((res, rej) => {
        let rand = Math.floor(Math.random() * 2);
        if (rand)
            res("Success");
        else
            rej("Failure");
    })
}

randomOperation().then((data) => {
    console.log(data);
}).catch((data) => {
    console.log(data);
})

// 4
function raceTimers() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Timer A finished!");
        }, 2000);
        setTimeout(() => {
            res("Timer B finished!");
        }, 3000);
    })
}

raceTimers().then((data) => {
    console.log(data);    
})

// 6
function waitAll() {
    let p1 = new Promise((res, rej) => {
        setTimeout(() => {
            res("first");
        }, 1000);
    });
    let p2 = new Promise((res, rej) => {
        setTimeout(() => {
            res("second");
        }, 2000);
    });
    let p3 = new Promise((res, rej) => {
        setTimeout(() => {
            res("third");
        }, 3000);
    });
    return Promise.all([p1, p2, p3]);
}

waitAll().then((results) => {
    console.log(results);
})

// part 2
// 8
function chainedGreetings(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, time);
    })
}

chainedGreetings(1000)
    .then(() => {
        console.log("Hi");
        return chainedGreetings(2000);
    })
    .then(() => {
        console.log("How are you?");
        return chainedGreetings(1000);
    })
    .then(() => {
        console.log("Goodbye!");
    });
