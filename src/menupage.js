import {
  createElementWithClass,
  createElementWithId,
  appendElement,
} from "./utilityfunction.js";

export function menuPage() {
  const main = createElementWithId("main", "content");
  const section = createElementWithId("section", "menu");
  const headingContainer = createElementWithClass("div", "heading-container");
  const h1 = createElementWithClass("h1", "heading1", "design");
  const content1 = createElementWithClass("div", "content1", "design");
  const content1Heading = document.createElement("h2");
  const content1Para = document.createElement("p");
  const content2 = createElementWithClass("div", "content2", "design");
  const content2Heading = document.createElement("h2");
  const content2Para = document.createElement("p");

  // adding textcontent
  h1.textContent = "Menu";

  content1.style.textAlign = "center";
  content1Heading.textContent = "Honey Tea";
  content1Para.innerHTML = `A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!`;

  content2.style.textAlign = "center";
  content2Heading.textContent = "Beary Tea";
  content2Para.innerHTML = `A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.`;

  // appendElement
  appendElement("body", main);
  appendElement("#content", section);

  appendElement("#menu", headingContainer);
  appendElement(".heading-container", h1);

  appendElement("#menu", content1);
  appendElement(".content1", content1Heading);
  appendElement(".content1", content1Para);

  appendElement("#menu", content2);
  appendElement(".content2", content2Heading);
  appendElement(".content2", content2Para);
}
