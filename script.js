// Function to create the grid
function createGrid(size) {
    const container = document.getElementById('container');
    container.style.setProperty('--grid-size', size);

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);
    }
}

// Function to change color on hover
function changeColor(event) {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Random color
    const darkenFactor = 0.9; // Factor to darken color
    let currentOpacity = parseFloat(getComputedStyle(event.target).getPropertyValue('opacity'));
    currentOpacity = isNaN(currentOpacity) ? 0 : currentOpacity; // Initial opacity

    event.target.style.backgroundColor = randomColor;
    event.target.style.opacity = Math.min(currentOpacity + darkenFactor, 1); // Increment opacity (maximum 1)
}

// Function to reset grid
function resetGrid() {
    const newSize = prompt("Enter number of squares per side (max 100):");
    const size = parseInt(newSize);
    if (!isNaN(size) && size > 0 && size <= 100) {
        const container = document.getElementById('container');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createGrid(size);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}

// Event listener for reset button
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGrid);

// Initial grid creation
createGrid(16);