const figlet = require('figlet')
const colors = require('colors')

figlet('hello world',function(err,data){
    if (err){
        console.log("oops")
        console.log(err)
        return;
    }
    console.log(data.green)
})