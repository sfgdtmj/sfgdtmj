
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll(".product-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      cards.forEach(card => {
        if (filter === "all" || card.classList.contains(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
