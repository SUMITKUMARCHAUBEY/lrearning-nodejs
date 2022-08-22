//globals -no windows
//__dirname -path to the current directory
//__filename - file name
//require - function to use module
//module - info about the current module(file)
//process - info about env where the program is being exicuted.

// console.log("hello world");
// setInterval(() => {
//     console.log(__dirname)
// })

const jhon='jhon';
const peter='peter';
const akash='akash';
module.exports={jhon,peter};

const car=["aulto","800","audi","bmw"]
car.forEach((e,index)=>{
    console.log(car[index]);
})