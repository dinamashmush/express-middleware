const fs = require('fs');

function getMiddleware(req, res, next) {

    const jsonFile = JSON.parse(fs.readFileSync("../middle-ground/info.json"));
    req.jsonData = jsonFile;



    next();
}

module.exports = getMiddleware;