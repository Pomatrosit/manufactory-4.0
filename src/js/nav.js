export const nav = () => {
  const menuLinks = document.querySelectorAll(".menu__link")

  let activeLink = 0
  menuLinks[activeLink].classList.add("menu__link--active")

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuLinks[activeLink].classList.remove("menu__link--active")
      activeLink = +this.dataset.link
      menuLinks[activeLink].classList.add("menu__link--active")
    })
  })

  const nav = document.querySelector(".nav")
  const bigLogo = document.querySelector(".background-logo")

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 150) nav.classList.add("nav-light")
    else nav.classList.remove("nav-light")
    bigLogo.style.transform = `translateY(${-window.pageYOffset / 10}px)`
  })
}
