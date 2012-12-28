function generateDivs(files) {
	var file = files[0];
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
	for(file in files) {
		var divs = generateDivs(files);
		$('#container').append(divs).masonry('appended', divs);
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
			var items = $(".item").not(this);
			$('#container2').append(items).masonry('appended', items);
			$('#container').masonry('reload');
		}
		home = false;
	});
});
