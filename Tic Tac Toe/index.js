const cells = document.querySelectorAll(".cell");



let trueX = true;


const winPat = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if(trueX){
            cell.innerText = 'X';
            trueX = false;
        } else {
            cell.innerText = 'O';
            trueX = true;
        }
        cell.disabled = true;
        
        winnerCheck();
    })
})

const winnerCheck = () => {
    for(let pattern of winPat) {
        console.log(cells[pattern[0]].innerText);
        
    }
}