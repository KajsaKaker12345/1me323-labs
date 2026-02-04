localStorage.setItem("animal", "hund");
const nameInput = document.getElementById("nameInput");
const savedName = localStorage.setItem("name");
if (savedName) {
    nameInput.value = savedName;
}
nameInput.addEventListener("input", function() {
    localStorage.setItem("name", nameInput.value);
});
const themeRadios = document.querySelectorAll('input[name="theme"]');
let savedTheme =  "light"; // default värde
if (localStorage.getItem('selectedTheme')) {
  savedTheme = localStorage.getItem('selectedTheme');
}

// Tillämpa sparat tema
document.body.className = savedTheme + '-theme';
document.querySelector(`input[value="${savedTheme}"]`).checked = true;

// Lyssna på ändringar
themeRadios.forEach(radio => {
  radio.addEventListener('change', function() {
    localStorage.setItem('selectedTheme', this.value);
    document.body.className = this.value + '-theme';
  });
});