"use strict"
export default class CyclicMenu {
    constructor(parentElement, menuItems) {
        this.renderHtml(menuItems, parentElement);
        this.setUpNavigation();
    }

    renderHtml(menuItems, parentElement) {
        this.list = document.createElement("ul");
        this.list.classList.add("menu")
        this.menuItems = menuItems;
        this.menuItems.forEach(menuItem => this.list.appendChild(menuItem.htmlElement));
        this.parentElement = parentElement;
        this.parentElement.appendChild(this.list);
    }

    setUpNavigation() {
        this.activeItem = -1;
        this.activateNextItem();
        this.list.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowRight":
                    this.activateNextItem();
                    break;
                case "ArrowLeft":
                    this.activatePreviousItem();
                    break;
            }
        });
    }

    activateNextItem() {
        if (++this.activeItem === this.menuItems.length) {
            this.activeItem = 0;
        }
        this.menuItems[this.activeItem].makeActive();
    }

    activatePreviousItem() {
        if (--this.activeItem < 0) {
            this.activeItem += this.menuItems.length;
        }
        this.menuItems[this.activeItem].makeActive();
    }
}
