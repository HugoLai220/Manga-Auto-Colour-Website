/**
 * Manages the result display and download functionality
 */
const resultManager = {
    /**
     * Show the colorization result
     */
    showResult: function () {
        // Hide processing interface, show results interface
        utils.hideElement('processingContainer');
        utils.showElement('resultContainer');

        // Set the colorized image (different examples based on style)
        const selectedStyle = styleManager.getSelectedStyle();

        switch (selectedStyle) {
            case 'hunter':
                document.getElementById('coloredImage').src = 'image/style_Hunter_X_Hunter_Full_Color.png';
                break;
            case 'naruto':
                document.getElementById('coloredImage').src = 'image/style_Naruto_Full_Color.png';
                break;
            case 'shadow':
                document.getElementById('coloredImage').src = 'image/style_Shadows_House_-_Digital_Colored_Comics.png';
                break;
        }
    },

    /**
     * Download the colorization result
     * In a real application, this would trigger an actual download
     */
    downloadResult: function () {
        alert('In a real application, this would download the colorized image. This is a demonstration simulation.');
    }
};