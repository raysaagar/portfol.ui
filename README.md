# Portfol.ui #
## Simple Portfolio System ##
#### A January Hack4Fun Project ####

### Project Members ###
* Saagar Deshpande (saagar at hcs.harvard.edu)
* Tony Ho (tonyho at college.harvard.edu)

### Introduction ###
Portfol.ui is an easy to use, simple to setup portfolio system. The portfolio consists of a series of boxes corresponding to a specific topic on the user's portfolio. The content behind the box is `Markdown`, converted to HTML by `showdown.js`. Box motion and flow is controlled by Isotope JS.

### Dependencies ###

#### Javascript ####
* [`jQuery 1.7.2`](http://jquery.com/)
* [`jQuery Isotope`](http://isotope.metafizzy.co/)
* [`Underscore.js`](http://underscorejs.org/)
* [`Showdown.js`](https://github.com/coreyti/showdown)
* [`tipTip`](http://code.drewwilson.com/entry/tiptip-jquery-plugin)
* [`html5.js (html5shiv)`](https://github.com/aFarkas/html5shiv)
* [`Bootstrap.js`](http://twitter.github.com/bootstrap/)

#### CSS ####
* [`Bootstrap`](http://twitter.github.com/bootstrap/)
* [`Bootstrap Responsive`](http://twitter.github.com/bootstrap/)
* [`Brandico`](https://github.com/fontello/brandico.font)
* [`Font-Awesome`](http://fortawesome.github.com/Font-Awesome/)
* [`tipTip`](http://code.drewwilson.com/entry/tiptip-jquery-plugin)

#### Other ####
* [`Markdown`](http://daringfireball.net/projects/markdown/)

### Setup ###

***Portfol.ui has been tested in IE10 and the latest versions of Chrome and Firefox. Support for IE9 and below is not guaranteed.***

#### `configs.JS` ####
You must set up `configs.js` to properly render the pages. (`/js/configs.js`).

Set `portfolio_mode` to `true` if you want to use the portfolio version (single-page) of Portfol.ui. Use `false` to set up a multi-page site.

`Parameters for Name Tag` contains all of the parameters for the nametag box in the top left corner. This box is only visible when `porfolio_mode` is `true`.

`Parameters for Navbar` contains all of the parameters for the navbar on top.  This includes `page_title` and a list of pages for the navbar menu. This navbar is only visible when `portfolio_mode` is `false`.

`Parameters for Tiles`:

Each tile consists of an image and a markdown file. The following are locations for the markdown files and the corresponding images.
	
	// location for the markdown and image files
    // for ease, markdown and image file names should be the same.
    var md_dir = 'markdown/';
    var img_dir = 'images/';

Here's how to set up the tiles. For each page (denoted by the `pageID` in the page html markup), the `files` variable should contain a list of the markdown files to load and the `titles` variable should be a list of the titles for the `title` html attribute. For now, the images should have the same name as the markdown file, and and files and titles should be list in the same order. Use an empty string (`''`) if you don't want to place a title.

	var files;
    var titles;
    
    // each case should be a pageID, and should contain the list of files and respective images to load for that page.
    // in portfolio mode, you only need to define the 1 case
    switch ($('div#pageID').text())
    {
    case "Home":
	    files = ['test1',
	     'test2',
	     'test3',
	     'test4',
	     'test5',
	     'test6',
	     'test7'];
	    titles = ['blah1',
	      'blah2',
	      'blah3',
	      'blah4',
	      'blah5',
	      'blah6',
	      'blah7'];
	    break;
    case "Page1":
	    files = ['test1',
	     'test2',
	     'test3'];
	    titles = ['blah1',
	      'blah2',
	      'blah3'];
	    break;
    case "Page2":
	    files = ['test1',
	     'test2',
	     'test3',
	     'test4',
	     'test5'];
	    titles = ['blah1',
	      'blah2',
	      'blah3',
	      'blah4',
	      'blah5'];
    	break;
    case "Page3":
	    files = ['test1'];
	    titles = ['blah1'];
	    break;
    default:
    	files = "Page not found";
    	titles = "Page not found";
    }

When `portfolio_mode = true`, the only case you need to fill out in the switch statement above is the `Home` case. Otherwise, you should create a file/title setting for each page you have in navbar mode.

### Source Code: ###

[Project on Github](https://github.com/raysaagar/portfol.ui)

### License ###

This project is free to use, so long as credit is given to project creators. We like open source. :) All tools used are freely available.