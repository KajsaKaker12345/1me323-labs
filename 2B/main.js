const car = {
    brand: "Volvo",
    model: "V40",
    year: 2018, 
    getDescription() {
        return `${this.year} ${this.brand} ${this.model}`;
    },
    honk() {
        console.log("Tut tut!");
    }
};
console.log(car.getDescription());
car.honk();
const counter = {
    value: 0,
    increase() {
        this.value++;
    },
    decrease() {
        this.value--
    },
    reset() {
        this.value = 0;
    }
};
const valueSection = document.getElementById("value");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

function updateValue() {
    valueSection.textContent = counter.value;
}
increaseBtn.addEventListener("click", function() {
    counter.increase();
    updateValue();
});
decreaseBtn.addEventListener("click", function() {
    counter.decrease();
    updateValue();
});
resetBtn.addEventListener("click", function() {
    counter.reset();
    updateValue();
});

counter.increase();
console.log(counter.value);
counter.decrease();
console.log(counter.value);
counter.reset();
console.log(counter.value);