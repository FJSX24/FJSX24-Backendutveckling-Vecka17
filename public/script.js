document.querySelector("#load").addEventListener("click", fetchData);

async function fetchData() {
    const useSwaggerMock = false;
    const url = useSwaggerMock ? "https://virtserver.swaggerhub.com/fjsx24-fcc/test-onsdag-user-api/1.0.0/api/users" : "http://localhost:8000/api/users"

    // const url = "http://localhost:8000/api/users"

    document.querySelector("#status").innerText = "laddar....";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Fel: ${response.status}`);               
        }


        const data = await response.json();

        console.log("data", data);

        document.querySelector("#output").innerText = JSON.stringify(data);

        document.querySelector("#status").innerText = "Data hämtad";
    } catch (error) {
        console.error("Fel vid hämtningen: ", error);

        document.querySelector("#status").innerText = "Något gick fel när vi försökte hämta data.";
    }
}