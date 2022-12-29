
const container = document.querySelector("div");
const grid = document.createElement("div");
grid.className = 'grid'
container.appendChild(grid);

gridGenerator(16, 16)

//function gridRemover() {}

function gridGenerator(columns, rows) {

    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'column';
        
        for (let j = 0; j < rows; j++) {
            const row = document.createElement("div");
            row.className = 'row'
            row.textContent = 'LFG'
            column.appendChild(row);

            row.addEventListener('mouseenter', () => {
                document.getElementsByClassName("row")
                for (let k=0; k < 1; k++) {
                row.style.backgroundColor = 'blue';
            }});
    
        };
        grid.appendChild(column);
    };
};


const button = document.querySelector('button');
button.addEventListener('click', () => {
    let ans = prompt("How many squares per side would you like?")
    gridGenerator(ans, ans);
});
