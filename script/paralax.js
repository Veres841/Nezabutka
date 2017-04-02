$(document).ready(function() {
    $(".header[data-type='background']").each(function() {
        var $bgobj = $(this);
        
    $(".main[data-type='background']").each(function() {
        var $bgobj = $(this);
    })
        
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data("speed"));
            var coors = "50%" + yPos + "px";
            $bgobj.css("background-position", coors);
        });
    });
});