const cardList = [];

const isIndexPage = document.location.pathname.includes("index.html");
const cardLimit = isIndexPage ? 4 : 12;

// Se inserta Card en index.html
const getCard = () => {
  return fetch("./components/card.html")
    .then((response) => response.text())
    .then((html) => {
      return html;
    })
    .catch((err) => console.error("Failed to load card: ", err));
};

for (let i = 0; i < cardLimit; i++) {
  getCard().then((html) => {
    document.getElementById("card-container").innerHTML += html;
    document.getElementById("card").setAttribute("id", "card" + i);
    document
      .getElementById("buttonOpenModal")
      .setAttribute("id", "buttonOpenModal" + i);
    document.getElementById("cardTitle").setAttribute("id", "cardTitle" + i);
    document.getElementById("cardTitle" + i).innerHTML += i;
    cardList.push(html);
  });
}

// Se inserta Modal en index.html
const getCardModal = () => {
  return fetch("./components/cardModal.html")
    .then((response) => response.text())
    .then((html) => {
      return html;
    })
    .catch((err) => console.error("Failed to load modal: ", err));
};

// Funcionalidades del Modal
getCardModal().then((html) => {
  document.querySelector("main").innerHTML += html;
  const cardModal = document.getElementById("cardModal");
  cardModal.style.visibility = "hidden";

  // Funcionalidad para mostrar el Modal
  getCard().then(() => {
    for (let i = 0; i < cardList.length; i++) {
      const buttonOpenModal = document.getElementById("buttonOpenModal" + i);
      buttonOpenModal.addEventListener("click", () => {
        cardModal.style.visibility = "visible";
        cardModal.showModal();
      });
    }
  });

  // Funcionalidad para cerrar el Modal
  cardModal.addEventListener("click", (e) => {
    if (e.target.id === "cardModal") {
      cardModal.close();
      cardModal.style.visibility = "hidden";
    }
  });
});
