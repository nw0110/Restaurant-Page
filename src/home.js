import burgerImage from "./burger.jpg";

export default function loadHomepage() {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";

    const siteHeading = document.createElement("h1");
    siteHeading.textContent = "Best Burgers in Town";
    contentDiv.appendChild(siteHeading);

    const firstParagraph = document.createElement("p");
    firstParagraph.textContent = `
        Welcome to "Best Burgers in Town," where passion for the perfect burger meets uncompromising quality. Since
            opening our doors, we've been crafting mouthwatering burgers using locally sourced, premium ingredients and
            our signature blend of perfectly seasoned beef. Each burger is hand-formed and grilled to perfection, topped
            with garden-fresh vegetables and housed in our freshly baked artisan buns.
    `;
    contentDiv.appendChild(firstParagraph);

    const homepageImage = document.createElement("img");
    homepageImage.alt = "close-up of a burger";
    homepageImage.width = 500;
    homepageImage.src = burgerImage;
    contentDiv.appendChild(homepageImage);

    const secondParagraph = document.createElement("p");
    secondParagraph.textContent = `
        Step into our cozy, family-friendly atmosphere where the sizzle of the grill and the aroma of fresh-cooked
            burgers create an irresistible welcome. Whether you're craving our classic cheeseburger, our spicy jalapeño
            special, or one of our innovative vegetarian options, we guarantee a burger experience that lives up to our
            name. Our dedicated team takes pride in serving you not just a meal, but a moment to remember.
    `;
    contentDiv.appendChild(secondParagraph);

}