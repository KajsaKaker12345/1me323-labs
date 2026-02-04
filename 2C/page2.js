const savedAnimal = localStorage.getItem("animal");
console.log(savedAnimal);
document.getElementById("removeAnimal").addEventListener("click", function() {
    localStorage.removeItem("animal");
    console.log("sparad djur borttaget");
});