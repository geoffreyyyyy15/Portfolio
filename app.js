const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
})
const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el)); 

const showGrid = document.querySelector('#show');

const hidden = document.querySelector('.hiddenGrid');

showGrid.addEventListener('click', (e) => {
    e.preventDefault();

    hidden.classList.remove('hiddenGrid');
    showGrid.classList.add('hide');
    hidden.classList.add('show');
    
})
