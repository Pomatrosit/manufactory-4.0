import Swiper from "swiper"
import "swiper/swiper-bundle.css"

export const portfolio = () => {
  let activeLink = 0

  const links = document.querySelectorAll(".portfolio-nav__link")
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links[activeLink].classList.remove("portfolio-nav__link--active")
      activeLink = +this.dataset.link
      links[activeLink].classList.add("portfolio-nav__link--active")
    })
  })

  const swiper = new Swiper(".portfolio-nav-swiper-container", {
    loop: false,
    allowTouchMove: false,
    slidesToShow: 1,
  })
}
