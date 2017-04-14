$(document).ready(function () {
	width = ($(window).width()-$(".title1").width())/8;
    $.goup({
        trigger: 100,
        bottomOffset: 50,
        locationOffset: width,
        title: '回到顶部',
        titleAsText: true
    });
    $(".goup-container").css({"z-index":"20"});
    h = $(document).height();
    $(".particles-js-canvas-el").height(h);
    $(".midtxt").bumpyText();
    $(".midtxt zx").bumpyText();
});