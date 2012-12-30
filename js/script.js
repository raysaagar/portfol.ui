var files = ['test1','test2','test3','test4','test5','test6','test7'];

var view = 'home';

function generateDivs(file) {
	return $('<div class="item" id="' + file + '"><img src="images/' + file + '.jpg"></div>');
}

function clear(container) {
	var s = container + ' .item';
	var divs = $(s);
	for(var index in $(s)) {
		var div = divs[index].id;
		$(container).masonry('remove', $(container + ' #' + div));
	}
}

function reload(container) {
	$(container).masonry('reload');	
    
    /* update css for masonry container */
    
    // set height and overflow
    $(".masonry").css({'height': '500px', 'overflow': 'auto'});
    // set background with transparency, rbg for fall back
    $(".masonry").css({'background': 'rgba(54,25,25,.6)', 'background': 'rgba(54,25,25)'});
    $("#container").css({'background': 'rgba(54,25,25,.6)', 'background': 'rgba(54,25,25)'});
    
}

function fill(container, id) {
	for(i in files) {
		var file = files[i];
		if (file != id) {
			var div = generateDivs(file);
			$(container).append(div).masonry('appended', div);
		}
	}
}

function rebind() {
	$(".item").click(function() {
		if (view == 'home') {
			clear('#container');
		} else {
			clear('#container2');
		}
		fill('#container2', this.id);
		reload('#container2');
		view = this.id;
		rebind();
		load_markdown('markdown/' + view + '.md', $('#container'));
	});
}

/**
 * Fire after DOM load
 *
 **/

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
	fill('#container', "");
	$('#container2').masonry({
		itemSelector : '.item',
		isAnimated: true,
		columnWidth: 10,
		animationOptions: {
			duration: 200,
			queue: false
		}
	});
	rebind();
});
