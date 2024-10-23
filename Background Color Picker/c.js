const colorInput = document.getElementById('colorInput');
const colorDisplay = document.getElementById('colorDisplay');

colorInput.addEventListener('input', () => {
    const selectedColor = colorInput.value;
    colorDisplay.textContent = selectedColor.toUpperCase();
    document.body.style.backgroundColor = selectedColor;
});
