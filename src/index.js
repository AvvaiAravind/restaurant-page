import "./style.css";
import { firstPage } from "./firstpage.js";
import { menuPage } from "./menupage.js";
import { aboutPage } from "./aboutpage.js";
import { footerPage } from "./footer.js";
import { toggleBtn, removePreviousToggleEffect } from "./utilityfunction.js";

(function loaded() {
  addEventListener("DOMContentLoaded", () => {
    firstPage();
    footerPage();
  });

  const homeBtn = document.getElementById("homebtn");
  const menuBtn = document.getElementById("menubtn");
  const aboutBtn = document.getElementById("aboutbtn");
  toggleBtn(homeBtn);

  homeBtn.addEventListener("click", () => {
    const homeSection = document.getElementById("home");
    const section = document.querySelector("section").id;
    const main = document.querySelector("main");
    const footer = document.querySelector(".footer");
    console.log(!homeSection);
    if (!homeSection) {
      main.remove();
      footer.remove();
      removePreviousToggleEffect(section);
      toggleBtn(homeBtn);
      firstPage();
      footerPage();
    }
  });

  menuBtn.addEventListener("click", () => {
    const menuSection = document.getElementById("menu");
    const section = document.querySelector("section").id;
    const main = document.querySelector("main");
    const footer = document.querySelector(".footer");
    console.log(!menuSection);
    if (!menuSection) {
      main.remove();
      footer.remove();
      removePreviousToggleEffect(section);
      toggleBtn(menuBtn);
      menuPage();
      footerPage();
    }
  });

  aboutBtn.addEventListener("click", () => {
    const aboutSection = document.getElementById("about");
    const main = document.querySelector("main");
    const section = document.querySelector("section").id;
    console.log(`${section}Btn`);
    const footer = document.querySelector(".footer");
    console.log(!aboutSection);
    if (!aboutSection) {
      console.log("clicked");
      main.remove();
      footer.remove();
      removePreviousToggleEffect(section);
      toggleBtn(aboutBtn);
      aboutPage();
      footerPage();
    }
  });
  /* window.onload = () => {
    const homeSection = document.getElementById("home");
    console.log(homeSection);
    if (!homeSection) {
      homeBtn.addEventListener("click", firstPage);
    }
  }; */
})();
