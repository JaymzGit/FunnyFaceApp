document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class name "grid_12"
    var accessoriesDivs = document.querySelectorAll('.grid_12.submenu');
    var dropArea = document.getElementById('dropArea');
    var imageFace = document.getElementById('imageFace');
    var progressBarContainer = document.getElementById('progressBarContainer');
    var progressBar = document.getElementById('progressBar');

    // Remove the "picture" class
    imageFace.classList.remove('picture');

    // Remove the background image style
    imageFace.style.backgroundImage = 'none';

    // Loop through each div and set the display style
    accessoriesDivs.forEach(function(div) {
        div.style.display = 'none';
    });

    document.getElementById('menu_1').addEventListener('click', function () {
        if (accessoriesDivs[0].style.display === 'none' || accessoriesDivs[2].style.display === '') {
            accessoriesDivs[0].style.display = 'block';
            accessoriesDivs[1].style.display = 'none';
            accessoriesDivs[2].style.display = 'none';
        } else {
            accessoriesDivs[0].style.display = 'none';
        }
    });
    document.getElementById('menu_2').addEventListener('click', function () {
        if (accessoriesDivs[1].style.display === 'none' || accessoriesDivs[2].style.display === '') {
            accessoriesDivs[0].style.display = 'none';
            accessoriesDivs[1].style.display = 'block';
            accessoriesDivs[2].style.display = 'none';
        } else {
            accessoriesDivs[1].style.display = 'none';
        }
    });
    document.getElementById('menu_3').addEventListener('click', function () {
        // Toggle the display property of the third grid_12 div
        if (accessoriesDivs[2].style.display === 'none' || accessoriesDivs[2].style.display === '') {
            accessoriesDivs[0].style.display = 'none';
            accessoriesDivs[1].style.display = 'none';
            accessoriesDivs[2].style.display = 'block';
        } else {
            accessoriesDivs[2].style.display = 'none';
        }
    });

    // Loop through each div and set the display style
    accessoriesDivs.forEach(function(div) {
        div.style.display = 'none';
    });

    // Function to handle dragover event
    dropArea.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    // Function to handle dragenter event
    dropArea.addEventListener('dragenter', function(e) {
        e.preventDefault();
        dropArea.style.backgroundColor = 'lightblue';
    });

    // Function to handle dragleave event
    dropArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        dropArea.style.backgroundColor = 'white';
    });

    // Function to handle drop event
    dropArea.addEventListener('drop', function(e) {
        e.preventDefault();
        dropArea.style.backgroundColor = 'white';

        // Get the dropped files
        var files = e.dataTransfer.files;

        // Check if there are dropped files
        if (files.length > 0) {
            var file = files[0]; // Get the first dropped file

            // Check if the dropped file is a JPG image
            if (file.type === 'image/jpeg') {
                // Check if the file size is less than 300KB (300 * 1024 bytes)
                if (file.size <= 300 * 1024) {
                    // Read the dropped file as a data URL
                    var reader = new FileReader();
                    reader.onload = function(event) {
                        // Create an image element
                        var image = new Image();
                        image.src = event.target.result;

                        // Update the imageFace element with the dropped image
                        imageFace.innerHTML = ''; // Clear any existing content
                        imageFace.appendChild(image);

                        // Show the progress bar
                        progressBarContainer.style.display = 'block';

                        // Hide the progress bar after a delay (for demonstration)
                        setTimeout(function() {
                            progressBarContainer.style.display = 'none';
                        }, 2000);
                    };
                    reader.readAsDataURL(file); // Read the dropped file as a data URL
                } else {
                    alert('The dropped image exceeds the maximum size of 300KB.');
                }
            } else {
                alert('Please drop a JPG image.');
            }
        }
    });

    // Function to rotate the image to the left
    document.getElementById('left').addEventListener('click', function () {
        // Get the image element
        var image = document.querySelector('#imageFace img');

        // Get the current rotation angle
        var currentRotation = parseInt(image.getAttribute('data-rotation') || 0);

        // Increment the rotation angle (rotate left by 90 degrees)
        var newRotation = currentRotation - 90;

        // Apply the new rotation angle
        image.style.transform = 'rotate(' + newRotation + 'deg)';
        image.setAttribute('data-rotation', newRotation);
    });

    // Function to rotate the image to the right
    document.getElementById('right').addEventListener('click', function () {
        // Get the image element
        var image = document.querySelector('#imageFace img');

        // Get the current rotation angle
        var currentRotation = parseInt(image.getAttribute('data-rotation') || 0);

        // Increment the rotation angle (rotate right by 90 degrees)
        var newRotation = currentRotation + 90;

        // Apply the new rotation angle
        image.style.transform = 'rotate(' + newRotation + 'deg)';
        image.setAttribute('data-rotation', newRotation);
    });

    // Function to increase the size of the image
    document.getElementById('plus').addEventListener('click', function () {
        // Get the image element
        var image = document.querySelector('#imageFace img');

        // Get the current size
        var currentSize = parseInt(image.getAttribute('data-size') || 100);

        // Increase the size by 10%
        var newSize = currentSize * 1.1;

        // Apply the new size
        image.style.width = newSize + '%';
        image.setAttribute('data-size', newSize);
    });

    // Function to decrease the size of the image
    document.getElementById('minus').addEventListener('click', function () {
        // Get the image element
        var image = document.querySelector('#imageFace img');

        // Get the current size
        var currentSize = parseInt(image.getAttribute('data-size') || 100);

        // Decrease the size by 10%
        var newSize = currentSize * 0.9;

        // Apply the new size
        image.style.width = newSize + '%';
        image.setAttribute('data-size', newSize);
    });

    //TODO: missing drop accessories and save image, also resizing resets the image to full size first 
});