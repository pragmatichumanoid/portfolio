window.addEventListener("scroll", revealElements);

function revealElements() {
  const elements = document.querySelectorAll(".scroll-reveal");
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
      element.classList.add("active");
    }
  });
}
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Por favor, preencha todos os campos.");
  } else {
    // Aqui você pode enviar os dados do formulário para o servidor ou realizar outras ações desejadas
    // Por exemplo, você pode usar uma solicitação AJAX para enviá-los.

    // Reinicie os campos do formulário
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    alert("Mensagem enviada com sucesso!");
  }
});

