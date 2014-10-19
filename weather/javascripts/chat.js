/**
* Created with AP100-html5-Booklog.
* User: leonlin14
* Date: 2014-10-18
* Time: 07:05 AM
* To change this template use Tools | Templates.
*/
(function($) {
	$.ajax({
		dataType: 'json',
		url: 'http://deposit-simple.codio.io:3000/start',        
        success: function(response, jqXHR, textStatus) {
            //for (i = 0; i < response.data.length; i++) {
            //    response.data[i].timestamp = moment(response.data[i].timestamp).fromNow();
            //}
            
			$('#chatTemplate')
				.tmpl(response.data)
				.appendTo('#content');  
	    },
	    complete: function(jqXHR, textStatus) {
            // SPA Principle: MVC Architecture
            //  - Modify View instead of Model
            $('.timestamp').each(function() {
                var me = $(this);
                var timestamp = me.html();
                //alert(timestamp);
                
                me.html(moment(timestamp).fromNow());
            });
	    }
	});
}) ($);


