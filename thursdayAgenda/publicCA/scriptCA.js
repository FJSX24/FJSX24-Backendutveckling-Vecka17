const url =
  "https://virtserver.swaggerhub.com/fjsx24-fcc/my-exported-api/1.0.0/api/users";

async function fetchUsers() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("Användare:", data);

    document.querySelector("pre").innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    console.error("Fel vid hämtning:", err);
  }
}
