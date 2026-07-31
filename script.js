document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');

                if (filterValue === 'all' || categories.includes(filterValue)) {
                    // Show card
                    if (card.classList.contains('hidden')) {
                        card.classList.remove('hidden');
                        // Small timeout to allow display:block to apply before animating opacity
                        setTimeout(() => {
                            card.classList.remove('hiding');
                        }, 10);
                    } else {
                        card.classList.remove('hiding');
                    }
                } else {
                    // Hide card
                    card.classList.add('hiding');
                    // Wait for transition to finish before display: none
                    // CSS transition is 300ms
                    setTimeout(() => {
                        // Double check if it still should be hidden (in case of rapid clicks)
                        if (card.classList.contains('hiding')) {
                            card.classList.add('hidden');
                        }
                    }, 300);
                }
            });
        });
    });
});
