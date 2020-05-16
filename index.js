"use strict"
import items from "./items.js"
import MenuItem from "./MenuItem.js";
import CyclicMenu from "./CyclicMenu.js";

let menuItems = items.map(item => new MenuItem(item));
let cyclicMenu = new CyclicMenu(document.body, menuItems)
