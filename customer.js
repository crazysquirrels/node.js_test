var fs = require('fs');
var readline = require('readline');

function processFile(filename){
    
    var instream = fs.createReadStream(filename);
    var reader = readline.createInterface(instream, process.stdout);
    
    var count = 0;
    
    //open files
    reader.on('line', function(line){
        
        console.log('a line processed :' + line);
        count += 1;
        
        //clarifying with blanks
        var tokens = line.split(' ');
        if(tokens != undefined && tokens.length > 0){
            console.log('#' +count + '->' + tokens[0]);
        }
    });
    
    //close files
    reader.on('close', function(line){
        console.log('All files closed');
    });
}

var filename = './customer.txt';
processFile(filename);