document.querySelector("#load").addEventListener("click", fetchData);

async function fetchData() {
  const url =
    // "https://virtserver.swaggerhub.com/fjsx24-fcc/my-exported-api/1.0.0/api/users"; // ← Byt ut
    "https://virtserver.swaggerhub.com/fjsx24-fcc/test-api/1.0.0/devices"; // ← Byt ut

  document.querySelector("#status").innerText = "Laddar...";

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Fel: ${res.status}`);
    }

    const data = await res.json();
    document.querySelector("#output").innerText = JSON.stringify(data, null, 2);
    document.querySelector("#status").innerText = "Data hämtad!";
  } catch (err) {
    console.error("Fel vid hämtning:", err);
    document.querySelector("#status").innerText = "Något gick fel.";
  }
}
