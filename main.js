const easyMDE = new EasyMDE({
    element: document.getElementById('markdownEditor'),
    spellChecker: false,
    placeholder: "Digite seu conteúdo aqui usando Markdown...",
    toolbar: ["bold", "italic", "heading", "|", "quote", "unordered-list", "ordered-list", "|", "link", "image", "|", "preview", "side-by-side", "fullscreen", "|", "guide"],
    sideBySideFullscreen: false
});

const palavrasChaveHTML = document.querySelector("#palavrasChave")

const tagBox = document.querySelector(".tag-box")

const tags = []

function addKeyword(){
    const keyword = palavrasChaveHTML.value
    tags.push(keyword)
    palavrasChaveHTML.value = ""

    renderTags()
}

function renderTags(){
    tagBox.innerHTML = ""
    for (let tag in tags){
        tagBox.innerHTML = tagBox.innerHTML + `<span class="tag">${tags[tag]}<i class="bx bx-x" onclick="removeTag(${tag})"></i> </span>`
    }
}

function removeTag(tag){
    tags.splice(tag, 1)
    renderTags()
}