document.querySelector("#load").addEventListener("click", fetchData);

async function fetchData() {
    const url = "https://virtserver.swaggerhub.com/fjsx24-fcc/onsdags-test-api/1.0.0/temperature"

    document.querySelector("#status").innerText = "laddar....";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Fel: ${response.status}`);               
        }


        const data = await response.json();

        console.log("data", data);

        document.querySelector("#output").innerText = JSON.stringify(data.zoneStatus[0].units);

        document.querySelector("#status").innerText = "Data hämtad";
    } catch (error) {
        console.error("Fel vid hämtningen: ", error);

        document.querySelector("#status").innerText = "Något gick fel när vi försökte hämta data.";
    }
}