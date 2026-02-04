/* const responsePromise = fetch("message.txt");
console.log(responsePromise);
responsePromise.then(response => {
    console.log(response);
});

const textPromise = responsePromise.then(response => {
    console.log(response);
    return response.text();
});
textPromise.then(text => {
    document.querySelector("main").textContent = text;
});*/
const response = await fetch("message.txt");
const text = await response.text();
document.querySelector("main").textContent = text;

fetch("data.json")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.title);
    console.log(data.items[0]);
});