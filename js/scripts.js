const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var d = new Date(2020, 6, 17, 18, 30);
document.getElementById("date").innerHTML = 'Last updated: ' + d;