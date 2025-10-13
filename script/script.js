// Toggle sidebar en mobile
const toggleBtn = document.querySelector(".menu-toggle");
const sidebar = document.querySelector("#sidebar");
// Abrir/cerrar sidebar al pulsar el botón
toggleBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  sidebar.classList.toggle("active");
});
// Cerrar sidebar al hacer clic fuera de ella
document.addEventListener("click", (event) => {
  if (sidebar.classList.contains("active") && !sidebar.contains(event.target)) {
    sidebar.classList.remove("active");
  }
});

// Navegación por secciones
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// Función para mostrar una sección específica
function showSection(sectionId) {
  // 1. Ocultar todas las secciones
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // 2. Mostrar la sección seleccionada
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add("active");
  }

  // 3. Cerrar sidebar en móvil
  if (window.innerWidth < 992) {
    sidebar.classList.remove("active");
  }
}

// 4. Manejar clics en enlaces de navegación
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = this.getAttribute("href");
    const targetId = href.substring(1); // Elimina el # del "#about"
    showSection(targetId);
  });
});

// 5. Mostrar sección basada en hash al cargar
const initialHash = window.location.hash.substring(1);
if (initialHash && document.getElementById(initialHash)) {
  showSection(initialHash);
} else {
  showSection("about");
}
