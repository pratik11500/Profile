$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('header').addClass('nav-show');
  } else {
    $('header').removeClass('nav-show');
  }
})
const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".nav-bar");
  const navLinks = document.querySelectorAll(".nav-bar li");
  hamburger.onclick = () => {
    navbar.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
      }
    }
    );
    hamburger.classList.toggle("toggle");
  }
}
window.onload = () => navSlide();
const updateVisitorCount = async () => {
  try {
    const response = await fetch('#');
    const result = await response.json();
    document.getElementById('visitor-count').innerHTML = result.value;
  } catch (error) {
    console.error(error);
  }

  var blockContextMenu = function (e) {
    // Prevent right-click context menu
    e.preventDefault();
};

  

var showWarning = function () {
    var warningPopup = document.createElement('div');
    warningPopup.innerHTML = '<p>Content is Protected!</p>';
    warningPopup.classList.add('warning-popup');
    document.body.appendChild(warningPopup);

    // Remove the warning after a delay (e.g., 2 seconds)
    setTimeout(function () {
        document.body.removeChild(warningPopup);
    }, 2000);
};

document.addEventListener('contextmenu', blockContextMenu);
document.addEventListener('keydown', function (e) {
    // Disable F12 key
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        showWarning();
    }
});
}
  ;
updateVisitorCount();

vvvvvvvvvvvvvvvvvvvvv
