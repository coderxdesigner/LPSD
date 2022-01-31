let timer
let deleteFirst

const images = ["./assets/img/slide_image1.png", "./assets/img/slide_image2.png", "./assets/img/slide_image3.jpg", "./assets/img/slide_image4.jpg"]

function createSlideShow(images) {
  let currentPosition = 0
  clearInterval(timer)
  clearTimeout(deleteFirst)
  document.getElementById("slideshow").innerHTML = `
  <div class="slide img" style="background-image:url(${images[0]})"></div>
  <div class="slide img" style="background-image:url(${images[1]})"></div>
  `
  // document.getElementById("side-text").setAttribute("style", `background-image:url('${images[2]}')`)
  currentPosition += 2

  timer = setInterval(nextSlide, 7000)

  function nextSlide() {
    document.getElementById("slideshow").insertAdjacentHTML("beforeend", `<div class="slide" style="background-image:url(${images[currentPosition]})"></div>`)
    deleteFirst = setTimeout(function () {
      document.querySelector(".slide").remove()
    }, 1000)
    if (currentPosition + 1 >= images.length) {
      currentPosition = 0
    } else {
      currentPosition += 1
    }
  }
}

createSlideShow(images)
