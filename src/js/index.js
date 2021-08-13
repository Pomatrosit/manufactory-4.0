import "../scss/index.scss"

import { nav } from "./nav"
import { onScroll } from "./onScroll"
import { portfolio } from "./portfolio"

document.addEventListener("DOMContentLoaded", () => {
  nav()
  onScroll()
  portfolio()
})
