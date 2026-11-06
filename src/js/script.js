const whatsappLink = document.querySelector("#whatsapp-link");
const userAgent = navigator.userAgent;
const isMobile = /Android|iPhone|iPad|iPod/i.test(userAgent);
const isTikTok = /TikTok|musical_ly|BytedanceWebview|Bytedance/i.test(userAgent);
const isInApp = /TikTok|musical_ly|BytedanceWebview|Bytedance|Instagram|FBAN|FBAV|FB_IAB/i.test(userAgent);

if (whatsappLink && isMobile && !isInApp) {
  const whatsappUrl = new URL(whatsappLink.href);
  const phone = whatsappUrl.pathname.replace(/\D/g, "");

  whatsappLink.href = `whatsapp://send?phone=${phone}`;
  whatsappLink.removeAttribute("target");
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();

  const copied = document.execCommand("copy");
  input.remove();

  return copied;
}

const inappDialog = document.querySelector("#inapp-dialog");

if (whatsappLink && inappDialog && isTikTok) {
  const closeDialog = () => {
    inappDialog.hidden = true;
  };

  whatsappLink.addEventListener("click", (event) => {
    event.preventDefault();
    inappDialog.hidden = false;
  });

  document.querySelector("#inapp-close").addEventListener("click", closeDialog);

  document.querySelector("#inapp-copy").addEventListener("click", async (event) => {
    const button = event.currentTarget;
    const whatsappUrl = new URL(whatsappLink.href);
    const phone = `+${whatsappUrl.pathname.replace(/\D/g, "")}`;

    try {
      const copied = await copyText(phone);
      button.textContent = copied ? "Número copiado" : "Não foi possível copiar";
    } catch {
      button.textContent = "Não foi possível copiar";
    }
  });

  inappDialog.addEventListener("click", (event) => {
    if (event.target === inappDialog) {
      closeDialog();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !inappDialog.hidden) {
      closeDialog();
    }
  });
}

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
