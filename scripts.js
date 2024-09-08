document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation items
    const navItems = document.querySelectorAll('.timeline-nav-item');
    
    // Select all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Default active timeline item
    let activeIndex = 0;
    timelineItems[activeIndex].classList.add('active');
    navItems[activeIndex].classList.add('active');
    
    // Function to update the active item and apply animations
    const updateActiveItem = (index) => {
        // Remove active class from all timeline items and nav items
        timelineItems.forEach((item, idx) => {
            if (idx !== index) {
                item.classList.remove('active');
                item.style.animation = '';
            }
        });
        navItems.forEach(navItem => navItem.classList.remove('active'));

        // Add active class to the selected timeline item and nav item
        timelineItems[index].classList.add('active');
        navItems[index].classList.add('active');

        // Apply animations for the selected timeline item
        applyAnimations(index);
    
        // Update the progress bar width
        updateProgressBar(index);
    };
    
    // Function to apply animations to the active item
    const applyAnimations = (index) => {
        const activeItem = timelineItems[index];
        const animations = ['fadeIn', 'crossfade', 'dissolve', 'cutOnAction' ,'slow in'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        activeItem.style.animation = `${randomAnimation} 1s ease forwards`;
    };

    // Function to update the progress bar
    const updateProgressBar = (index) => {
        const progress = document.querySelector('.timeline-progress');
        const totalNavItems = navItems.length;
        const progressPercentage = (index / (totalNavItems - 1)) * 100;
        progress.style.background = `linear-gradient(to right, #007bff ${progressPercentage}%, #d3d3d3 ${progressPercentage}%)`;
    };
    
    // Add event listeners to each navigation item
    navItems.forEach((navItem, index) => {
        navItem.addEventListener('click', () => {
            updateActiveItem(index);
        });
    });
    
    // Initial call to set the progress bar for the default active item
    updateProgressBar(activeIndex);
});
