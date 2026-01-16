const factEl = document.getElementById("fact");
const btnFact = document.getElementById("btnFact");

// Lista de animes disponibles
const animes = [
    "naruto",
    "bleach",
    "one_piece",
    "attack_on_titan",
    "dragon_ball",
    "death_note"
];

async function getAnimeFact() {
    factEl.textContent = "Cargando...";

    try {
        // Elegir anime aleatorio
        const anime = animes[Math.floor(Math.random() * animes.length)];

        const res = await fetch(
            `https://anime-facts-rest-api.herokuapp.com/api/v1/${anime}`
        );

        if (!res.ok) {
            throw new Error("Error en la API");
        }

        const data = await res.json();

        // Elegir fact aleatorio
        const randomFact =
            data.data[Math.floor(Math.random() * data.data.length)].fact;

        factEl.textContent = randomFact;

    } catch (error) {
        factEl.textContent = "No se pudo cargar el dato 😢";
        console.error(error);
    }
}

btnFact.addEventListener("click", getAnimeFact);
