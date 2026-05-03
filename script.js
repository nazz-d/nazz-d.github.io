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

// Cursor spotlight — fixed overlay so we use clientX/clientY (viewport coords)
function setupCursorSpotlight() {
  let tx = window.innerWidth  / 2;
  let ty = window.innerHeight / 2;
  let cx = tx;
  let cy = ty;

  document.addEventListener("mousemove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
  });

  function lerp(a, b, t) { return a + (b - a) * t; }

  function tick() {
    if (!document.hidden) {
      cx = lerp(cx, tx, 0.08);
      cy = lerp(cy, ty, 0.08);
      const xPct = (cx / window.innerWidth  * 100).toFixed(2) + "%";
      const yPct = (cy / window.innerHeight * 100).toFixed(2) + "%";
      document.documentElement.style.setProperty("--cx", xPct);
      document.documentElement.style.setProperty("--cy", yPct);
    }
    requestAnimationFrame(tick);
  }
  tick();
}

// Apple-style liquid glass — tracks cursor position + angle within each panel
function setupGlassPanels() {
  const panels = document.querySelectorAll(".glass-panel");

  panels.forEach((panel) => {
    panel.addEventListener("mousemove", (e) => {
      const rect = panel.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      // Position as % for the radial gradient
      const xPct = (mx / rect.width  * 100).toFixed(1) + "%";
      const yPct = (my / rect.height * 100).toFixed(1) + "%";

      // Angle from card center to cursor — drives the conic rim highlight
      const dx = mx - rect.width  / 2;
      const dy = my - rect.height / 2;
      const deg = (Math.atan2(dy, dx) * 180 / Math.PI).toFixed(1) + "deg";

      panel.style.setProperty("--mx",    xPct);
      panel.style.setProperty("--my",    yPct);
      panel.style.setProperty("--angle", deg);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupProjectFilters();
  setupCursorSpotlight();
  setupGlassPanels();
});
