var files = ['test1','test2','test3','test4','test5','test6','test7'];

var view = 'home';

var canClick = true;

function generateDivs(id) {
	var str_divs = _.foldl(files, function(memo, ele) { 
		if (ele != id) {
			var str = '<div class="item" id="' + ele + '"><img src="images/' + ele + '.jpg"></div>';
		} else {
			var str = ""
		}
		return memo + str;
	}, "");
	return $(str_divs).click(function() {
		if (!canClick)
			return;
		var callback_method = function() { 
			load_markdown('markdown/' + view + '.md', $('#container'));
			reload('#container2');
		};
		if (view == 'home') {
			view = this.id;
			clear('#container', callback_method);
			fill('#container2', view);
		} else {
			view = this.id;
			callback_method();
			var missFile = getMissingFile('#container2');
			if (missFile)
				$('#container2').isotope('insert', generateDiv(missFile))
							.isotope('remove', $('#container2 #' + view));
		}
	});
}

function generateDiv(file) {
	var item = $('<div class="item" id="' + file + '"><img src="images/' + file + '.jpg"></div>');
	item.click(function() {
		if (!canClick)
			return;
		if (view == 'home') {
			clear('#container', function() { 
				load_markdown('markdown/' + view + '.md', $('#container'));
				reload('#container2');
			});
			fill('#container2', this.id);
		} else {
			var missFile = getMissingFile('#container2');
			if (missFile)
				$('#container2').isotope('insert', generateDiv(missFile))
							.isotope('remove', $('#container2 #' + this.id));
		}
		view = this.id;
	});
	return item;
}

function clear(container, callback) {
	var s = container + ' .item';
	$(container).isotope('remove', $(s), callback);
}

function reload(container) {
    /* update css for masonry container */
    
    // set height and overflow
    $('#container').css({'background': 'rgba(54,25,25)', 'background': 'rgba(0,0,0,.6)'});
    $('#container').css({'color':'#B1BBB2'});
    $(".isotope").css({'height': '500px', 'overflow': 'auto'});
    // set background with transparency, rbg for fall back
    //$(".masonry").css({'background': 'rgba(54,25,25,.6)', 'background': 'rgba(54,25,25)'});
    
}

function getMissingFile(container) {
	var s = container + ' .item';
	var not_removed = _.filter($(s), function(ele) { return ele.style.opacity == 1; })
	var ids = _.map(not_removed, function(ele) { return ele.id });
	for (i in files) {
		var file = files[i];
		var contains_file = _.foldl(ids, function(memo, ele) { return memo || (ele == file)}, false );
		if(!contains_file) {
			return file;
		}
	}
}

function fill(container, id, callback) {
	$(container).isotope('insert', generateDivs(id), callback);
}

function refresh() {
	fill('#container', "");
	clear('#container2');
	view = 'home';
}

/**
 * Fire after DOM load
 *
 **/

$(function(){
	$('#container').isotope({
		itemSelector : '.item',
	    getSortData : {
            name : function($elem) {
		        return $elem.attr('id');
            }
        },
        sortBy : 'name',
        layoutMode : 'masonry',
		animationOptions: {
			height: 'toggle'
        }
	});
	$('#container2').isotope({
		itemSelector : '.item',
	    getSortData : {
            name : function($elem) {
		        return $elem.attr('id');
            }
        },
        sortBy : 'name',
        layoutMode : 'masonry',
		animationOptions: {
			duration: 200,
			easing: 'linear',
			queue: false
        }
	});
	refresh();
});
