const easyMDE = new EasyMDE({
    element: document.getElementById('markdownEditor'),
    spellChecker: false,
    placeholder: "Digite seu conteúdo aqui usando Markdown...",
    toolbar: ["bold", "italic", "heading", "|", "quote", "unordered-list", "ordered-list", "|", "link", "image", "|", "preview", "side-by-side", "fullscreen", "|", "guide"],
    sideBySideFullscreen: false
});