// create a new Showdown converter for the .MD to .HTML
var converter = new Showdown.converter();

/*******************************************************************************
 * map
 *  |--> data
 *  |--> mdfile (this is the markdown file we want)
 *  |--> div    (this is the div we want to fill with the converted markdown)
 *******************************************************************************/
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
