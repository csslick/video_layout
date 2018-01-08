window.onload = function(){
    var vid = document.getElementById('vid');
		var play_btn = document.querySelector('.play_btn');
		play_btn.addEventListener('click', function(){
			vid.play();
			this.classList.remove('on');
		});
		vid.addEventListener('ended', function(){
			play_btn.classList.add('on');
			console.log('video end');
		});
    
}
