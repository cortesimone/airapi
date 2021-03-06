var request = require('request');

function myrequest (requestConfigs, callback) {
    request(requestConfigs, function(err, res, body) {

        if (err) {
            console.log(res);
            console.log(body);
            callback (true, "ERR");
            return;
        }

        if (!err) {
            if (res.statusCode == 200) {
                try {
                  var data = JSON.parse(body);
                  //console.log("Parse: success");
                  callback (false, data);
                }
                catch (ex) {
                   console.log("JSON parse exception. Body: " + body);
                   callback (true, "200-JSONparseError");
                }
            }
            else {
                callback (true, res.statusCode);
            }
        }
   });
}

module.exports.myrequest = myrequest;