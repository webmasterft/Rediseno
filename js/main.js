$(function() {
	cargarImg();
	var nav = $('.nav a.boton'),
		titSeccion = $('#titSeccion'),
		thumbs = $("#thumbs"),
		datos = $('#datos'),
		loader = $('.spinner'),
		navBarCollapse = $('.navbar-collapse');
		titSeccion.hide();
		nav.on('click', function(e){
			e.preventDefault();
			seccion = $(this).data('seccion');
			color = $(this).data('color');
			datos.html("");
			$('body').removeClass().addClass(seccion);

			if($(this).parents('ul').hasClass('dropdown-menu')){
				navBarCollapse.find('.dropdown > a').addClass('btnActive').parent().siblings().find('a').removeClass(' btnActive');
					$(this).addClass('btnActive').parent().siblings().find('a').removeClass(' btnActive');
			}else{
				$(this).addClass('btnActive').parent().siblings().find('a').removeClass(' btnActive');
			}
			titSeccion.hide().find('span#txt').text(seccion);
			cargarImg(seccion);
			loader.show();
			navBarCollapse.removeClass(' in').addClass('collapse');
		});

	
	function cargarImg(seccion){
		if(seccion === undefined){
			seccion = "portadas";
		}//if    	
		
			$.ajax({
	            type: "POST",
	            url: "datos.php",
	            dataType: "html",
	           	data: {
            		sec: seccion
        		},
	            cache: false,
	            success: function(data){
            		datos.html(data).hide();
	            	loader.delay(900).hide(function(){
	            		datos.fadeIn(700);
	            		titSeccion.fadeIn(900);
	            	});

	            },
	            error: function(data){
	            	datos.html("Houston, algo va mal! ");
	            }

        	});
    }//function
});