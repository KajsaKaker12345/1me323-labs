async function analyzeMenu() {
    const response = await fetch("menu.json");
    const menu = await response.json();
    console.log("restaurang:", menu.restaurant.name);
    console.log("Antal kategorier:", menu.categories.length);
}
analyzeMenu();