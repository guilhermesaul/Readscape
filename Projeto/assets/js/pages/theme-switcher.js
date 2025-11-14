// Theme Switcher JavaScript

// Function to set the theme
function setTheme(themeName) {
    // Save theme preference to localStorage
    localStorage.setItem('readscape-theme', themeName);
    
    // Apply theme to body
    if (themeName === 'blue') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', themeName);
    }
    
    // Update selected button visual state if on temas page
    updateThemeButtons(themeName);
}

// Function to get the current theme
function getTheme() {
    return localStorage.getItem('readscape-theme') || 'blue';
}

// Function to update theme button visual states
function updateThemeButtons(currentTheme) {
    const buttons = document.querySelectorAll('.card-tema input[type="button"]');
    buttons.forEach(button => {
        const card = button.closest('.card-tema');
        const cardId = card.parentElement.id;
        
        if (
            (cardId === 'card-01' && currentTheme === 'blue') ||
            (cardId === 'card-02' && currentTheme === 'dark') ||
            (cardId === 'card-03' && currentTheme === 'red')
        ) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = getTheme();
    setTheme(savedTheme);
    
    // Add click event listeners to theme buttons if on temas page
    const themeButtons = document.querySelectorAll('.card-tema input[type="button"]');
    if (themeButtons.length > 0) {
        themeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const card = this.closest('.card-tema');
                const cardId = card.parentElement.id;
                
                let theme = 'blue';
                if (cardId === 'card-01') {
                    theme = 'blue';
                } else if (cardId === 'card-02') {
                    theme = 'dark';
                } else if (cardId === 'card-03') {
                    theme = 'red';
                }
                
                setTheme(theme);
            });
        });
    }
});
