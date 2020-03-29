function playSound(event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	if (!audio) return; //stops the function from running all togheter
	audio.currentTime = 0; //setting the time position, rewind from the start
	audio.play();
	key.classList.add('playing');
}

function removeTransition(event) {
	if (event.propertyName !== 'transform') return; //skip if it's not a transofrm
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
