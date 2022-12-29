const container = document.querySelector("div");
const grid = document.createElement("div");
grid.className = 'grid'
container.appendChild(grid);

function gridGenerator(columns, rows) {
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'column';
        
        for (let j = 0; j < rows; j++) {
            const row = document.createElement("div");
            row.className = 'row'
            row.textContent = ' '
            column.appendChild(row);

            row.addEventListener('mouseenter', () => {
                document.getElementsByClassName("row")
                for (let k=0; k < 1; k++) {
                row.style.backgroundColor = '#b1acac';
            }});
        };
        grid.appendChild(column);
    };
};

gridGenerator(16, 16)

function gridRemover() {
    grid.innerHTML = ' ';}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    gridRemover();
    const ans = prompt("How many squares per side would you like?")
    if (ans > 100) {
        alert("grid size limit exceeded")
        gridGenerator(99, 99);
    }
    else {
        gridGenerator(ans, ans);
    };
});
