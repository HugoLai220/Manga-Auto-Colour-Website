const uploadManager = {
    simulateFileUpload: function () {
        alert('In a real application, you can upload an image from your own device.');

        // Set a default original image
        setTimeout(() => {
            document.getElementById('originalImage').src = 'image/B&W input.png';
        }, 500);
    }
};
