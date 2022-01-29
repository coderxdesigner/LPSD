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
new MobileMenu()
