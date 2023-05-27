/**
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
 */

function domainName(url) {
    try {
        const parsedURL = new URL(url);
        const parts = parsedURL.hostname.split('.');

        if (parts[0] === 'www') {
            parts.shift(); // removes the first element from an parts (удаляю первый элемент из массива)
        }

        return parts[0];
    } catch (error) {
        const parts = url.split('.');

        if (parts[0] === 'www') {
            parts.shift(); // removes the first element from an parts (удаляю первый элемент из массива)
        }

        return parts[0];
    }
}

// Тестовые примеры ()example test
console.log(domainName("http://google.com") === "google");
console.log(domainName("http://google.co.jp") === "google");
console.log(domainName("https://123.net") === "123");