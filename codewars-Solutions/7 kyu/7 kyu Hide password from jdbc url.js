function hidePasswordFromConnection(url) {
    return url.replace(/(?<=password=)[^&]*/g, match => '*'.repeat(match.length));
}

const url = 'jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345&user'
console.log(hidePasswordFromConnection(url)); //jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=*****&user

