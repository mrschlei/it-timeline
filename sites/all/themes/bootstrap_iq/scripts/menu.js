(function ($) {
$(document).ready(function() {
	
	$(".mobilebutton").click(function(){
		$(".region-header .globalnav ul").slideToggle("");
		$(".mobilebutton").attr("aria-expanded",$(this).attr("aria-expanded")==="true"?"false":"true");
	});
	$(".region-header .globalnav").accessibleDropDown();
});




$.fn.accessibleDropDown = function ()
{
	var el = $(this);
	$("a", el).focus(function() {
		$(this).parents("li").addClass("hover");
		$(this).parents("li").attr("aria-expanded", true);
	}).blur(function() {
		$(this).parents("li").removeClass("hover");
		$(this).parents("li").attr("aria-expanded", false);
	});
};



})(jQuery);

function linker() {}