var converter = new Showdown.converter();

function load_markdown(mdfile, div){
    $.get(mdfile, function(data) {
		convert_markdown(data, div);
    });
};

function convert_markdown(mdcontents) {
    div.html(converter.makeHtml(mdcontents));
}