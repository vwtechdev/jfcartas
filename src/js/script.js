const whatsappLink = document.querySelector("#whatsapp-link");

if (whatsappLink && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  const whatsappUrl = new URL(whatsappLink.href);
  const phone = whatsappUrl.pathname.replace(/\D/g, "");

  whatsappLink.href = `whatsapp://send?phone=${phone}`;
  whatsappLink.removeAttribute("target");
}

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
