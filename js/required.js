var converter = new Showdown.converter();

// function load_markdown(mdfile, div){
    // alert("hello");
    // $.get(mdfile, function(data) {
		// convert_markdown(data, div);
    // });
// };


/* currently needs input as follows:
    map
        |--> data
            |--> mdfile (this is the markdown file we want)
            |--> div    (this is the div we want to fill with the converted markdown)
    
    currently div should be a string with # or . in front. 
    TODO: make generic
*/

function load_markdown(map){
    load_markdown(map.data.mdfile, map.data.div);
};

function load_markdown(mdfile, div){
    $.get(mdfile, function(data) {
        convert_markdown(data, div);
    });
};

function convert_markdown(mdcontents,div) {
    div.html(converter.makeHtml(mdcontents));
}
/**
$(document).ready(function(){
    $('#loadbtn').on("click",{mdfile: "markdown/test.md", div: "#output"}, load_markdown);
    //$('#convertbtn').on("click",convert_markdown);
});
*/
