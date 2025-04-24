
// global.js

// Impede submissão padrão de todos os formulários
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => e.preventDefault());
});

// Alerta estilizado simples
export function showAlert(msg, tipo = "info") {
  alert(`[${tipo.toUpperCase()}] ${msg}`);
}
