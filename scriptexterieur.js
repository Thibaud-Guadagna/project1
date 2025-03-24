const buttons = document.querySelectorAll('.filtres button');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.id;

        const asides = document.querySelectorAll('aside');

        asides.forEach(aside => {
            if (category === 'all' || aside.classList.contains(category)) {
                aside.style.display = 'block';
            } else {
                aside.style.display = 'none';
            }
        });
    });
});