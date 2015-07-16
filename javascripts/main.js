$('#form').submit(function (event) {
	var username = $("input:first").val();
	$("#output").html("<p id=\"output\">Checking...</p>");
	event.preventDefault();

	console.log(username);

	
	$.getJSON('http://whateverorigin.org/get?url=' + url+path +'&callback=?',
        function (data) {
		console.log(data.contents.id);
		var pathy = '/user/profiles/' + data.contents.id + '/names';
		$.getJSON('http://whateverorigin.org/get?url=' +url+pathy+'&callback=?', function (data2){
			var nameArr = data2.contents;
			console.log(nameArr);
			$("#output").html("<p id=\"output\"><h4>Usernames:</h4></p>");
       		nameArr.forEach(function(profileObj){
	   	   		console.log(profileObj.name);
	   	   		$("input:first").val("");
	   	   		$("#output").append('<h5>' + profileObj.name + "</h5>");
   			});
		});
	});
});