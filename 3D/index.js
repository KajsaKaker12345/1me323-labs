const h1 = document.createElement('h1');
const p = document.createElement("p");
const button = document.createElement("button");


h1.textContent = "min första createElement";
p.classList.add("description");
p.textContent = "hej hej hur mår du?";
button.textContent = "klicka mig";

const container = document.querySelector("main");
const heading = document.createElement("h2");
heading.textContent = "välkommen!";
const paragraph = document.createElement("p");
paragraph.textContent = "detta skapades med JavaScript";
container.append(heading, paragraph, h1, p, button);
button.addEventListener("click", () => {
    const h1 = document.createElement("h1");
    h1.textContent = "nej";
    container.append(h1);
} )