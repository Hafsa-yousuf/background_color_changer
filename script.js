'use strict';
const colorCode = document.getElementById('color-code');
const changeColorBtn = document.getElementById('change-color');
const CopyColorBtn = document.getElementById('copy-color');

let currentColor = ''; // start empty — means no color yet
CopyColorBtn.disabled = true; // disable button initially

//function to generate random hex color
const generateRandomColor = function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
};

//change background color and show code
changeColorBtn.addEventListener('click', () => {
  currentColor = generateRandomColor(); // update the variable
  document.body.style.backgroundColor = currentColor;
  colorCode.textContent = `Color: ${currentColor}`;
  CopyColorBtn.disabled = false; //enable copy button now
});

//copy color code to clipboard (only if background changed)
CopyColorBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(colorCode.textContent.replace('Color: ', ''));
  CopyColorBtn.classList.add('copied');
  CopyColorBtn.textContent = 'copied!';
  setTimeout(() => {
    CopyColorBtn.textContent = 'Copy color code';
    CopyColorBtn.classList.remove('copied');
  }, 2000);
});
