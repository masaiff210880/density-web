
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/ram/Desktop/Density/density-web/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/ram/Desktop/Density/density-web/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/ram/Desktop/Density/density-web/src/pages/index.js"))
}

