function toggleTheme(){
    const body = document.querySelector("body")
    if (body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode")
    } else {
        body.classList.add("dark-mode")
    }
}
document.querySelector("#toggleButton").onclick = toggleTheme
