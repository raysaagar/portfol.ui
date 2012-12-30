var files = ['test1','test2','test3','test4','test5','test6','test7'];

var view = 'home';

var canClick = true;

/**
 * Binding on Click to an item
 * Contains most of the logic
 */

function bindItemClick(items) {
	return items.click(function() {
		if (view == 'home') {
			view = this.id;
			// We need to wait for all elements to have been removed
			clear('#container', function() { 
				load_markdown('markdown/' + view + '.md', $('#container'));
				$('#container').addClass('markdown');
			});
			fill('#container2', view);
		} else {
			view = this.id;
			// We don't need to wait for anything to load
			load_markdown('markdown/' + view + '.md', $('#container'));
			// Get the Missing File
			var missFile = getMissingFile('#container2');
			if (missFile)
				$('#container2').isotope('insert', generateDiv(missFile))
							.isotope('remove', $('#container2 #' + view));
		}
	});
}

/**
 * Generates the String for creating a div
 */

function genDivStr(ele) {
	return '<div class="item" id="' + ele + '"><img src="images/' + ele + '.jpg"></div>'
}

/**
 * Generates Divs for all of files except for id
 */

function generateDivs(id) {
	var str_divs = _.foldl(files, function(memo, ele) { 
		if (ele != id) {
			var str = genDivStr(ele);
		} else {
			var str = ""
		}
		return memo + str;
	}, "");
	return bindItemClick($(str_divs));
}

/**
 * Generates a Div for a file
 */
function generateDiv(file) {
	var item = genDivStr(file);
	return bindItemClick($(item));
}

/**
 * Removes all items inside a container
 */

function clear(container, callback) {
	var s = container + ' .item';
	$(container).isotope('remove', $(s), callback);
}

function reload(container) {
}

/**
 * Find the missing file in the items. There will be one item that is missing when in sidebar view.
 */

function getMissingFile(container) {
	var s = container + ' .item';
	var not_removed = _.filter($(s), function(ele) { return ele.style.opacity == 1; })
	var ids = _.map(not_removed, function(ele) { return ele.id });
	return _.difference(files, ids)[0];
}

/**
 * Filling in a container with all objects except for id
 * Set id = "" if you want to insert all items
 */ 

function fill(container, id, callback) {
	$(container).isotope('insert', generateDivs(id), callback);
}

/**
 * Go to Viewer
 */



/** 
 * Go to Home Page
 */

function goToHome() {
	// clean up markdown in container
	$('#container').html("");
	// fill in the container with the files
	fill('#container', "");
	// remove all items in side bar container
	clear('#container2');
	// set view to home
	view = 'home';
	// toggle back container to not showing markdown
	$('#container').removeClass('markdown');
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
			duration: 200,
			easing: 'linear'
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
	$('#icon').click(function() { goToHome(); });
	goToHome();
});
