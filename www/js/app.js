// Pulse - Nissan
// Total "width" = 5300px


jQuery( document ).ready(function($) {

	// Init variables
	// UI elements
	let videoElement = document.getElementById('video01');

	// let $videoIsPlayingElement = $("#videoIsPlaying");
	let videoIsPlaying = false;
	let totalWidth = $('body').height(); // pixels
	let sensorRange = 1023; // Arduino Leonardo 
	let scrollingFactor = totalWidth / sensorRange; //  5.18


	// Hide the Vertical Scroll Bar
	$('html').css({'overflow':'hidden'});

	involtListenForPin[0] = function(index, value){

		//do something when received value from pin A0...
		// console.log('Sensor Position: ' + value);

		// $videoIsPlayingElement.html("Video is Playing: " + videoIsPlaying);

		// Simulate Horizontall scrolling with values from Arduino
		$.scrollTo(	value*scrollingFactor,  30, {axis:'Y'} );

		if(value > 400 && value < 500 && !videoIsPlaying) {
			$('#video01').fadeIn( "slow", function() {
				$(this).height(840);
				// if (videoElement.webkitRequestFullscreen) {
    //   				videoElement.webkitRequestFullscreen();
  		// 		}
				videoElement.currentTime = 0; // Video plays from the beginning
				videoElement.play();
				videoIsPlaying = true;
			});
		}

		if(value < 400 || value > 600 && videoIsPlaying){
			$('#video01').fadeOut( "fast", function() {
				videoElement.pause();
				videoIsPlaying = false;
			});
		}
	};
});