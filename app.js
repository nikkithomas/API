$(document).ready(function(){
	$('#term').focus(function(){
		var full=$("#ratings").has("").lenth?true:false;
		if(full==false){
			$('#ratings').empty();
		}
	});

	var getRatings=function(){
		var rate=$('#term').val();

		if(rate==''){
			$('#ratings').html("<h2 class='loading'>Please enter a movie title.</h2");

		}else{
		
			$.getJSON("https://api.themoviedb.org/3/movie/550/images?api_key=d2fa4629145232e5d18b759c1d3e0e47&language=en&include_image_language=en,null" +rate+ "&callback=?", function(json){
				if(json.length>0){
					$('#ratings').html('<h2 class="loading">We found ratings.</h2><img src=' + json.posters+'/');
				} else {
					$('#ratings').html('<h2 class="loading">We could not find anything</h2>');
				}
			});
		}
		return false;
	}

$('#search').click(getRatings);
$('#term').keyup(function(event){
	if(event.keyCode==13){
		getRatings();
	}
});


});