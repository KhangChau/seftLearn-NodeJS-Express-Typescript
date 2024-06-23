const { log } = require('console');
const os = require('os');

const userInfo = os.userInfo();
console.log(userInfo);

// method return the system uptime
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);