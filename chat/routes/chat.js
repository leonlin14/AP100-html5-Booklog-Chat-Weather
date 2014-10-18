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

exports.start = function(req, res){
    res.send("Start chatting: " + req.params.username);
};

/*
 * POST chat message
 */

exports.send = function(req, res){
    res.send("Receive message: " + req.params.username);
};