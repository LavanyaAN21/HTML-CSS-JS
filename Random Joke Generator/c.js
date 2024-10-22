const jokes = [
    'Why do not scientists trust atoms? Because they make up everything!',
    'How does a penguin build its house? Igloos it together!',
    'Why was the math book sad? Because it had too many problems.',
    'Why do not skeletons fight each other? They do not have the guts.',
    'What do you call fake spaghetti? An impasta!'
];

document.getElementById('get-joke').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById('joke').textContent = jokes[randomIndex];
});
