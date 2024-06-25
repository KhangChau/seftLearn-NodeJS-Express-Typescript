const a = 5;
const b = 10;

console.log(`a + b = ${a+b}`);

module.exports.a = a;
module.exports = { b };

// give a try to import a, b in another file, the log() will be involked at the time u require a, b