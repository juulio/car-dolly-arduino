$(document).ready(function() {
	/* Scroll event handler */

	var target = $("#wrapper"); // <== Getting raw element

	
    // (function() {
    //   var target = $("#wrapper");
    //   $(window).scroll(function() {
    //     target.prop("scrollTop", this.scrollTop)
    //           .prop("scrollLeft", this.scrollLeft);
    //   });
    // })();
  



    $(window).bind('scroll',function(e){
    // $('#wrapper').bind('scroll',function(e){

		// console.log('window: ' +$(window).scrollTop() + ' #wrapper: ' + $('#wrapper').scrollTop());
	    var scrolled = $(window).scrollTop();
	    // var scrolled = $('#wrapper').scrollTop();
		$('#parallax-bg1').css('left',(0-(scrolled*.25))+'px');
		$('#parallax-bg2').css('left',(0-(scrolled*.5))+'px');
		$('#parallax-bg3').css('left',(0-(scrolled*.5))+'px');
		$('#parallax-bg4').css('left',(0-(scrolled*.5))+'px');
		$('#parallax-bg5').css('left',(0-(scrolled*.5))+'px');
		$('#parallax-bg6').css('left',(0-(scrolled*.48))+'px');
    });

});

// parallax-bg6 -> texto
// parallax-bg5 -> puntos
// parallax-bg4 -> lineas
// parallax-bg3 -> delineado
// parallax-bg2 -> carro
// parallax-bg1 -> fondo