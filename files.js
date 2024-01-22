const fs= require('fs');

// fs.readFile('./docs/example.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// console.log("I ran at the very end !")

// fs.writeFile('./docs/example.txt','hello file',()=>{
//     console.log("file was written")
// })

fs.readFile('./docs/example.txt',(err,data)=>{
    if(err){
        console.log("err",err)
    }
    console.log("data",data.toString())
})