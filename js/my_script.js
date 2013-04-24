var func = function()
{
		
	 //
		$(".sticker-menu").sticky({ topSpacing:0});
		
		//
		$(".msber-box01-opendrop").click(function(){
      $(".msber-box01-drop").toggle();
			return false;	
    });

		
		//
		$('div.msber-box01-img').eq(0).show();
		$('a.msber01').each(function(i, item){
			$(item).bind('mouseover', function(e){
			 e.preventDefault();
			 $('div.msber-box01-img').hide();
			 $('div.msber-box01-img').eq(i).show();
			})
		});
		
		//
		$('div.msber-box02-img').eq(0).show();
		$('a.msber02').each(function(i, item){
			$(item).bind('mouseover', function(e){
			 e.preventDefault();
			 $('div.msber-box02-img').hide();
			 $('div.msber-box02-img').eq(i).show();
			})
		});
		
				
		//
		$("a.ancLinks").click(function () {
      elementClick = $(this).attr("href");
      destination = $(elementClick).offset().top - 153;
      if($.browser.safari){
        $('body').animate( { scrollTop: destination }, 1100 );
      }else{
        $('html').animate( { scrollTop: destination }, 1100 );
      }
    });
	
		
		//
		$('#slider1').anythingSlider({
				width   : 446, 
				height  : 416, 
				hashTags : false,
				navigationFormatter : function(index, panel){ 
					return ['Android', 'iPhone', 'iPad', 'Windows Phone'][index - 1];
				}
			});

};

$(func);

