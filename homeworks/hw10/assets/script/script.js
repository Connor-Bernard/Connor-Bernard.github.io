const outfits = document.querySelectorAll("#drake-container > .outfit");
const body = document.querySelector("#body");

/**
 * Strip drake ;)
 */
function strip(){
	outfits.forEach(outfit => {
		body.style.display = "";
		outfit.style.display = "none";
	});
}

/**
 * Initialize and assocaite button actions
 */
document.querySelectorAll(".outfit-selection").forEach((outfitButton, i) => {
	outfitButton.onclick = () => {
		strip();
		body.style.display = "none";
		outfits[i].style.display = "";
	}
});

// Set initial state to stripped
strip();