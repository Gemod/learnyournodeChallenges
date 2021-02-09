const fs =require('fs');

const fileName=process.argv[2];

fs.readFile(fileName,'utf8',function(err,data){
  if(err)
  {
    return console.log(err);
  }
let lines = data.split('\n').length-1;
console.log(lines);
});
