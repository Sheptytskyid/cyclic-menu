"use strict"
export default class MenuItem {

    constructor(item) {
        this.link = document.createElement("a");
        this.link.setAttribute("href", item.link);
        this.link.classList.add("menu-item")
        this.link.innerText = item.name;
        this.item = document.createElement("li");
        this.item.appendChild(this.link);
    }

    makeActive() {
        this.link.focus();
    }

    get htmlElement() {
        return this.item;
    }
}
