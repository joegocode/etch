let board = document.querySelector('.board')
board.style.gridTemplateColumns = 'repeat(16,fr)';
board.style.gridTemplateRows = 'repeat(16,fr)';

for(let i= 0; i < 256; i++){
    let sqaure = document.createElement('div');
    sqaure.style.backgroundColor = 'blue';
    board.insertAdjacentElement("beforeend", sqaure);
}