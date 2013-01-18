/************************************************************************************************
 * Portfol.ui Mode
 *  True    - Set up headers in porfolio mode, including name tag (for single user/page sites)
 *  False   - Set up headers in menu mode, including navbar (for multi-page sites)
 ************************************************************************************************/

var portfolio_mode = false;
 
/****************************
 * Parameters for Name Tag 
 ****************************/

var name = "Saagar Deshpande";
var attributes = ["Programmer", "Hacker", "Student"];
// choose icons from /css/FontAwesome or /css/brandico
// icons from the brandico set are prepended with b-, as shown in the example below
var icon_images = ["icon-user", "b-icon-github-text", "b-icon-linkedin-rect", "b-icon-twitter-bird"];
var icon_titles = ["Resume","Github","LinkedIn","Twitter"];
var icon_links = ["#","#","#","#"];
var photo = "img/saagar2.jpg";
var photo_title = "Welcome to Portfol.ui!";
var photo_height = 90;  // pixels
var photo_width = 90;   // pixels

/****************************
 * Parameters for Navbar 
 ****************************/

// navbar title
var page_title = "Portfol.ui";
// where should navbar title button go?
var title_goto = "index.html";

// list of page names - for each page, keep this name the same as the text in the div ID=pageID
var page_names = ['Home',
                  'Page1',
                  'Page2',
                  'Page3',];
// location of each page. has a one-to-one correspondence.
var page_locations = ['index.html',
                      'page1.html',
                      'page2.html',
                      'page3.html',];

/************************
 * Parameters for Tiles
 ************************/
// location for the markdown and image files
// for ease, markdown and image file names should be the same.
var md_dir = 'markdown/';
var img_dir = 'images/';
var files;
// title for each tile. items have a one-to-one correspondence.
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


/**********************************************************************************
 * Content Generator - Do NOT modify below this comment unless you are comfortable
 **********************************************************************************/
 
// Generate content using user-defined parameters
$(function(){

    /************************************
     * Generate items for porfolio mode.
     ************************************/
    if (portfolio_mode == true){
        var tags = "";
        // generate tagitems for attributes
        for(var i=0;i<attributes.length;i++){
            tags = tags + '<div class="tagitem">'+ attributes[i] +'</div>';
        }
        
        // generate tagitem for icons
        tags = tags + '<div class="tagitem">';
        for(var i=0;i<icon_images.length;i++){
            tags = tags + '<a href="'+icon_links[i]+'"><i class="icons '+icon_images[i]+'" title="'+icon_titles[i]+'"></i></a>';
            if (i != icon_images.length-1)
                tags = tags + ' | ';
        }
        tags = tags + '</div>';
        
        // generate face photo
        var photo_tag = '<img id="face" src="'+photo+'" title="'+photo_title+'" style="height: '+photo_height+'px; width: '+photo_width+'px">';
    }
    /************************************
     * Generate items for menu mode.
     ************************************/
    else{
        // use this to determine which page we're on for navbar "active"
        var active = "";
        // navbar! finally!
        var navbar = '<div class="navbar navbar-inverse"><div class="navbar-inner">';
        // add the title
        navbar += '<a class="brand" href="'+title_goto+'">'+page_title+'</a>';
        // use nav-collapse in case the page is rendered in a smaller window than expected
        navbar += '<div class="nav-collapse collapse">';
        
        // generate the nav links
        navbar += '<ul class="nav">';
        for(var i=0;i<page_names.length;i++){
            if (page_names[i] == $('div#pageID').text())
                active = 'active';
            else
                active = '';
            navbar += '<li class="'+active+'"><a href="'+page_locations[i]+'">'+page_names[i]+'</a></li>';
        }
        // add reset button
        navbar += '<li><a id="icon" class="link" href="#" title="Reset Tiles!">Reset!</a></li>';
        
        navbar += '</ul></div></div></div>'; 
    }
    
    /**************
     * Load items
     **************/
     
    // load portfolio header
    if (portfolio_mode == true){
        // load name
        $('#name').html(name);
        
        // load tag items
        $('#tagline').html(tags);
        
        // load photo
        $('#photo').html(photo_tag);
    }
    // load navbar
    else{
        // removing portfolio styling from the actual page is too much work, so just clear it with jquery
        $('#topbar').html('');
        $('#topbar').html(navbar);
    }
});

