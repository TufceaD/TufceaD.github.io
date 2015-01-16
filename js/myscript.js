//Toggle drop-down menu on hover

if (document.documentElement.clientWidth > 900) {
	
	$(function() {
        $(".dropdown").hover(
            function(){ $(this).addClass('open') },
            function(){ $(this).removeClass('open') }
        );
		
    });
}
	