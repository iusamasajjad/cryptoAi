const
  range = document.getElementById('range'),
  tooltip = document.getElementById('tooltip'),
  setValue = () => {
    const
      newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
      newPosition = 16 - (newValue * 0.32);
    tooltip.innerHTML = `<span class="flex items-center">$${range.value}</span>`;
    tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
    document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);

// ============ mobile-hamburger-function
function menuToggle() {
  var x = document.getElementById("mobile-menu");
  x.style.width = "100%";
}
function menuClose() {
  var x = document.getElementById("mobile-menu");
  x.style.width = "0%";
}

// ============= fade-in-function 

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);