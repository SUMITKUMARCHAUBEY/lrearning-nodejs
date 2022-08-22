const os= require('os')
//user info
const user=os.userInfo()
console.log(user)


//system uptime in seconds
console.log(`the system uptime in sec ${os.uptime}`)

//
const currentOS={
    name:os.type(),
    release:os.release(), 
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentOS);