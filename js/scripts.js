const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var date = new Date(2020, 6, 17).toLocaleDateString();
document.getElementById("date").innerHTML = 'Last updated: ' + date;