// $(function(){
    $('#container').mouseenter(function(){
        alert("hi");
        var image= $(this).find('img'),
            caption = $(this).find('div');
        //var caption = $(image).attr("title");
        
        caption.width(image.width());
        caption.height(image.height());
        alert(caption);
        caption.fadeIn();
    }).mouseleave(function(){
         var image= $(this).find('img'),
            caption = $(this).find('div');
         // var caption = $(image).attr("title");
        
        caption.width(image.width());
        caption.height(image.height());
        caption.fadeOut();
    });
// });