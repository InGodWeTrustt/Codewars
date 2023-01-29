function searchNames( logins ){
    return logins.filter(([loginName, email]) => loginName.endsWith('_'))
  }


// Example
const a = [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ];
console.log(searchNames(a)); // [ [ 'bar_', 'bar@bar.com' ] ]