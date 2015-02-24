var lineReader = require('line-reader'),
    readline = require('readline'),
    columns,
    rowNumber = 0;

var csvFileObj = {
    sum: function(columnName) {
        var sum = 0;
        for(var row in csvFileObj) {
            sum += parseInt(csvFileObj[row].id);
        }
        return sum;
    }
};

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


lineReader.eachLine('./problem.csv', function(line, last) {
    lineArr = line.split(",");
    if (!rowNumber) {
        columns = lineArr;
    } else {
        var curruntRow = csvFileObj[rowNumber] = {};

        for (var i = 0; i < lineArr.length; i++) {
            curruntRow[columns[i]] = lineArr[i];
        };
    }
    rowNumber++;
    if (last) {
        var query, stop = false;

        rl.question("query> ", function(answer) {
            //todo get first word
            var command = answer.toUpperCase();
            if (command === "SELECT") {

            } else if (command === "SUM") {
                console.log(csvFileObj.sum());
            } else if (command === "SHOW") {
                console.log(columns);
            } else if (command === "FIND") {

            } else if (command === "STOP") {
                rl.close();
            } else {
                console.log(command + " is not supported!");
            }
        });
    }
});


