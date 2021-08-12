const tiles = document.querySelectorAll('.project-tile');
const reset = document.querySelector('main');

for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];

    tile.addEventListener('click', e => {
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].style.width = null;
        }

        e.target.style.width = '80%';

    })
    
}

