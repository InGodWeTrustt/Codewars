function toQueryString(obj) {
    const res = [];

    for (const prop in obj) {

        if (Array.isArray(obj[prop])) {
            // example [1, 2, ..., n] -> elem = 1 then elem = 2 .... elem = n
            obj[prop].forEach(elem => res.push(`${prop}=${elem}`));
        } else {
            res.push(`${prop}=${obj[prop]}`);
        }
    }

    return res.join('&');
}

console.log(toQueryString({ a: 'Z', b: 'Y', c: 'X', d: 'W', e: 'V', f: 'U', g: 'T' })) // 'a=Z&b=Y&c=X&d=W&e=V&f=U&g=T'