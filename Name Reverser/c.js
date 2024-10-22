document.getElementById('reverseButton').onclick = () => {
    const name = document.getElementById('nameInput').value;
    document.getElementById('reversedOutput').textContent = name.split('').reverse().join('');
};
