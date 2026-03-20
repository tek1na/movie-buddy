// Отримуємо назву зі змінних оточення (Vite шукає їх у файлах .env)
const appTitle = import.meta.env.VITE_APP_TITLE || "UniDone Default";

// Знаходимо наш заголовок у HTML і міняємо його текст
const titleElement = document.querySelector('#project-title');
if (titleElement) {
    titleElement.textContent = appTitle;
}

console.log("Додаток запущено у режимі:", import.meta.env.MODE);