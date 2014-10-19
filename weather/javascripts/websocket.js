/**
* Created with AP100-html5-Booklog.
* User: leonlin14
* Date: 2014-10-19
* Time: 03:12 AM
* To change this template use Tools | Templates.

* Make a jQuery Modules
*/
(function() {
    $.fn.createWebSocket = function() {
        var ws = new WebSocket("ws://deposit-simple.codio.io:3000/", "echo-protocol"); 
        ws.onopen = function(evt) {
            $('[data-status]').addClass('hide');
            $('[data-status="Success"]').removeClass('hide');
        };
        ws.onclose = function(evt) {
            $('[data-status]').addClass('hide');
            $('[data-status="Close"]').removeClass('hide');
        };
        ws.onerror = function(evt) {
            $('[data-status]').addClass('hide');
            $('[data-status="Error"]').removeClass('hide');
        };
        ws.onmessage = function(evt) {
            var messages = JSON.parse(evt.data);
			$('#chatTemplate')
				.tmpl(messages.reverse().slice(0, 1))
				.appendTo('#content');
        };
    };
}) ();