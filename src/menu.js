const menuData = {
    "Burgers": [
        {
            name: "Cheeseburger",
            description: "Fresh Angus beef patty, melted cheddar cheese, crisp lettuce, ripe tomato, red onion, and house sauce on a toasted brioche bun",
            price: 12.99
        },
        {
            name: "Chicken Burger",
            description: "Tender grilled chicken breast, crisp lettuce, sliced tomato, red onion, honey mustard sauce on a toasted sesame seed bun",
            price: 10.99
        }
    ],
    "Sides": [
        {
            name: "French Fries",
            price: 8.99
        },
        {
            name: "Curly Fries",
            price: 9.99
        }
    ]
};

export default function loadMenu(){
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";

    const siteHeading = document.createElement("h1");
    siteHeading.textContent = "Menu";
    contentDiv.appendChild(siteHeading);

    const menuItemsDiv = document.createElement("div");
    menuItemsDiv.classList.add("menu-items");

    Object.entries(menuData).forEach(([category, items]) => {
        const categoryHeading = document.createElement("h2");
        categoryHeading.textContent = category;
        menuItemsDiv.appendChild(categoryHeading);

        items.forEach(item =>{
            const categoryItemsDetailDiv = document.createElement("div");

            const productNameHeading = document.createElement("h3");
            productNameHeading.textContent = item.name;
            categoryItemsDetailDiv.appendChild(productNameHeading);

            if(item.description){
                const productDescription = document.createElement("p");
                productDescription.textContent = item.description;
                categoryItemsDetailDiv.appendChild(productDescription);
            }

            const priceDiv = document.createElement("div");
            priceDiv.classList.add("price");
            priceDiv.textContent = `${item.price.toFixed(2)}€`

            menuItemsDiv.appendChild(categoryItemsDetailDiv);
            menuItemsDiv.appendChild(priceDiv);

            const hr = document.createElement("hr");
            menuItemsDiv.appendChild(hr);
            
        });
    });

    contentDiv.appendChild(menuItemsDiv);
}