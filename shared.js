var header = document.querySelector('.nav-bar__items');
var skillsLink = document.querySelector('.nav-bar__skills');
var aboutButton = document.querySelector('.about-me');
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var toggleButton = document.querySelector(".toggle-button");
var mobileNavBar = document.querySelector(".mobile-nav-bar");

aboutButton.addEventListener('click', ()=> {
    backdrop.style.display = "block";
    backdrop.classList.add("open");
    modal.classList.add("open");
});

backdrop.addEventListener('click', ()=> {
    backdrop.style.display = "none";
    backdrop.classList.remove("open");
    mobileNavBar.classList.remove("flex-display");
    if (modal) {
        modal.classList.remove("open");
      }
})

toggleButton.addEventListener('click', ()=> {
    console.log("toggle");
    mobileNavBar.classList.add("flex-display");
    backdrop.classList.add("open");
});

// mobile nav bar items
let hiNav = document.querySelector(".mobile-nav-bar__hi");
let skillNav = document.querySelector(".mobile-nav-bar__skills");
let projectNav = document.querySelector(".mobile-nav-bar__projects");
let contactNav = document.querySelector(".mobile-nav-bar__contact-me");


hiNav.addEventListener("click", ()=> {
    backdrop.style.display = "none";
    backdrop.classList.remove("open");
    mobileNavBar.classList.remove("flex-display");
});

skillNav.addEventListener("click", ()=> {
    backdrop.style.display = "none";
    backdrop.classList.remove("open");
    mobileNavBar.classList.remove("flex-display");
});

projectNav.addEventListener("click", ()=> {
    backdrop.style.display = "none";
    backdrop.classList.remove("open");
    mobileNavBar.classList.remove("flex-display");
});

contactNav.addEventListener("click", ()=> {
    backdrop.style.display = "none";
    backdrop.classList.remove("open");
    mobileNavBar.classList.remove("flex-display");
});