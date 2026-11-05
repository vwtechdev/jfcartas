const WHATSAPP_NUMBER = "+5547996389261";
const WHATSAPP_MESSAGE = "Olá JF Cartas!";

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
