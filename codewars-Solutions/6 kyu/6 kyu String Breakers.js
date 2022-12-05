/**
 * Example: 

N = 5;

String = "This is an example string";

Return value:
Thisi
sanex
ample
strin
g

Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'
 */


function stringBreakers(n, string){
    return string.replace(/\s+/g, '').match(new RegExp(`.{1,${n}}`, 'g')).join('\n');
  }


console.log(stringBreakers(5, 'This is an example string'));  //'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'