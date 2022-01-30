class MobileMenu {
  constructor() {
    this.menuIcon = document.getElementById("mobile")
    this.menuContent = document.getElementById("lg-menu")
    this.events()
  }
  events() {
    this.menuIcon.addEventListener("click", () => this.toggleMenu())
  }
  toggleMenu() {
    this.menuContent.classList.toggle("active")
  }
}

class Search {
  constructor() {
    this.button = document.getElementById("search-open")
    this.icon = document.getElementById("searchIco")
    this.input = document.getElementById("search_input")
    this.events()
  }
  events() {
    this.button.addEventListener("click", () => this.toggleMenu())
  }
  toggleMenu() {
    this.input.classList.toggle("active")
    this.icon.classList.toggle("active")
    this.icon.classList.add("spin")
  }
}
function slideShow() {}
new Search()
new MobileMenu()
