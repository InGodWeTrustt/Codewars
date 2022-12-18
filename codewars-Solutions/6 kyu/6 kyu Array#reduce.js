Array.prototype.reduce = function(process, initial) {
    if(!this.length && typeof initial !== 'undefined') return initial;
    
    let res;
    let i = 0;
    
    if(typeof initial === 'undefined'){
      initial = this[0];
      i = 1;
    }
    
     for(i; i < this.length; i++){
       res = process(initial, this[i], i, this);
       initial = res; 
     }
    
    // console.log({this:this, initial, func: process.toString()})
    return res
  }