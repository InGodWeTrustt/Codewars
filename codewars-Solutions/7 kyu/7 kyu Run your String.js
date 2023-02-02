function runYourString(arg, obj) {
    const { param, func } = obj;
    return new Function(param, func)(arg, obj)
}

console.log(runYourString(true, {param: 'val', func: 'return val'}), true)