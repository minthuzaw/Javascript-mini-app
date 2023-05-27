// Voting System
const optionsElement = document.getElementById('options');

const options = [
    { name: 'Mr. Mg Mg', votes: 0 },
    { name: 'Ms. Hnin', votes: 0 },
    { name: 'Dr. Zaw Zaw', votes: 0 }
];

// Render Options
function renderOptions() {
    optionsElement.innerHTML = '';
    options.forEach((option, index) => {
        const optionItem = document.createElement('li');
        optionItem.classList.add('option');
        optionItem.innerHTML = `
            <span>${option.name}</span>
            <button onclick="vote(${index})">Vote</button>
            <span class="votes">${option.votes}</span>
        `;
        optionsElement.appendChild(optionItem);
    });
}

// Vote for Option
function vote(index) {
    options[index].votes++;
    renderOptions();
}

// Initialize Voting System
renderOptions();
