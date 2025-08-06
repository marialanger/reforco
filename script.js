// Lista de avaliações reais
const avaliacoes = [
  {
    nome: "João M.",
    comentario: "As aulas me ajudaram muito a melhorar minha nota em matemática. Recomendo!",
    nota: 5
  },
  {
    nome: "Larissa P.",
    comentario: "Excelente explicação e paciência. A professora é ótima!",
    nota: 4.5
  },
  {
    nome: "Carlos A.",
    comentario: "Muito bom atendimento e fácil de agendar. Voltarei com certeza!",
    nota: 5
  },
  {
    nome: "Mariana S.",
    comentario: "Gostei bastante, mas poderia ter mais horários disponíveis.",
    nota: 4
  }
];

// Gera estrelas com base na nota
function gerarEstrelas(nota) {
  const estrelas = [];
  for (let i = 1; i <= 5; i++) {
    if (nota >= i) {
      estrelas.push("⭐");
    } else if (nota >= i - 0.5) {
      estrelas.push("⭐"); // Para notas como 4.5
    } else {
      estrelas.push("☆");
    }
  }
  return estrelas.join("");
}

// Mostra as avaliações na página
function exibirAvaliacoes() {
  const container = document.getElementById("review-list");
  if (!container) return;

  avaliacoes.forEach(avaliacao => {
    const card = document.createElement("div");
    card.classList.add("review-card");

    card.innerHTML = `
      <p class="review-text">"${avaliacao.comentario}"</p>
      <div class="review-stars">${gerarEstrelas(avaliacao.nota)}</div>
      <p class="review-author">– ${avaliacao.nome}</p>
    `;

    container.appendChild(card);
  });
}

// Inicializa ao carregar
exibirAvaliacoes();