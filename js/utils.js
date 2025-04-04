/**
 * Utility functions for the manga colorization application
 */
const utils = {
    /**
     * Get the display name for a style
     * @param {string} style - The style identifier
     * @returns {string} The display name of the style
     */
    getStyleName: function (style) {
        switch (style) {
            case 'hunter': return 'Hunter X Hunter';
            case 'naruto': return 'Naruto';
            case 'shadow': return 'Shadows House';
            default: return '';
        }
    },

    /**
     * Display an element by its ID
     * @param {string} elementId - The ID of the element to show
     */
    showElement: function (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = 'block';
        }
    },

    /**
     * Hide an element by its ID
     * @param {string} elementId - The ID of the element to hide
     */
    hideElement: function (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = 'none';
        }
    }
};