const processingManager = {
    progressInterval: null,

    startProcessing: function () {
        const selectedStyle = styleManager.getSelectedStyle();

        if (!selectedStyle) {
            alert('Please select a coloring style first!');
            return;
        }

        utils.showElement('processingContainer');

        let progress = 0;
        const progressBar = document.getElementById('progressBar');
        const statusText = document.getElementById('processingStatus');

        this.progressInterval = setInterval(() => {
            progress += 5;
            progressBar.style.width = progress + '%';

            // Update status text
            if (progress < 30) {
                statusText.textContent = 'Analyzing image structure...';
            } else if (progress < 60) {
                statusText.textContent = 'Applying ' + utils.getStyleName(selectedStyle) + ' style colorization...';
            } else if (progress < 90) {
                statusText.textContent = 'Adjusting details and contrast...';
            } else {
                statusText.textContent = 'Processing complete, preparing results...';
            }

            if (progress >= 100) {
                clearInterval(this.progressInterval);

                setTimeout(() => {
                    resultManager.showResult();
                }, 700);
            }
        }, 800);
    }
};
