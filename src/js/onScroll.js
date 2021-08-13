export const onScroll = () => {
  const nav = document.querySelector(".nav")
  const bigLogo = document.querySelector(".background-logo")
  const portfolioSection = document.querySelector(".portfolio")
  const background = document.querySelector(".background")
  const portfolioTitle = document.querySelector(".portfolio__title")
  const shapes = document.querySelectorAll(".shape")
  const arrows = document.querySelectorAll(".next-screen-link__arrow")

  const scrollHandler = () => {
    if (window.pageYOffset > 150) nav.classList.add("nav-light")
    else nav.classList.remove("nav-light")
    bigLogo.style.transform = `translateY(${-window.pageYOffset / 5}px)`

    if (
      portfolioSection.getBoundingClientRect().top - 126 <
      document.documentElement.clientHeight / 1.5
    ) {
      background.classList.add("background-light")
      shapes.forEach((shape) => shape.classList.add("shape--on-white"))
      arrows.forEach((arrow) =>
        arrow.classList.add("next-screen-link__arrow--on-white")
      )
      portfolioTitle.classList.add("portfolio__title--on-light")
    } else {
      background.classList.remove("background-light")
      shapes.forEach((shape) => shape.classList.remove("shape--on-white"))
      arrows.forEach((arrow) =>
        arrow.classList.remove("next-screen-link__arrow--on-white")
      )
      portfolioTitle.classList.remove("portfolio__title--on-light")
    }
  }

  scrollHandler()

  window.addEventListener("scroll", scrollHandler)
}
