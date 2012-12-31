/****************************
 * Parameters for Name Tag 
 ****************************/

var name = "Elridge Powerhacks";
var attributes = ["Programmer", "Hacker", "Student"];
var icon_images = ["icon-user", "b-icon-github-text", "b-icon-linkedin-rect", "b-icon-twitter-bird"];
var icon_titles = ["Resume","Github","LinkedIn","Twitter"];
var icon_links = ["#","#","#","#"];
var photo = "img/saagar2.jpg";


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
    
    /**************
     * Load items
     **************/
    
    // load name
    $('#name').html(name);
    
    // load tag items
    $('#tagline').html(tags);
});

