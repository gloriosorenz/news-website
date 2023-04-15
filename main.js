const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
//  show hamburger menu function
hamburger.onclick = function() {
    nav.classList.toggle("active");
}

// show active nav link
let navbar = document.querySelector(".nav-bar");
let links = navbar.querySelectorAll(".nav-link");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


// toggle like button function
document.querySelectorAll(".fa-heart").forEach((button) => {
    button.onclick = () => {
      button.classList.toggle("fa-solid");
    }
});

// Mark news as read function
document.querySelectorAll(".card").forEach((element) => {
    element.onclick = () => {
        let check = element.querySelector(".fa-circle-check");
        check.style.display = "block";
    }
});


// Delete news function
document.querySelectorAll(".fa-circle-xmark").forEach((button) => {
    button.onclick = () => {
      button.classList.toggle("fa-solid");
      button.parentElement.remove();
    }
});






