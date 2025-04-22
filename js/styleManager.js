const styleManager = {
    selectedStyle: '',

    /**
     * Select a style and update the UI
     * @param {HTMLElement} element - The style option element that was clicked
     * @param {string} style - The style identifier
     */
    selectStyle: function (element, style) {
        // Remove previous selection
        document.querySelectorAll('.style-option').forEach(option => {
            option.classList.remove('selected');
        });

        // Set new selection
        element.classList.add('selected');
        this.selectedStyle = style;
    },

    /**
     * Get the currently selected style
     * @returns {string} The selected style
     */
    getSelectedStyle: function () {
        return this.selectedStyle;
    }
};
