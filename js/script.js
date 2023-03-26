// Grab Elements (Helper Function)
const selectElement = (selector) => {
    const element = document.querySelector(selector);

    if (element) {
        return element;
    }

    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);     // The error Will be displayed in the console
};

const left = selectElement(".left");
const right = selectElement(".right");
const container = document.querySelector('.mainContainer');

left.addEventListener('mouseenter', () => container.classList.add('hoverLeft'));
left.addEventListener('mouseleave', () => container.classList.remove('hoverLeft'));

right.addEventListener('mouseenter', () => container.classList.add('hoverRight'));
right.addEventListener('mouseleave', () => container.classList.remove('hoverRight'));
