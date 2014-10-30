$(document).ready(function(){
	$('#term').focus(function(){
		var full=$("#images").has("img").lenth?true:false;
		if(full==false){
			$('#images').empty();
		}
	});

	var getImages=fuction(){
		var image=$('#term').val();

		if(film==''){
			$('#images').html("<h2 class='loading'>Please enter an actor or an actress.</h2");

		}else{
			$('#images').html("<h2 class='loading'>Your image is coming!</h2>");
			$.getJSON("")
		}
	}




})