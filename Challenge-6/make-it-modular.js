var mod = require('./mymodule');
const dirPath = process.argv[2];
const ext = `.${process.argv[3]}`;
mod(process.argv[2], process.argv[3], function (err, result) {
    if (err) {
        console.log('Error!')
    } else {
        for (var i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    }
});
