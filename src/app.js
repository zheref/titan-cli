
//noinspection JSUnresolvedVariable
module.exports = function(args) {
    //noinspection JSUnresolvedFunction
    var fs = require('fs'),
        sn = args[2];

    console.log("Hello mundo 2 " + sn);
    //noinspection JSUnresolvedFunction
    fs.writeFile(sn + '.txt', "Hello to our world " + sn);
};