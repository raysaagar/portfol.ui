var titlesArray = new Array();

var view = 'home';
var canClick = true;

/* MARKDOWN CONVERSION WITH SHOWDOWN */

// create a new Showdown converter for the .MD to .HTML
var converter = new Showdown.converter();

/*********************************************************************************
 * map
 *   |--> data
 *     |--> mdfile (this is the markdown file we want)
 *     |--> div    (this is the div we want to fill with the converted markdown)
 *********************************************************************************/
function load_markdown(map){
    load_markdown(map.data.mdfile, map.data.div);
};

function load_markdown(mdfile, div){
    $.get(mdfile, {"_" : $.now()} , function(data) {
        convert_markdown(data, div);
    });
};

function convert_markdown(mdcontents,div) {
    div.html(converter.makeHtml(mdcontents));
}

/* TILE HANDLING */

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
		} else if (view == this.id) {
		} else {
			view = this.id;
			// We don't need to wait for anything to load
			load_markdown('markdown/' + view + '.md', $('#container'));
			// Get the Missing File
			var missFile = getMissingFile('#container2');
			if (missFile) {
				$('#container2').isotope('remove', $('#container2 #' + view))
								.isotope('insert', generateDiv(missFile));
			}
		}
	});
}

/**
 * Generates the String for creating a div
 */

function genDivStr(ele) {
	return '<div class="item" id="' + ele + '" title="' + titlesArray[ele] + '"><img src="images/' + ele + '.jpg"></div>'
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

function generateDivFromLoc(loc) {
	var fileName = loc.split('images/')[1].split('.jpg')[0];//.split(".jpg")[0];
	var item = genDivStr(fileName);
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
	clear('#container');
	clear('#container2');
	$('#container').html("");
	// fill in the container with the files
	fill('#container', "");
	// remove all items in side bar container
	// set view to home
	view = 'home';
	// toggle back container to not showing markdown
	$('#container').removeClass('markdown');
}

function preload(loc) {
    $('<img/>').attr({ src : loc }).load(function(image) {
		$('#container').isotope('insert', generateDivFromLoc($(this).attr('src')));
    });
}

// Usage:
$(function(){
    // generate associative titles array for tooltips
    for(var i=0;i<files.length;i++){
        titlesArray[files[i]] = titles[i];
    }


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
			duration: 400,
			queue: false
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
	var images = _.map(files, function(ele) {
		return 'images/' + ele + '.jpg';
	});
	_.each(images, function(loc) {
		preload(loc);
	});
    $(".item isotope-item").tipTip({maxWidth: "auto", edgeOffset: 10});
});