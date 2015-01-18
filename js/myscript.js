//Toggle drop-down menu on hover

if (document.documentElement.clientWidth > 900) {
	
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

$( document ).ready(function(){
$('a.custom-tab').click(function(){
$('#myNavbar a[href="' + $(this).attr('href') + '"][data-toggle="tab"]').trigger('click');
});
 });
 
$( document).ready(function(){
$('#Container').mixItUp();
 });
 

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var target = $(e.target).attr('href');
      if (target === '#tab_projects') {
        if (!$('#Container').mixItUp('isLoaded')) {
          $('#Container').mixItUp();
        }
      }
    });