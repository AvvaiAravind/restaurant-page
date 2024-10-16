import {
  createElementWithId,
  appendElement,
  createElementWithClass,
  createWorkingHours,
} from "./utilityfunction";

export function firstPage() {
  const main = createElementWithId("main", "content");
  const section = createElementWithId("section", "home");
  const headingContainer = createElementWithClass("div", "heading-container");
  console.log(headingContainer);
  const h1 = createElementWithClass("h1", "heading1", "design");
  const content1 = createElementWithClass("div", "content1", "design");
  const content1Para1 = document.createElement("p");
  const content1Para2 = document.createElement("p");
  const hoursSection = createElementWithClass("div", "hours", "design");
  const hoursH2 = document.createElement("h2");
  const ul = document.createElement("ul");
  const workingHoursList = createWorkingHours(ul);
  const locationSection = createElementWithClass("div", "location", "design");
  const locationH2 = document.createElement("h2");
  const locationPara = document.createElement("p");

  // adding textcontent

  h1.textContent = "Beary's Breakfast Bar";
  content1Para1.textContent =
    " Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods,eating like a bear! This is exactly the kind of place that I like to return to again and again.";
  content1Para2.textContent = `${"\u00A0\u00A0\u00A0\u00A0"} Goldilocks`;

  hoursH2.textContent = "Hours";

  locationH2.textContent = "Location";
  locationPara.textContent = "Forest Drive, Forestville, Maine";

  // appending body and section

  console.log(headingContainer);
  appendElement("body", main);
  appendElement("#content", section);

  // appending into the section

  appendElement("#home", headingContainer);
  appendElement(".heading-container", h1);

  appendElement("#home", content1);
  appendElement(".content1", content1Para1);
  appendElement(".content1", content1Para2);

  appendElement("#home", hoursSection);
  appendElement(".hours", hoursH2);
  appendElement(".hours", workingHoursList);

  appendElement("#home", locationSection);
  appendElement(".location", locationH2);
  appendElement(".location", locationPara);
}
