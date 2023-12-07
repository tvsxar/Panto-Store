const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

// click on hint buttons

for (let btn of infoBtns) {
    btn.addEventListener("click", showHint);
}

function showHint(e) {
    e.stopPropagation();
    this.parentNode.querySelector(".info-hint").classList.toggle("none");
}

// click on document - hint buttons closing

document.addEventListener("click", closeHints);

function closeHints() {
    for (let hint of infoHints) {
        hint.classList.add("none");
    }
}

// clicking on the hint prevents surfacing

for (let hint of infoHints) {
    hint.addEventListener("click", (e) => e.stopPropagation());
}