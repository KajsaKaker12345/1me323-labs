const person = {
    firstName: "Kajsa",
    lastName: "Kaker",
    age: 23,
    occupation: "Student",
    adress: {
        street: "BlaBla 123",
        city: "Växjö",
        country: "Sweden"
    }
};
const artist = {
    name: "Summer Walker",
    age: "30",
    genre: ["Pop", "HipHop", "R&b"],
    background: {
        started: "2009",
        born: "Kalifornien"
    }
};
console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);
console.log("Min stad: ", person.adress.city);
person.hobby = "Musik";
person.age = 37;
delete person.occupation;

console.log(person.email);
console.log("Har jag en sysselsättning? ", "occupation" in person);

const personInfo = document.getElementById("etta"); 
personInfo.innerHTML = `<h2>${person.firstName} ${person.lastName}</h2>
<p>Ålder: ${person.age}</p>`;
for (const key in person) {
    console.log(key, person[key]);
}