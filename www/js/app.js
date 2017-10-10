involtListenForPin[0] = function(index, value){
//do something when received value from pin A0...
// console.log(index);
	// console.log(value);

	// Simulate Horizontal Scrolling
	// $('.main-background').css({'left': -value})

	if(value > 100 && value < 300) {
		$('.block1').css({'left':value});
	}

	if(value > 200) {
		$('.block2').css({'left':value*1.1});
	}
};