import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

homeBtn.addEventListener("click", changeTab);
menuBtn.addEventListener("click", changeTab);
contactBtn.addEventListener("click", changeTab);

function changeTab(e) {
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    e.target.classList.add("active");

    switch (e.target.id) {
        case "menu":
            loadMenu();
            break;
        case "home":
            loadHome();
            break;
        case "contact":
            loadContact();
            break;
    }
}

loadHome();