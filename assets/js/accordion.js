document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    // FAQ ACCORDION JS START =====
    const accordionItems = document.querySelectorAll(".nk-single-accordion-item");

    accordionItems.forEach((accordionItem) => {
        accordionItem.onclick = () => {
            const openedItems = document.querySelector(".nk-single-accordion-item.open");
            if (accordionItem.classList.contains("open")) {
                openedItems.classList.remove("open")
            } else {
                accordionItem.classList.toggle("open");
                if (openedItems) {
                    openedItems.classList.remove("open")
                }
            }
        }
    })
    //===== FAQ ACCORDION JS START
});