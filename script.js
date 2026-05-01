const email = "NazeemDickey@gmail.com";

async function copyEmail() {
  const text = document.getElementById("emailText");

  try {
    await navigator.clipboard.writeText(email);
    if (text) {
      text.textContent = "Email: " + email + " - copied";
      setTimeout(() => {
        text.textContent = "Email: " + email + " | Boynton Beach, FL";
      }, 2000);
    }
  } catch (error) {
    if (text) {
      text.textContent = "Email: " + email + " - copy manually";
    }
  }
}

function setupProjectFilters() {
  const buttons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-tags]");

  if (!buttons.length || !cards.length) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      buttons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      cards.forEach((card) => {
        const tags = card.dataset.tags.split(" ");
        const show = filter === "all" || tags.includes(filter);
        card.classList.toggle("is-hidden", !show);
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", setupProjectFilters);
