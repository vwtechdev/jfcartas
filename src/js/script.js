const WHATSAPP_NUMBER = "+5549920031468";
const WHATSAPP_MESSAGE = "Olá JF Cartas! Gostaria de saber mais sobre uma consulta de Baralho Cigano.";

const whatsappLink = document.querySelector("#whatsapp-link");

function openWhatsapp() {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  whatsappLink.href =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

openWhatsapp();

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
