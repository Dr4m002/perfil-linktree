document.addEventListener("DOMContentLoaded", () => {
    let infoContainer = document.querySelector("#info-container");

    let name = document.createElement("h2");
    let description = document.createElement("p");

    name.textContent = "Chente";
    description.textContent = "Gatito naranja, explorador de lugares altos y amante de las siestas.";

    infoContainer.appendChild(name);
    infoContainer.appendChild(description);
});
