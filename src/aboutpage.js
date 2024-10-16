import {
  createElementWithClass,
  createElementWithId,
  appendElement,
} from "./utilityfunction.js";

export function aboutPage() {
  const main = createElementWithId("main", "content");
  const section = createElementWithId("section", "about");
  const headingContainer = createElementWithClass("div", "heading-container");
  const h1 = createElementWithClass("h1", "heading1", "design");
  const content1 = createElementWithClass("div", "content1", "design");
  const content1Heading = document.createElement("h2");
  const content1Para = document.createElement("p");
  const content2 = createElementWithClass("div", "content2", "design");
  const content2Heading = document.createElement("h2");
  const content2Para = document.createElement("p");

  // adding textcontent

  h1.textContent = "Contact Us";

  content1.style.textAlign = "center";
  content1Heading.textContent = "Mama Bear";
  content1Para.innerHTML = `Chef<br>555-555-5554<br>totallyRealEmail@notFake.com`;

  content2.style.textAlign = "center";
  content2Heading.textContent = "Mama Bear";
  content2Para.innerHTML = `Chef<br>555-555-5554<br>totallyRealEmail@notFake.com`;

  // appending section in main
  appendElement("body", main);
  appendElement("#content", section);

  // appendgin elements into sections

  appendElement("#about", headingContainer);
  appendElement(".heading-container", h1);

  appendElement("#about", content1);
  appendElement(".content1", content1Heading);
  appendElement(".content1", content1Para);

  appendElement("#about", content2);
  appendElement(".content2", content2Heading);
  appendElement(".content2", content2Para);
}
