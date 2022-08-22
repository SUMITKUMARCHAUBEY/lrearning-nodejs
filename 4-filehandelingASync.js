console.log('start')
const {readFile , writeFile}=require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result,'\n')

const first=result

readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result);

const second= result

writeFile('./content/result-async.txt',`here is the result:${first}, ${second} \n`,{flag:'a'},(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log('compleated task')
})

})
})
console.log('starting new task')