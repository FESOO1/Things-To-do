const inputButton = document.querySelector('.input-button');
const inputContainer = document.querySelector('.input-container');
const inputInnerContainer = document.querySelector('.input');
const inputItself = document.querySelector('.input-itself');
const outputContainer = document.querySelector('.output');
const themeButton = document.querySelector('.theme-button');
const clearButton = document.querySelector('.clear-button');
const body = document.querySelector('body');
const todosArray = [];
const checkedArray = [];
let isDark = false;

// 

inputInnerContainer.addEventListener('click', () => {
    inputItself.focus();
});

// CLEAR BUTTON

clearButton.addEventListener('click', () => {
    location.reload();
    localStorage.clear();
});

// THEME CHANGER

themeButton.addEventListener('click', () => {
    if (isDark === false) {
        themeButton.classList.add('theme-button-clicked');
        body.classList.add('body-light-mode');

        isDark = true;
        localStorage.setItem('theme', isDark);
    } else {
        themeButton.classList.remove('theme-button-clicked');
        body.classList.remove('body-light-mode');

        isDark = false;
        localStorage.setItem('theme', isDark);
    };
});

// INITIALIZING THE INPUT BUTTON

inputButton.addEventListener('click', e => {
    // PREVENTING THE FORM FROM BEING SUBMITTED AUTOMATICALLY
    e.preventDefault();

    if (inputItself.value.length > 0) {
        // CREATING ELEMENTS
        outputContainer.innerHTML += `
            <div class="output-itself">
                <div class="output-itself-buttons-container">
                    <button type="button" class="output-itself-check-button">
                        <svg class="output-itself-check-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg class="output-itself-check-button-svg-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M3 13.3333C3 13.3333 4.5 14 6.5 17C6.5 17 6.78485 16.5192 7.32133 15.7526M17 6C14.7085 7.14577 12.3119 9.55181 10.3879 11.8223" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 13.3333C8 13.3333 9.5 14 11.5 17C11.5 17 17 8.5 22 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <hr class="output-itself-buttons-container-divider">
                    <button class="output-itself-delete-button">
                        <svg class="output-itself-delete-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M9 11.7349H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M10.5 15.6543H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M3 5.5H21M16.0555 5.5L15.3729 4.09173C14.9194 3.15626 14.6926 2.68852 14.3015 2.39681C14.2148 2.3321 14.1229 2.27454 14.0268 2.2247C13.5937 2 13.0739 2 12.0343 2C10.9686 2 10.4358 2 9.99549 2.23412C9.89791 2.28601 9.80479 2.3459 9.7171 2.41317C9.32145 2.7167 9.10044 3.20155 8.65842 4.17126L8.05273 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>
                <hr class="output-itself-divider">
                <p class="output-itself-paragraph">${inputItself.value}</p>
            </div>
        `;

        // STORING THE INPUT'S VALUE IN THE ARRAY
        todosArray.push(inputItself.value);

        // STORING THE ARRAY THAT CONTAINS ALL THE VALUES IN THE LOCAL STORAGE
        localStorage.setItem('todo', JSON.stringify(todosArray));

        // RESETING THE INPUT
        inputItself.value = '';

        // BUTTONS
        const outputItself = document.querySelectorAll('.output-itself');
        const outputCheckButtons = document.querySelectorAll('.output-itself-check-button');
        const outputDeleteButtons = document.querySelectorAll('.output-itself-delete-button');

        // CHECK BUTTON
        for (let i = 0; i < outputItself.length; i++) {
            let isChecked = false;

            outputCheckButtons[i].addEventListener('click', () => {
                if (isChecked === false) {
                    outputItself[i].classList.add('output-itself-checked');

                    isChecked = true;
                    localStorage.setItem('checked', isChecked);
                } else {
                    outputItself[i].classList.remove('output-itself-checked');

                    isChecked = false;
                    localStorage.setItem('checked', isChecked);
                };
            });

            outputDeleteButtons[i].addEventListener('click', () => {
                outputContainer.removeChild(outputItself[i]);
            });
        };
    } else {
        inputContainer.classList.add('input-container-unsuccessful');
        setTimeout(() => {
            inputContainer.classList.remove('input-container-unsuccessful');
        }, 301);
    };
});


// USING THE LOCAL STORAGE

function getDataFromLocalStorage(){
    const todoItself = JSON.parse(localStorage.getItem('todo'));

    if (todoItself) {
        for (let i = 0; i < todoItself.length; i++) {
            // CREATING ELEMENTS
            outputContainer.innerHTML += `
                <div class="output-itself">
                    <div class="output-itself-buttons-container">
                        <button type="button" class="output-itself-check-button">
                            <svg class="output-itself-check-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg class="output-itself-check-button-svg-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M3 13.3333C3 13.3333 4.5 14 6.5 17C6.5 17 6.78485 16.5192 7.32133 15.7526M17 6C14.7085 7.14577 12.3119 9.55181 10.3879 11.8223" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8 13.3333C8 13.3333 9.5 14 11.5 17C11.5 17 17 8.5 22 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <hr class="output-itself-buttons-container-divider">
                        <button class="output-itself-delete-button">
                            <svg class="output-itself-delete-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M9 11.7349H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M10.5 15.6543H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M3 5.5H21M16.0555 5.5L15.3729 4.09173C14.9194 3.15626 14.6926 2.68852 14.3015 2.39681C14.2148 2.3321 14.1229 2.27454 14.0268 2.2247C13.5937 2 13.0739 2 12.0343 2C10.9686 2 10.4358 2 9.99549 2.23412C9.89791 2.28601 9.80479 2.3459 9.7171 2.41317C9.32145 2.7167 9.10044 3.20155 8.65842 4.17126L8.05273 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                    <hr class="output-itself-divider">
                    <p class="output-itself-paragraph">${todoItself[i]}</p>
                </div>
            `;

            // STORING THE INPUT'S VALUE IN THE ARRAY
            todosArray.push(todoItself[i]);

            // STORING THE ARRAY THAT CONTAINS ALL THE VALUES IN THE LOCAL STORAGE
            localStorage.setItem('todo', JSON.stringify(todosArray));

            // BUTTONS
            const outputItself = document.querySelectorAll('.output-itself');
            const outputCheckButtons = document.querySelectorAll('.output-itself-check-button');
            const outputDeleteButtons = document.querySelectorAll('.output-itself-delete-button');

            // CHECK BUTTON

            for (let i = 0; i < outputItself.length; i++) {
                const checked = localStorage.getItem('checked');

                if (checked === 'true') {
                    outputItself[i].classList.add('output-itself-checked');
                } else {
                    outputItself[i].classList.remove('output-itself-checked');
                };

                // DELETING A TASK
                outputDeleteButtons[i].addEventListener('click', () => {
                    outputContainer.removeChild(outputItself[i]);
                });
            };
        };
    };
};

getDataFromLocalStorage();


// THEME LOCAL STORAGE

function getThemeFromLocalStorage() {
    const themeState = localStorage.getItem('theme');

    if (themeState === 'true') {
        themeButton.classList.add('theme-button-clicked');
        body.classList.add('body-light-mode');

        isDark = true;
    } else {
        themeButton.classList.remove('theme-button-clicked');
        body.classList.remove('body-light-mode');

        isDark = false;
    };
};

getThemeFromLocalStorage();