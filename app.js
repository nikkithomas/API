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
			$('#ratings').html("<h2 class='loading'>Your ratings are coming!</h2>");
			$.getJSON("http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=nhrg4r4r9wnp6ce46efr2cg&q="+rate+"3&page_limit=1?apikey=4nhrg4r4r9wnp6ce46efr2cg"/+rate+"&callback=?",function(json){
				if(json.length>0){
					$('#ratings').html('<h2 class="loading">We found ratings.</h2><span id="theRatings" src=' + json[0].ratings+'</span>');
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