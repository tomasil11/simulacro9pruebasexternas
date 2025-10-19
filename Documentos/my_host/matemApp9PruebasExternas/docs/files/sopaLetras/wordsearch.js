const words = ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'JAVA'];
const grid = [];
const gridSize = 10;

// Initialize the grid
for (let i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (let j = 0; j < gridSize; j++) {
        grid[i][j] = '';
    }
}

// Place words in the grid
function placeWord(word) {
    const directions = ['HORIZONTAL', 'VERTICAL'];
    const direction = directions[Math.floor(Math.random() * directions.length)];
    let x, y, fits;

    if (direction === 'HORIZONTAL') {
        do {
            x = Math.floor(Math.random() * (gridSize - word.length));
            y = Math.floor(Math.random() * gridSize);
            fits = true;
            for (let i = 0; i < word.length; i++) {
                if (grid[y][x + i] !== '' && grid[y][x + i] !== word[i]) {
                    fits = false;
                    break;
                }
            }
        } while (!fits);
        for (let i = 0; i < word.length; i++) {
            grid[y][x + i] = word[i];
        }
    } else {
        do {
            x = Math.floor(Math.random() * gridSize);
            y = Math.floor(Math.random() * (gridSize - word.length));
            fits = true;
            for (let i = 0; i < word.length; i++) {
                if (grid[y + i][x] !== '' && grid[y + i][x] !== word[i]) {
                    fits = false;
                    break;
                }
            }
        } while (!fits);
        for (let i = 0; i < word.length; i++) {
            grid[y + i][x] = word[i];
        }
    }
}

words.forEach(word => placeWord(word));

// Fill empty spaces with random letters
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        if (grid[i][j] === '') {
            grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
    }
}

// Render the grid
const wordsearch = document.getElementById('wordsearch');
const cells = [];
grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
        const cellElement = document.createElement('div');
        cellElement.textContent = cell;
        cellElement.dataset.row = rowIndex;
        cellElement.dataset.col = colIndex;
        wordsearch.appendChild(cellElement);
        cells.push(cellElement);
    });
});

// Render the word list
const wordList = document.getElementById('word-list');
words.forEach(word => {
    const wordElement = document.createElement('div');
    wordElement.textContent = word;
    wordList.appendChild(wordElement);
});

// Detección de palabras encontradas mediante clic y arrastre
let isDragging = false;
let selectedCells = [];

cells.forEach(cell => {
    cell.addEventListener('mousedown', () => {
        isDragging = true;
        selectedCells = [];
        cell.classList.add('selected');
        selectedCells.push(cell);
    });

    cell.addEventListener('mouseenter', () => {
        if (isDragging) {
            cell.classList.add('selected');
            selectedCells.push(cell);
        }
    });

    cell.addEventListener('mouseup', () => {
        isDragging = false;
        checkForWords();
    });
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

function checkForWords() {
    const selectedWord = selectedCells.map(c => c.textContent).join('');
    const reversedWord = selectedWord.split('').reverse().join('');
    const wordFound = words.find(word => word === selectedWord || word === reversedWord);

    if (wordFound) {
        selectedCells.forEach(c => c.classList.add('found'));
        const wordElement = Array.from(wordList.children).find(el => el.textContent === wordFound);
        if (wordElement) {
            wordElement.classList.add('found');
        }
    } else {
        selectedCells.forEach(c => c.classList.remove('selected'));
    }
    selectedCells = [];
}
