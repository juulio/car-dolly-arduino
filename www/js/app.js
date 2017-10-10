involtListenForPin[0] = function(index, value){
//do something when received value from pin A0...
	console.log('Sensor Position: ' + value);

	// Simulate Horizontal Scrolling
	// $('.main-background').css({'left': -value})

	// $('#wrapper').scrollTo(	value*4, 1, {axis:'Y'} );
	$.scrollTo(	value*4,  10, {axis:'Y'} );

	if(value > 100 && value < 300) {
		$('.block1').css({'left':value});
	}

	if(value > 200) {
		$('.block2').css({'left':value*1.1});
	}
};