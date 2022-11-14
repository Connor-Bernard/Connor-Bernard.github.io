//
// Part 1: Fill in the function unhideLightbox. Afterwards, we will make this function run when a picture is clicked on.
//

/* I hope it's okay that I am implementing using my own approach instead of adhering to the
 * provided format.  I think it is pretty clear that I can complete these JS activities in the
 * intended fasion, so I like to challenge myself to use other approaches so that I can learn
 * and practice new approaches and techniques.  If this is not okay or if you would like me to
 * complete these using the provided format, I am happy to do so on future asignments.
 */

Array.from(document.querySelector("#pictures").children).forEach((picture, i) => {
    picture.onclick = () => {
        document.querySelectorAll(".lightbox")[i].classList.remove("hidden")
        document.querySelector("#lightbox-overlay").classList.remove("hidden")
    }
})

document.querySelector("#lightbox-overlay").onclick = () => {
    document.querySelectorAll(".lightbox").forEach((picture) => {
        picture.classList.add("hidden")
    });
    document.querySelector("#lightbox-overlay").classList.add("hidden")
}



/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
	// This removes the .hidden class from the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.remove('hidden');

	// TODO: Remove the .hidden class from the div with the given id

}


//
// Part 2: Make the unhideLightbox function run when a picture is clicked on.
//

/**
 * Calls unhideLightbox with the id of the first lightbox
 */
function unhideLightbox1() {
	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox

}

// TODO: Set the browser to run the function unhideLightbox1 when someone clicks #picture-1


// TODO: do the same for #picture-2, write a function and then make it run on click





// TODO: do the same for #picture-3, write a function and then make it run on click






//
// Part 3: Now we need to be able to close the lightbox when we click outside the picture!
//
function closeLightbox(lightboxID) {
	// This adds the .hidden class to the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.add('hidden');

	// TODO: Add the .hidden class to the div with the given id

}


// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array
	var lightboxElements = document.getElementsByClassName('lightbox');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

// TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.
