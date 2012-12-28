//var converter = new Showdown.converter();
            
var mdfile = 'testmark.md';
var converter = new Showdown.converter();




var mdcontents = '';

$(document).ready(function(){
    $('#loadbtn').on("click",load_markdown);
    $('#convertbtn').on("click",convert_markdown);
    
});

function load_markdown(){
    $.get(mdfile, function(data) {
        $('#result').html(data);
        mdcontents = data;
    });
    
    
    
};

function convert_markdown(){
    
    $('#output').html(converter.makeHtml(mdcontents));

}