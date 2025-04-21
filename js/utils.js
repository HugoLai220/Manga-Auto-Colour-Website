const utils = {
    
    getStyleName: function (style) {
        switch (style) {
            case 'hunter': return 'Hunter X Hunter';
            case 'naruto': return 'Naruto';
            case 'shadow': return 'Shadows House';
            default: return '';
        }
    },

    
    showElement: function (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = 'block';
        }
    },


    hideElement: function (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = 'none';
        }
    }
};
