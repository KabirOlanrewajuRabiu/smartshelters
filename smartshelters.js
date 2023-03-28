const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const menu = ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

hamburger.addEventListener("click", menu);


document.querySelectorAll(".nav-link").
forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))