const songsOverflow = document.querySelector("#songs-second-half")
function toggleSongs(){
    if(songsOverflow.classList.contains("hidden")){
        songsOverflow.classList.remove("hidden")
    } else {
        songsOverflow.classList.add("hidden")
    }
}
document.querySelector("#toggle-button").onclick = toggleSongs
