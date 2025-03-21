const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".note-btn");
const notes = document.querySelectorAll("input-box");


createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let xp = document.createElement('p');
    let hr = document.createElement('hr');
    inputBox.className = "input-box";
    xp.innerHTML = "❌"
    xp.classList.add('img')
    inputBox.classList.add('input-box')
    inputBox.setAttribute("contenteditable", "true");
    notesContainer.appendChild(inputBox);

    notesContainer.appendChild(xp);
    notesContainer.appendChild(hr);
})


notesContainer.addEventListener('click', (e) => {
    if(e.target.className === "img"){
        e.target.firstChild.remove();
    }

    console.log(e);
    
})