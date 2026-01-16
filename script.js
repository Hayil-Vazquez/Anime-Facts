const factEl = document.getElementById("fact");
const btnFact = document.getElementById("btnFact");

async function getAnimeFact() {
    factEl.textContent = "Cargando...";
    try {
        const res = await fetch("https://chandan-02.github.io/anime-facts-rest-api/");
        const data = await res.json();

        const randomFact = data.data[
            Math.floor(Math.random() * data.data.length)
        ].fact;

        factEl.textContent = randomFact;

    } catch (err) {
        factEl.textContent = "No se pudo cargar el dato 😢";
        console.error(err);
    }
}

btnFact.addEventListener("click", getAnimeFact);
