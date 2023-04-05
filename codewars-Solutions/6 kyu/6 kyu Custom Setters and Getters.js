function Archiver() {
    var temperature = null;
    var archive = [];
    Object.defineProperty(this, 'temperature', {
        get() {
            return temperature;
        },
        set(value) {
            temperature = value;
            const output = {
                date: new Date(),
                val: temperature
            }
            archive.push(output);
        }
    })
    this.getArchive = function () { return archive; };
}


// Example
var arc = new Archiver();
arc.temperature = 33;
arc.temperature = 28;
arc.temperature = 21;
console.log(arc.getArchive())
/**
 [
  { date: 2023-04-05T17:05:35.769Z, val: 33 },
  { date: 2023-04-05T17:05:35.769Z, val: 28 },
  { date: 2023-04-05T17:05:35.769Z, val: 21 }
]
 */