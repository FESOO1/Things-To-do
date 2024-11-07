const inputButton = document.querySelector('.input-button');
const inputContainer = document.querySelector('.input');
const inputItself = document.querySelector('.input-itself');
const outputContainer = document.querySelector('.output');

// 

inputContainer.addEventListener('click', () => {
    inputItself.focus();
});

// INITIALIZING THE INPUT BUTTON

inputButton.addEventListener('click', e => {
    // PREVENTING THE FORM FROM BEING SUBMITTED AUTOMATICALLY
    e.preventDefault();

    
});