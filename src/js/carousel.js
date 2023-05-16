document.addEventListener("DOMContentLoaded", function () {
  // Obtém os elementos do carrossel
  const carouselContent = document.getElementById("carousel-content");
  const carouselPrev = document.getElementById("carousel-prev");
  const carouselNext = document.getElementById("carousel-next");

  // Define a quantidade de rolagem em pixels
  const scrollAmount = 300;

  // Função para rolar para a esquerda
  const scrollLeft = () => {
    carouselContent.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  // Função para rolar para a direita
  const scrollRight = () => {
    carouselContent.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // Adiciona os ouvintes de eventos aos ícones SVG
  carouselPrev.addEventListener("click", scrollLeft);
  carouselNext.addEventListener("click", scrollRight);
});
