/* TODO
- 
- pulsar en los dots
- fadeIn y fadeOut constante del delineado
*/


// Pulse - Nissan
// Total "width" = 5629px



// Init variables
// UI elements
let videoElement = document.getElementById('video01');

// let $videoIsPlayingElement = $("#videoIsPlaying");
let videoIsPlaying = false;
let totalWidth = $('body').height(); // pixels
let sensorRange = 1023; // Arduino Leonardo 
let scrollingFactor = totalWidth / sensorRange; //  5.18
// let scrollingFactor = 7.52

// Trigger points
let video01position = 200;
let video02position = 500;
let video03position = 700;
let video04position = 1000;


// main function
// do something when received value from pin A0...
involtListenForPin[0] = function(index, value){
	// Simulate Horizontall scrolling with values from Arduino
	// $('#wrapper').scrollTo(value*scrollingFactor,  30);
	$.scrollTo(	value*scrollingFactor,  30, {axis:'Y'} );



	// console.log('Sensor Position: ' + value);
	// $videoIsPlayingElement.html("Video is Playing: " + videoIsPlaying);
	// $('#wrapper').scrollTo(value);
	// console.log('scroll position: ' + $(window).scrollTop());

	// to check current Scroll position


	//--------------------------------------------------
	// Code for events
	if(value > 240 && value < 500 && !videoIsPlaying) {
	// if(value > 400 && value < 500 && !videoIsPlaying) {
		console.log('video on screen');
		$('#video01').fadeIn( "slow", function() {
			// $(this).height(840);
			// if (videoElement.webkitRequestFullscreen) {
			// 	videoElement.webkitRequestFullscreen();
				// }
		
			// if (videoElement.requestFullscreen) {
			//   videoElement.requestFullscreen();
			// } else if (videoElement.mozRequestFullScreen) {
			//   videoElement.mozRequestFullScreen();
			// } else if (videoElement.webkitRequestFullscreen) {
			//   videoElement.webkitRequestFullscreen();
			// }

			videoElement.currentTime = 0; // Video plays from the beginning
			videoElement.play();
			videoIsPlaying = true;


		
			// let leftPosition = $('#video-container').position().left;
			// leftPosition++;
			// console.log(leftPosition);
			// $('#video-container').css({'left':leftPosition+scrollingFactor});

		
		});
	}

	if(value < 240 || value > 500 && videoIsPlaying){
		// $('#video01').fadeOut( "fast", function() {
		// 	videoElement.pause();
		// 	videoIsPlaying = false;
		// });
	}
};


