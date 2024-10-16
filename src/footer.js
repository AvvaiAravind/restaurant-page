import { appendElement, createElementWithClass } from "./utilityfunction";

export function footerPage() {
  const footer = createElementWithClass("footer", "footer");
  footer.innerHTML = `
    <ul>
      <li>
        <a href="https://web.archive.org/web/20221024084501/https://www.freepik.com/">
          Hive icon made by Freepik - www.flaticon.com
        </a>
      </li>
      <li>
        <a href="https://web.archive.org/web/20221013083739/https://www.flaticon.com/authors/smashicons">
          Hive icon made by Freepik - www.flaticon.com
        </a>
      </li>
      <li>
        <a href="https://web.archive.org/web/20221024084501/https://www.freepik.com/">
          Hive icon made by Freepik - www.flaticon.com
        </a>
      </li>
    </ul>
  `;

  appendElement("body", footer);
}
