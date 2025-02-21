const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
    if (inputBox.value === "") {
        alert("Must Enter a task")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value= ""
    storeData();
}

listContainer.addEventListener('click', (e) => {
    console.log();
    

    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        storeData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        storeData();
    }

}, false)

const storeData = () => {
    localStorage.setItem('data', listContainer.innerHTML)
}

const reStoreData = () => {
    listContainer.innerHTML = localStorage.getItem('data')
}

reStoreData();
console.log(reStoreData());
