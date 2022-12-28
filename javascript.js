const container = document.querySelector("div");

const columns = 16;  // aka our 'div1's
const rows = 16

const grid = document.createElement("div");
grid.className = 'grid'
container.appendChild(grid);

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

            /*row.addEventListener('mouseleave', () => {
                document.getElementsByClassName("row")
                for (let k=0; k < 1; k++) {
                row.style.backgroundColor = 'rgb(194, 164, 164';
            }});*/
    
        };
        grid.appendChild(column);
};


