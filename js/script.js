function generateDivs(file) {
	return $('<div class="item" id="' + file + '"><img src="images/' + file + '.jpg"></div>');
/**
	return _.map(files, function(file) { 
		return $('<div class="item" id="' + file + '"><img src="images/' + file + '.jpg"></div>')[0]; 
	});
**/
}

var files = ['test1','test2','test3','test4','test5','test6','test7'];

var home = true;
$(function(){
	$('#container').masonry({
		itemSelector : '.item',
		isAnimated: true,
		columnWidth: 240,
		animationOptions: {
			duration: 200,
			queue: false
		}
	});
	for(var i = 0; i < files.length; i++) {
		var div = generateDivs(files[i]);
		$('#container').append(div).masonry('appended', div);
	}
	$('#container2').masonry({
		itemSelector : '.item',
		isAnimated: true,
		columnWidth: 10,
		animationOptions: {
			duration: 200,
			queue: false
		}
	});
	$(".item").click(function() {
		if (home) {
			for(var i = 0; i < files.length; i++) {
				var div = generateDivs(files[i]);
				$('#container2').append(div).masonry('appended', div);
			}
			$('#container').toggle();
			load_markdown('markdown/' + this.id + '.md', $(".span10"));
		}
		home = false;
	});
});
