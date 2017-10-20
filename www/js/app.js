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
let $video = $('#video01');
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


	// $videoIsPlayingElement.html("Video is Playing: " + videoIsPlaying);
	// $('#wrapper').scrollTo(value);
	// console.log('scroll position: ' + $(window).scrollTop());

	// to check current Scroll position

	//--------------------------------------------------
	// Code for events
	if(value > 100 && value < 200 && !videoIsPlaying) {
	// if(value > 400 && value < 500 && !videoIsPlaying) {
		$('#video-container').fadeIn( "slow", function(){
			$video.get(0).play();
			videoIsPlaying = true;
			// videoElement.currentTime = 0; // Video plays from the beginning
			// videoElement.play();

			// $(this).height(840);	
			var playPromise = videoElement.play();

			if (playPromise !== undefined) {
				playPromise.then(_ => {
					videoIsPlaying = true;
					console.log('playing');// Automatic playback started!
					// Show playing UI.
				})
				.catch(error => {
					console.log('error playing video');
				// Auto-play was prevented
				// Show paused UI.
				});
			}
			// videoElement.play();
		});
	}

	if( (value < 100 || value > 200) && videoIsPlaying){
		$('#video-container').fadeOut( "fast", function() {
			videoElement.pause();
			videoIsPlaying = false;
			console.log('paused');
		});
	}
};



$(function () {

	// DOTS -  Toggle FadeIn / FadeOut
    var $dotsElement = $('#parallax-bg5');
    setInterval(function () {
        $dotsElement.fadeIn(1000, function () {
            $dotsElement.fadeOut(1000, function () {
                $dotsElement.fadeIn(1500)
            });
        });
    }, 1000);

	// X RAY - Toggle horizontal Fade
	// 4s FadeIn 4s FadeOut 1s wait
	var $xrayElement = $('#parallax-bg3');
    setInterval(function () {
        $xrayElement.fadeIn(4000, function () {
            $xrayElement.fadeOut(4000);
        });
    }, 800);

});


