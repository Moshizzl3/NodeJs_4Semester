import fs from "fs";

const navComponent = fs
  .readFileSync("./public/components/navbar/navbar.html")
  .toString();
const footerComponent = fs
  .readFileSync("./public/components/footer/footer.html")
  .toString();

export function renderPage(path, options = {}) {
  const page = fs.readFileSync("./public/pages" + path).toString();

  return (
    navComponent
      .replace("%%TAB_TITLE%%", options.tabTitle || "Pokemon")
      .replace("%%PAGE_CSS_LINK%%", options.cssLink || "") +
    page +
    footerComponent
  );
}

export function injectData(pageString, data) {
  const brokenHtml = pageString.split("</head>");
  const variableName = Object.keys(data)[0];
  return (
    brokenHtml[0] +
    `<script> const ${variableName} = ${JSON.stringify(
      data[variableName]
    )} </script></head>` +
    brokenHtml[1]
  );
}
