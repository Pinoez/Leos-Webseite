// Smooth Scrolling für internes Navigationsmenü
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Einfache Textverwaltung: Inhalte in einem Objekt speichern
const content = {
  start: {
    welcome: "Herzlich willkommen bei Ihrer Psychologischen Psychotherapeutin für Verhaltenstherapie."
  },
  ueberMich: {
    description: "Ich bin Psychologische Psychotherapeutin mit Schwerpunkt Verhaltenstherapie. Meine Philosophie ist es, individuell und empathisch zu unterstützen."
  },
  leistungen: {
    description: "Ich biete Verhaltenstherapie für verschiedene Lebensbereiche an, z.B. Stressbewältigung, Angststörungen, und mehr."
  },
  preise: {
    description: "Selbstzahler: 90€ pro Sitzung. Coaching-Honorar auf Anfrage."
  }
};

// Funktion, um Texte im DOM zu aktualisieren anhand des content-Objekts
function updateTexts() {
  document.querySelector('#start p').textContent = content.start.welcome;
  document.querySelector('#ueber-mich p').textContent = content.ueberMich.description;
  document.querySelector('#leistungen p').textContent = content.leistungen.description;
  document.querySelector('#preise p').textContent = content.preise.description;
}

// Texte beim Laden der Seite setzen
document.addEventListener('DOMContentLoaded', updateTexts);
