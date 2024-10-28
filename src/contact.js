export default function loadContact() {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";

    const siteHeading = document.createElement("h1");
    siteHeading.textContent = "Contact";
    contentDiv.appendChild(siteHeading);

    const contactDetailsDiv = document.createElement("div");
    contactDetailsDiv.classList.add("contact-details");
    contentDiv.appendChild(contactDetailsDiv);

    const addressDiv = document.createElement("div");
    const addressHeading = document.createElement("h2");
    addressHeading.textContent = "Best Burgers in Town";
    const addressStreetSpan = document.createElement("span");
    addressStreetSpan.textContent = "123 Burger Lane";
    const addressCitySpan = document.createElement("span");
    addressCitySpan.textContent = "Flavor Town, CA 12345";
    const addressCountrySpan = document.createElement("span");
    addressCountrySpan.textContent = "United States";

    addressDiv.appendChild(addressHeading);
    addressDiv.appendChild(addressStreetSpan);
    addressDiv.appendChild(addressCitySpan);
    addressDiv.appendChild(addressCountrySpan);

    contactDetailsDiv.appendChild(addressDiv);

    const contactDiv = document.createElement("div");
    const contactHeading = document.createElement("h2");
    contactHeading.textContent = "Best Burgers in Town";
    const phoneSpan = document.createElement("span");
    phoneSpan.textContent = "Phone: +1 (555) 123-4567";
    const faxSpan = document.createElement("span");
    faxSpan.textContent = "Fax: +1 (555) 987-6543";
    const email = document.createElement("span");
    email.textContent = "Email: contact@burgerpalace.fake";

    contactDiv.appendChild(contactHeading);
    contactDiv.appendChild(phoneSpan);
    contactDiv.appendChild(faxSpan);
    contactDiv.appendChild(email);

    contactDetailsDiv.appendChild(contactDiv);
    
    const disclaimerDiv = document.createElement("div");
    const disclaimerHeading = document.createElement("h2");
    disclaimerHeading.textContent = "Disclaimer";
    const disclaimerTextParagraph = document.createElement("p");
    disclaimerTextParagraph.textContent = "This website is for illustrative purposes only. Any resemblance to actual persons, businesses, or places is purely coincidental.";
    
    disclaimerDiv.appendChild(disclaimerHeading);
    disclaimerDiv.appendChild(disclaimerTextParagraph);

    contactDetailsDiv.appendChild(disclaimerDiv);/*  */
}