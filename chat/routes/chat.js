/**
* Created with AP100-html5-Booklog.
* User: leonlin14
* Date: 2014-10-18
* Time: 05:47 AM
* To change this template use Tools | Templates.
*/


/*
 * GET chat messages
 */

var history = [];

exports.start = function(req, res){
    var json;
    
    json = {
        data: history
    };
    
    res.send(json);
};

/*
 * POST chat message
 */

exports.send = function(req, res){
    var msg = req.params.message;
    var obj = {};
    var milliseconds = new Date().getTime();
    
    obj.message = msg;
    obj.timestamp = milliseconds;
    
    history.push(obj);
    
    res.send("Receive message: " + msg);
};