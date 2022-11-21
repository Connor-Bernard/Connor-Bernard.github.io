/**
 * Populates the content in the experience blocks
 * @param {JSON Array} experienceData 
 */
function populateExperienceField(experienceData){
    const experienceInjectPoint = document.querySelector("#experienceBoxes");
    const experienceTemplate = experienceInjectPoint.querySelector("[experienceBoxTemplate]");
    const subItemTemplate = experienceTemplate.content.querySelector("[experienceSubItemTemplate]");
    experienceData.forEach(experience => {
        const currExperienceTemplate = experienceTemplate.content.cloneNode(true).children[0];
        const subItemInjectPoint = currExperienceTemplate.querySelector("ul");
        currExperienceTemplate.querySelector("img").src = experience["companyImageLink"];
        currExperienceTemplate.querySelector("h2").textContent = experience["position"];
        experience["content"].forEach(subItem => {
            const currSubItemTemplate = subItemTemplate.content.cloneNode(true).children[0];
            currSubItemTemplate.querySelectorAll("strong")[0].textContent = `${subItem["subtitle"]}`;
            const location = subItem["location"];
            if(location){
                currSubItemTemplate.querySelectorAll("strong")[1].textContent = ` @ ${location}`;
            }
            currSubItemTemplate.querySelector("span").textContent = `: ${subItem["description"]}`;
            subItemInjectPoint.appendChild(currSubItemTemplate);
        });
        experienceInjectPoint.appendChild(currExperienceTemplate);
        // experienceInjectPoint.querySelectorAll(".experienceBox").forEach(experienceBox => {
        //     const img = experienceBox.querySelector("img");
        //     img.onload = () => {
        //         const currHeight = parseFloat(window.getComputedStyle(experienceBox).height);
        //         experienceBox.style.height = `${currHeight + img.height}px`;
        //         updateExperienceHeights();
        //     }
        // });
    });
}
/**
 * Updates the heights of the experience blocks to allow use of gradient border
 * needs to be called AFTER company images load (present issue)
 */
// function updateExperienceHeights(){
//     let currLargestBlock = 0;
//     document.querySelectorAll(".experienceBox").forEach(experienceBlock => {
//         currLargestBlock = Math.max(currLargestBlock, parseFloat(window.getComputedStyle(experienceBlock).height));
//     });
//     document.querySelectorAll(".experienceBox").forEach(experienceBlock => {
//         experienceBlock.style.height = `${currLargestBlock}px`;
//     });
// }

fetch("./assets/json/experiences.json").then(response => {
    response.json().then(data => {
        populateExperienceField(data);
    });
});