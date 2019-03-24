function createGrid(width, height) {
    const container = document.querySelector('div#container');
    container.setAttribute('style', `grid-template-rows: repeat(${width}, 1fr) ; grid-template-columns: repeat(${height}, 1fr`);

    container.innerHTML = '';

    for (var i = 0 ; i < width ; i++) {
        for (var j = 0 ; j < height ; j++) {
            const box = document.createElement('div');
            box.classList.add('grid');
            box.textContent = "(" + i + "," + j + ")";
            container.appendChild(box);
        }
    }
}