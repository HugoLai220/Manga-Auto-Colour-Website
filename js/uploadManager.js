const uploadManager = {

    simulateFileUpload: function () {
        // This is just a simulation, no actual file upload happens
        alert('In a real application, here will open file selector for you to upload an image.');

        setTimeout(() => {
            document.getElementById('originalImage').src = '';
        }, 500);
    }
};
