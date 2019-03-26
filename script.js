function newGrid() {
    var response = window.prompt("Select new grid size","");
    createGrid(response, response);
}

function createGrid(width, height) {
    const container = document.querySelector('div#container');
    container.setAttribute('style', `grid-template-rows: repeat(${width}, 1fr) ; grid-template-columns: repeat(${height}, 1fr`);

    container.innerHTML = '';

    for (var i = 0 ; i < width ; i++) {
        for (var j = 0 ; j < height ; j++) {
            const box = document.createElement('div');
            box.classList.add('grid');
            container.appendChild(box);
        }
    }

    const cells = document.querySelectorAll('.grid');

    cells.forEach((cell) => {
        // and for each one we add a 'click' listener
        cell.addEventListener("mouseenter", (e) => {
        cell.style.backgroundColor = 'blue';
        });
    });
}