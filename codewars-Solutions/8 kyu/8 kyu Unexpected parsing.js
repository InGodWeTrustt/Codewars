function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return {
        status: msg
    }
}

console.log(getStatus(true).status); // busy
console.log(getStatus(false).status); // available
