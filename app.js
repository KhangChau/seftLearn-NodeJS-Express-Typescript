// npm -- global commandd, come with come

// local dependencies - use it only in this particular project
// npm i <packageName>

// global dependencies - use in any projects
// npm install -g <packageName>

// package.json - manifest files (store imports info about the project)
// npm init or npm init -y


// example of lodash module 
const _ = require('lodash')

const items = [1, [2, [3, [4]]]];
const handleItems = _.flatMapDeep(items);
console.log(handleItems);

console.log("something");