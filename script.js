


document.getElementById('controller-select').addEventListener('change', function() {
    var selectedController = this.value;

    // Update the controller image based on the selected controller
    document.getElementById('controller-image').src = selectedController + '.png';

    // Here you could also update the image map and the dropdowns based on the selected controller
});

// Assume you have a select element with id "controller-select"
var select = document.getElementById('controller-select');

// Iterate over the array
for (var i = 0; i < controllers.length; i++) {
    // Create a new option element
    var option = document.createElement('option');
    option.text = controllers[i];
    option.value = controllers[i];

    // Add the option to the select element
    select.add(option);
}

document.getElementById('controller-image').addEventListener('click', function(event) {
    // This function will be called when the controller image is clicked
    // You could use the event object to determine where on the image was clicked
    // And then update the dropdowns based on the clicked area
});

var tabs = document.getElementsByClassName('tab');
for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        // Hide all tab content
        var tabContents = document.getElementsByClassName('tab-content');
        for (var j = 0; j < tabContents.length; j++) {
            tabContents[j].classList.remove('active');
        }

        // Show the clicked tab's content
        var target = this.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
}

var shapeSelects = document.getElementsByClassName('shape-select');
for (var i = 0; i < shapeSelects.length; i++) {
    shapeSelects[i].addEventListener('change', function() {
        var selectedShape = this.value;

        // Disable the selected shape in all other dropdowns
        for (var j = 0; j < shapeSelects.length; j++) {
            if (shapeSelects[j] !== this) {
                var options = shapeSelects[j].options;
                for (var k = 0; k < options.length; k++) {
                    if (options[k].value === selectedShape) {
                        options[k].disabled = true;
                    } else {
                        options[k].disabled = false;
                    }
                }
            }
        }
    });
}

// Assume you have a select element with id "shape-select"
var select = document.getElementById('shape-select');

// Iterate over the dictionary
for (var key in controller_buttons) {
    // Create a new option element
    var option = document.createElement('option');
    option.text = key;
    option.value = dictionary[key];

    // Add the option to the select element
    select.add(option);
}