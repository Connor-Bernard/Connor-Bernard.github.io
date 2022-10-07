/**
 * Copyright (c) 2022
 *
 * Utility for updating the menu from a json file
 * containing the menu data
 *
 * @summary Utility for updating the menu items
 * @author Connor Bernard <connorbernard@berkeley.edu>
 *
 */

function populateMenu(menuData){
    for(category in menuData){
        const injectPoint = document.getElementById(category).getElementsByClassName("menuItems")[0];
        menuData[category].forEach((item) => {
            const itemBody = document.createElement("div");
            itemBody.className = "item";
            injectPoint.appendChild(itemBody);

            const itemHead = document.createElement("div");
            itemHead.className = "itemHead";
            itemBody.appendChild(itemHead);

            const itemName = document.createElement("h3");
            itemName.textContent = item['title'];
            itemHead.appendChild(itemName);

            const line = document.createElement("embed");
            line.src = "./assets/img/itemLine.svg";
            itemHead.appendChild(line);

            const price = document.createElement("div");
            price.className = "price";
            itemHead.appendChild(price);

            const dollar = document.createElement("div");
            dollar.className = "dollar";
            dollar.textContent = Math.trunc(item["price"]);
            price.appendChild(dollar);

            const cents = document.createElement("div");
            cents.className = "cents";
            cents.textContent = Math.trunc(item["price"]%1*100)
            price.appendChild(cents);

            const itemDescription = document.createElement("div");
            itemDescription.className = "itemDescription";
            itemBody.appendChild(itemDescription);

            const itemDescriptionParagraph = document.createElement("p");
            itemDescriptionParagraph.textContent = item["description"];
            itemDescription.appendChild(itemDescriptionParagraph);

            itemBody.appendChild(generateModifiers(item["modifiers"]));
        });
    }
}

function generateModifiers(modifiers){
    const modifiersField = document.createElement("div");
    modifiersField.className = "modifiers";
    modifiers.forEach((modifier) => {
        const modifierField = document.createElement("div");
        modifierField.className = modifier;
        modifiersField.appendChild(modifierField);

        modifierTextContent = document.createElement("p");
        modifierTextContent.textContent = modifier;
        modifierField.appendChild(modifierTextContent);
    });
    return modifiersField;
}

fetch("./assets/js/menuItems.json").then(response => {
    response.json().then(data => {
        populateMenu(data);
    });
});
