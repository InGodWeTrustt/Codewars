global.theWire = 0.03312873075236866;
CutTheWire(global[theWire]);

console.log(CutTheWire.toString()) // KEK
/**
function (wireCode){
    Test.expect(typeof wireCode === 'number', 'BOOM! You have to specify which wire to cut!');
    Test.expect(wireCode === global[theWire], 'BOOM! You cut the wrong wire!');
    delete this[theWire];
  }
 */
