window.addEventListener("keydown", function(event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	if (!audio) return; //stops the function from running all togheter

	audio.play();
});
