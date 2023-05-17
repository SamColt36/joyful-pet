document.addEventListener("DOMContentLoaded", function () {
  // Seletor do link âncora
  const anchorLink = document.querySelector("a.scroll-smooth");

  // Verifica se o link âncora existe antes de adicionar o ouvinte de evento
  if (anchorLink) {
    anchorLink.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
});
