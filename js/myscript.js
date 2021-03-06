//Toggle drop-down menu on hover
if (document.documentElement.clientWidth > 992) {
	
	$( document ).ready(function() {
        $(".dropdown").hover(
            function(){ $(this).addClass('open') },
            function(){ $(this).removeClass('open') }
        );
		
    });
}
	

//Automatically update my age
function age() {
    var birthday = new Date(1990,7,28,0,0,0,0);
	var ageDifMs = Date.now() - birthday.getTime();
	var ageDate = new Date(ageDifMs); // miliseconds from epoch
	var age = Math.abs(ageDate.getUTCFullYear() - 1970);
	return age;
}

$( document ).ready(function() {
  $("#my_age").text( age() );
});

//Custom link class that points to a tab
$( document ).ready(function(){
	$('a.custom-tab').click(function(){
	$('#myNavbar a[href="' + $(this).attr('href') + '"][data-toggle="tab"]').trigger('click');
	});
});
 
//Activate mixitup within a tab
 $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
	var target = $(e.target).attr('href');
	if (target === '#projects') {
		if (!$('#portfolio').mixItUp('isLoaded')) {
			$('#portfolio').mixItUp();
		}
	}
});




//Clicking on accordion scrolls to the header

 $(function () {
    $('#accordion').on('shown.bs.collapse', function (e) {
    var target = $('[data-toggle="collapse"][href="#'+ $(e.target).attr('id')+ '"]'
	//target is the accordion element that points to the shown text
	);
    $('html,body, .wrapper').animate({
		scrollTop: target.offset().top - 8
    }, 500); 
        
});
});


//Enable bookmarking, linking tabs from outside, etc
$(document).ready(function() {
  /* Jump on good tab based on anchor; for page reloads or links */	
  if(location.hash) {

	if(location.hash !="#home"){
	$('.tab-pane.active').hide(); // Prevents flicker (might not work for a page that loads slowly)
	}
    $('a[href=' + location.hash + ']').tab('show');
	setTimeout(function(){$('#home').css("display","");},1000); // Unhide default tab after animation
  }
 
  /* Update hash based on tab, basically restores browser default behaviour to
     fix bootstrap tabs */
  $(document.body).on("click", "a[data-toggle]", function(event) {
	if (this.getAttribute("href")) {
    location.hash = this.getAttribute("href").substr(1); scrollTo(0,0);
}
  });
});
 
/* on history back activate the tab of the location hash
   if exists or the default tab if no hash exists */
$(window).on('popstate', function() {
  var anchor = location.hash || $("a[data-toggle=tab]").first().attr("href");
  $('a[href=' + anchor + ']').tab('show');
});

// resize mixitup container when screen is very small

function setMixContainerHeight(){
		var h = $(window).height();
        var w = $(window).width();

        if(w<768) {
            $('.container-mix .container').css({'height': w/2});
        }
        else if (w<992){ 
			$('.container-mix .container').css({'height': 200});
        } else if (w < 1200){
			$('.container-mix .container').css({'height': 250});
		} else{
			$('.container-mix .container').css({'height': 180});
		}
}

$(document).ready(function() {
	setMixContainerHeight();
    $(window).resize(function() {
        setMixContainerHeight();
    });
});
