document.addEventListener('DOMContentLoaded', function () {
    const flashcards = [
      "Pergunta 1: Qual é a capital da França?",
      "Pergunta 2: Qual é 2 + 2?",
      "Pergunta 3: Qual a cor do céu?"
    ];
  
    let currentIndex = 0;
  
    const flashcardText = document.getElementById('flashcard-text');
    const updateFlashcardText = () => {
      flashcardText.textContent = flashcards[currentIndex];
    };
  
    document.getElementById('anterior').addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateFlashcardText();
      }
    });
  
    document.getElementById('proximo').addEventListener('click', () => {
      if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        updateFlashcardText();
      }
    });
  
    document.getElementById('comecar').addEventListener('click', () => {
      currentIndex = 0;
      updateFlashcardText();
    });
  
    document.getElementById('sair').addEventListener('click', () => {
      flashcardText.textContent = "Sessão encerrada.";
    });
  
    // Inicializa com o primeiro flash card
    updateFlashcardText();
  });
  