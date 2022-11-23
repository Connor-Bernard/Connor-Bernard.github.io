/**
 * Toggles the provided hamburger
 * @param {HTML Element} hamburger 
 * @param {HTML Element} navMenu 
 */
function toggleHamburger(hamburger, navMenu){
    const active = hamburger.classList.contains("active");
    if(active){
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    } else {
        hamburger.classList.add("active");
        navMenu.classList.add("active"); 
    }
}

/**
 * Initializes the hamburger with all necessary events and listeners
 */
function __initHamburger__(){
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav");
    hamburger.onclick = () => {
        toggleHamburger(hamburger, navMenu);
    }
    addEventListener("resize", event => {
        if (event.target.innerWidth > 1024 && hamburger.classList.contains("active")) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
    addEventListener("scroll", () => {
        if(window.pageYOffset >= 330){
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
}

__initHamburger__();