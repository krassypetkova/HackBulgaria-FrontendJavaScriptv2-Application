var fs = require('fs'),
    request = require('request');

function getLevel(level) {
    if(level === 1) {
        return "INFO"
    } else if(level === 2) {
        return "WARNING";
    } else if(level === 3) {
        return "PLSCHECKFFS";
    } else {
        console.log("Level value is not correct.")
    }
}

var consoleLogger = {
    log: function(level, message) {
        console.log(getLevel(level) + "::" + new Date().toISOString() + "::" + message);
    }
};

consoleLogger.log(1, "Something beautiful is happening here!");
consoleLogger.log(2, "Entity saved!");
consoleLogger.log(3, "Entity not saved!");

console.log("================================================================");

var fileLogger = {
    log: function(level, message) {
        var fileContent = getLevel(level) + "::" + new Date().toISOString() + "::" + message;

        fs.writeFile('./fileLogger' + level +'.txt',  fileContent, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("File was saved correctly.");
            }
        });
    }
}

fileLogger.log(1, "Something beautiful is happening here!");
fileLogger.log(2, "Entity saved!");
fileLogger.log(3, "Entity not saved!");

console.log("================================================================");

var httpLogger = {
    log: function(level, message) {
        var rqstContent = getLevel(level) + "::" + new Date().toISOString() + "::" + message;

        request.post('http://www.yoursite.com/formpage',
            { content:  rqstContent},
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body)
                }
            }
        );
    }
}

httpLogger.log(1, "Something beautiful is happening here!");
httpLogger.log(2, "Entity saved!");
httpLogger.log(3, "Entity not saved!");
