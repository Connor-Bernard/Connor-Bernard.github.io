
/**
 * Populates the language Field of About Me
 * @param {JSON Object Array} iconData 
 */
function populateLanguageField(iconData){
    const template = document.querySelector("[iconTemplate]");
    let insertLocation = null;
    iconData.forEach(element => {
        if(!insertLocation){
            insertLocation = document.querySelector(`[${element["type"]}]`);
        }
        const currIconTemplate = template.content.cloneNode(true).children[0];
        currIconTemplate.querySelector("p").textContent = element["name"];
        currIconTemplate.querySelector("img").src = element["link"];
        insertLocation.appendChild(currIconTemplate);
    });
}

fetch("./assets/json/languages.json").then(response => {
    response.json().then(data => {
        populateLanguageField(data);
    });
});

fetch("./assets/json/utilities.json").then(response => {
    response.json().then(data => {
        populateLanguageField(data);
    });
});