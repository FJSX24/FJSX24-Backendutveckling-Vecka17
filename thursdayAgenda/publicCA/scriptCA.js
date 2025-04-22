const useMock = false;

// Frontend använder fetch() för att läsa från mockserver eller lokal backend beroende på useMock-flagga

const url = useMock
  ? "https://virtserver.swaggerhub.com/fjsx24-fcc/my-exported-api/1.0.0/api/users"
  : "http://localhost:8081/api/users";


async function fetchUsers() {
  console.log("Klick registrerad");

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("Användare:", data);

    document.querySelector("pre").innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    console.error("Fel vid hämtning:", err);
  }
}
