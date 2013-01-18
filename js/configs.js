/****************************
 * Parameters for Name Tag 
 ****************************/

var name = "Elridge Powerhacks";
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

/************************
 * Parameters for Tiles
 ************************/
// location for the markdown and image files
// for ease, markdown and image file names should be the same.
var md_dir = 'markdown/';
var img_dir = 'images/';
var files = ['test1',
             'test2',
             'test3',
             'test4',
             'test5',
             'test6',
             'test7'];
// title for each tile. items have a one-to-one correspondence.
var titles = ['blah1',
              'blah2',
              'blah3',
              'blah4',
              'blah5',
              'blah6',
              'blah7'];

/**********************************************************************************
 * Content Generator - Do NOT modify below this comment unless you are comfortable
 **********************************************************************************/
 
// Generate content using user-defined parameters
$(function(){

    /*****************
     * Generate items
     *****************/
    
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
    
    /**************
     * Load items
     **************/
    
    // load name
    $('#name').html(name);
    
    // load tag items
    $('#tagline').html(tags);
    
    // load photo
    $('#photo').html(photo_tag);
});

