const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);;

const column = 16;  // aka our 'div1's
const rows = 16

for (let i = 0; i < rows; i++) {
    const div1 = document.createElement("div");
    div1.classList.add('div1')
    div1.textContent = 'WUT'
    container.appendChild(div1);
    for (let j = 1; j < column; j++) {
        const div2 = document.createElement("div");
        div2.classList.add('div2')
        div2.textContent = 'WUT'
        div1.appendChild(div2);
    }  
}


