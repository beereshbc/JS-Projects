const createBtn = document.querySelector(".create-btn");
const listContainer = document.querySelector(".list-container");

createBtn.addEventListener("click", () => {
  let note = document.createElement("p");
  let img = document.createElement("img");
  img.setAttribute("src", "1214428.png");
  note.setAttribute("contenteditable", "true");
  note.setAttribute("focus", "true");
  note.className = "notess";
  note.innerHTML = "Write here...";
  listContainer.appendChild(note).appendChild(img);
  storeNote();
  updateNotes();
});

listContainer.addEventListener("click", (e) => {
  console.log(e.target.parentElement);

  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    storeNote();
    updateNotes();
  } else if (e.target.tagName === "P") {
    const notes = document.querySelectorAll(".notess");
    notes.forEach((nt) => {
      nt.onkeyup = function () {};
    });
  }
});

const storeNote = () => {
  localStorage.setItem("notes", listContainer.innerHTML);
};

const updateNotes = () => {
  listContainer.innerHTML = localStorage.getItem("notes");
};
