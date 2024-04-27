// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

//header
const userHeader = document.querySelector('.user-header');
if(userHeader) {
    document.addEventListener("click", function(e) {
        const targetElement = e.target;
        if (targetElement.closest('.user-header__arrow')) {
            userHeader.classList.toggle('user-header__open')
        } else if (!targetElement.closest('.user-header')) {
            userHeader.classList.remove('user-header__open')
        }
    });
}