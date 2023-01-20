function updateAccounts(accounts, logons) {

    let parseAcc = accounts['Accounts'];
    let parseLog = logons['Logons'];

    parseLog.sort((a, b) => a['Date'] - b['Date'])

    console.log(parseLog)
  
    parseLog.forEach(user => {
        const { Id, Name, Date } = user;
        const ourUser = parseAcc.find(user => user.Id === Id);

        if (ourUser) { // if we find our user in accounts database

            // we increase logon count by 1
            ourUser['LogonCount']++;

            if (Date - ourUser['LastLogon'] > 0) {
                Name && (ourUser['Name'] = Name);
                ourUser['LastLogon'] = Date;
            }

        } else {
            // we create new User
            user['LogonCount'] = 1;
            user['LastLogon'] = Date;
            delete user['Date']
            parseAcc.push(user)
        }
    })

    //sort array in ascending order
    parseAcc.sort((a, b) => a['Id'] - b['Id'])

    return { "Accounts": parseAcc }
}




var logons = {
    "Logons": [
        {
            "Id": 21,
            "Name": "John F. Shepherd",
            "Date": new Date(2017, 1, 24, 22, 13, 16, 241)
        },
        {
            "Id": 5,
            "Name": "Test",
            "Date": new Date(2017, 1, 14)
        },
        {
            "Id": 5,
            "Name": "Test New",
            "Date": new Date(2017, 1, 15)
        },{
            "Id": 5,
            "Name": "",
            "Date": new Date(2017, 1, 20)
        }
    ]
};
var accounts = {
    "Accounts": [
        {
            "Id": 21,
            "Name": "John Shepherd",
            "LogonCount": 13,
            "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
        },
    ]
};

console.log(updateAccounts(accounts, logons));