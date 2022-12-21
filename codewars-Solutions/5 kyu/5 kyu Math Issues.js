Math.round = function(number) {
    if(isNaN(Number(number))) return NaN;
    let [int, float = '00'] = String(number).split('.');
    float = float.length < 2 ? float+'0' : float.slice(0,2);
    if(Number(float) >= 50){
      int++;
    }
    return +int;
  };
  
  Math.ceil = function(number) {
    if(isNaN(Number(number))) return NaN;
    let [int, float] = String(number).split('.');
    if(!float) return +int;
    return ++int;
  };
  
  Math.floor = function(number) {
    if(isNaN(Number(number))) return NaN;
    let [int, float] = String(number).split('.');
    return +int;
  };