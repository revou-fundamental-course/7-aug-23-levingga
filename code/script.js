const calculateBtn = document.getElementById('calculateBtn');
const triangleForm = document.getElementById('triangleForm');
const areaResult = document.getElementById('areaResult');
const perimeterResult = document.getElementById('perimeterResult');
const resultsDiv = document.getElementById('results');


calculateBtn.addEventListener('click', () => {
  const base = parseFloat(document.getElementById('base').value);
  const height = parseFloat(document.getElementById('height').value);

  
  if (!isNaN(base) && !isNaN(height)) {
    const area = (base * height) / 2;


    
    areaResult.textContent = area.toFixed(2);
    resultsDiv.classList.remove('hidden');
  } else {
    alert('Please enter valid numbers for base and height.');
  }
});


