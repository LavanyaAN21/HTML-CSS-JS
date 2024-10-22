document.getElementById('generate').addEventListener('click', () => { 
const size = parseInt(document.getElementById('size').value);
if (isNaN(size) || size < 1) {
  document.getElementById('pattern').textContent= 'Invalid size';
  return;
}
  let pattern='';
  for (let i = 0; i < size; i++) {
  pattern += '*'.repeat(i + 1) + '<br>';
}
  document.getElementById('pattern').innerHTML=pattern;  
}
  )
