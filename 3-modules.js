// Modules
// CommonJS, every files is module (by default)
// Modules - Enscapsulated Code (only shared minimum)

const Pete = 'Pete';
const Andy = 'Andy';

const { Bob, John } = require('./4-name')
const sayHi = require('./5-utils')
const { a } = require('./7-mind-grenade')

sayHi('Susan');
sayHi(Pete);
sayHi(Andy);
sayHi(Bob);
sayHi(John);
