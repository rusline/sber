var func = function()
{
	
	
		
	//	
	$(".mmenu .a").bind("click", function(e){
     var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 10000);
      e.preventDefault();
  });

};

$(func);

