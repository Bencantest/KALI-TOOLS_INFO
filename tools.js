const moreLinks = document.querySelectorAll('.more-link');

moreLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const description = this.parentElement.querySelector('.detailed-description');
        if (description.style.display === 'none' || description.style.display === '') {
            description.style.display = 'block';
            this.innerText = 'Less';
        } else {
            description.style.display = 'none';
            this.innerText = 'More';
        }
    });
});

// Get references to the search input and the tool elements
const searchInput = document.getElementById('search-input');
const toolElements = document.querySelectorAll('.tool');

// Add an event listener for the search button
document.getElementById('search-button').addEventListener('click', function () {
    searchTools();
});

// Add an event listener for the Enter key in the search input
searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        searchTools();
    }
});

// Function to perform the search
function searchTools() {
    const searchTerm = searchInput.value.toLowerCase();

    toolElements.forEach(tool => {
        const toolName = tool.querySelector('h3').textContent.toLowerCase();
        if (toolName.includes(searchTerm)) {
            tool.style.display = 'block'; // Show matching tools
        } else {
            tool.style.display = 'none'; // Hide non-matching tools
        }
    });
}

