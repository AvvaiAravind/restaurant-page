export function createElementWithId(element, id) {
  const newElement = document.createElement(element);

  newElement.id = id;
  return newElement;
}

export function appendElement(parent, child) {
  console.log(parent);
  const parentElement = document.querySelector(parent);
  console.log(parentElement);
  if (parentElement) {
    const appendedElement = parentElement.appendChild(child);
    // return appendedElement;
  } else {
    console.warn(`Parent element ${parent} not found`);
    return null;
  }
}

export function createElementWithClass(element, ...classattribute) {
  const newElement = document.createElement(element);
  const classattributes = [...classattribute];
  console.log(classattributes);
  console.log(newElement);
  classattributes.forEach((attribute) => {
    newElement.classList.add(attribute);
  });
  return newElement;
}

export function createWorkingHours(ul) {
  const workingHours = [
    "Sunday: 8am - 8pm",
    "Monday: 6am - 6pm",
    "Tuesday:6am - 6pm",
    "Wednesday: 6am- 6pm",
    "Thursday: 6am - 10pm",
    "Friday: 6am - 10pm",
    "Saturday: 8am - 10pm",
  ];
  workingHours.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  return ul;
}

export function toggleBtn(element) {
  if (element === null) return;
  console.log(element);
  element.classList.toggle("tabbed");
}

export function removePreviousToggleEffect(section) {
  const homeBtn = document.getElementById("homebtn");
  const menuBtn = document.getElementById("menubtn");
  const aboutBtn = document.getElementById("aboutbtn");
  switch (section) {
    case "home":
      toggleBtn(homeBtn);
      break;
    case "about":
      toggleBtn(aboutBtn);
      break;
    case "menu":
      toggleBtn(menuBtn);
      break;
  }
}
