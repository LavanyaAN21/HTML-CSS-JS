const textInput=document.getElementById('textInput');
const wordCount=document.getElementById('wordCount');
const charCount=document.getElementById('charCount');
textInput.addEventListener('input', () => {
  const text = textInput.value;
  wordCount.textContent = text.split(/\s+/).filter(word => word).length;
  charCount.textContent = text.length;
});
