/**
logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> undefined
 */

function once(fn) {
    let count = 0;
    return (...arg) => {
        if (count > 0) {
            return
        } else {
            count++;
            return fn.length === 0 ? fn.apply(null, arg) : fn(...arg)
        }
    };
}

let on = once(console.log)

on('foo') // foo
on('bar') // undefined
