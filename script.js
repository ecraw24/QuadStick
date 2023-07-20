// Assume you have a select element with id "controller-select"
var select = document.getElementById('controller-select');
var controller_types = ["PS3", "PS4", "PS5", "Xbox 360", "Xbox One", "Xbox Series X", "Nintendo Switch"]

// Iterate over the array
for (var i = 0; i < controller_types.length; i++) {
    // Create a new option element
    var option = document.createElement('option');
    option.text = controller_types[i];
    option.value = controller_types[i];

    // Add the option to the select element
    select.add(option);
}


var tabs = document.getElementsByClassName('tab');
for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        // Hide all tab content
        for (var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active'); 
        }
        var tabContents = document.getElementsByClassName('tab-content');
        for (var j = 0; j < tabContents.length; j++) {
            tabContents[j].classList.remove('active');
        }

        // Show the clicked tab's content
        var target = this.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
        this.classList.add('active'); 
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


var tabs = document.getElementsByClassName('tab');
for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        // Hide all tab content
        var tabContents = document.getElementsByClassName('tab-content');
        for (var j = 0; j < tabContents.length; j++) {
            tabContents[j].classList.remove('active');
        }

        // Make all tabs inactive
        for (var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active');
        }

        // Show the clicked tab's content and make the clicked tab active
        var target = this.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
        this.classList.add('active');  // Make the clicked tab active
    });
}

const left_containers = document.getElementsByClassName("dd-section-left");
const right_containers = document.getElementsByClassName("dd-section-right");

// Create a list to hold the select elements
var quadstick_buttons_left = {
    "MP Left Sip": "mp_left_sip",
    "MP Left Puff": "mp_left_puff",
    "MP Center Sip": "mp_center_sip",
    "MP Center Puff": "mp_center_puff",
    "MP Left Center Sip": "mp_left_center_sip",
    "MP Left Center Puff": "mp_left_center_puff",
    "MP Left Right Sip": "mp_left_right_sip",
    "MP Left Right Puff": "mp_left_right_puff",
    "MP Left Right Sip (Soft)": "mp_left_right_sip_soft",
    "MP Left Right Puff (Soft)": "mp_left_right_puff_soft",
    "MP Left Sip (Soft)": "mp_left_sip_soft",
    "MP Left Puff (Soft)": "mp_left_puff_soft",
    "MP Center Sip (Soft)": "mp_center_sip_soft",
    "MP Center Puff (Soft)": "mp_center_puff_soft",
    "MP Left Center Sip (Soft)": "mp_left_center_sip_soft",
    "MP Left Center Puff (Soft)": "mp_left_center_puff_soft",
    "Lip Movement": "lip",
    "Lip Movement (Soft)": "lip_soft",
};

var quadstick_buttons_right = {

    "MP Right Sip": "mp_right_sip",
    "MP Right Puff": "mp_right_puff",
    "MP Right Center Sip": "mp_right_center_sip",
    "MP Right Center Puff": "mp_right_center_puff",
    "MP Triple Sip": "mp_triple_sip",
    "MP Triple Puff": "mp_triple_puff",
    "MP Right Sip (Soft)": "mp_right_sip_soft",
    "MP Right Puff (Soft)": "mp_right_puff_soft",
    "MP Right Center Sip (Soft)": "mp_right_center_sip_soft",
    "MP Right Center Puff (Soft)": "mp_right_center_puff_soft",
    "MP Triple Sip (Soft)": "mp_triple_sip_soft",
    "MP Triple Puff (Soft)": "mp_triple_puff_soft",
    "Right Sip": "right_sip",
    "Right Puff": "right_puff",
    "Right Sip (Soft)": "right_sip_soft",
    "Right Puff (Soft)": "right_puff_soft",
    "Right Sip (Long)": "right_sip_long",
    "Right Puff (Long)": "right_puff_long"
};

var ps_controller_buttons = {
    "PS D-Pad Button North": "dpad_N",
    "PS D-Pad Buttons North and East": "dpad_NE",
    "PS D-Pad Button East": "dpad_E",
    "PS D-Pad Buttons South and East": "dpad_SE",
    "PS D-Pad Button South": "dpad_S",
    "PS D-Pad Buttons South and West": "dpad_SW",
    "PS D-Pad Button West": "dpad_W",
    "PS D-Pad Buttons North and West": "dpad_NW",
    "PS Left Joystick Left side": "left_joy_left",
    "PS Left Joystick Right side": "left_joy_right",
    "PS Left Joystick Up": "left_joy_up",
    "PS Left Joystick Down": "left_joy_down",
    "PS Right Joystick Left side": "right_joy_left",
    "PS Right Joystick Right side": "right_joy_right",
    "PS Right Joystick Up": "right_joy_up",
    "PS Right Joystick Down": "right_joy_down",
    "PS Left Button 1": "left_1",
    "PS Left Button 2 (trigger)": "left_2",
    "PS Left Button 3 (Press joystick)": "left_3",
    "PS Right Button 1": "right_1",
    "PS Right Button 2 (trigger)": "right_2",
    "PS Right Button 3 (Press joystick)": "right_3",
    "PS Button X": "x",
    "PS Button Square": "square",
    "PS Button Triangle": "triangle",
    "PS Button Circle": "circle",
    "PS Home": "ps3",
    "PS Select or Share": "select",
    "PS Start": "start",
};

const leftselectList = document.createElement("ul");
for (var j = 0; j < left_containers.length; j++) {
    for (const key in quadstick_buttons_left) {
        if (quadstick_buttons_left.hasOwnProperty(key)) {
            var label = document.createElement("label");
            label.for = key;
            label.textContent = key;

            var select = document.createElement("select");
            select.id = key;
            select.name = key;

            // Iterate over the dictionary again to create options
            for (const optionKey in ps_controller_buttons) {
                if (ps_controller_buttons.hasOwnProperty(optionKey)) {
                    var option = document.createElement("option");
                    option.value = ps_controller_buttons[optionKey];
                    option.text = optionKey;

                    // Append the option to the select
                    select.appendChild(option);
                }
            }

            var listItem = document.createElement("li");
            listItem.appendChild(label);
            
            // Add a line break between the label and the select
            listItem.appendChild(document.createElement("br"));
            
            listItem.appendChild(select);
            leftselectList.appendChild(listItem);
        }
    }
    left_containers[j].appendChild(leftselectList);
}

const rightSelectList = document.createElement("ul");
for (var j = 0; j < right_containers.length; j++) {
    for (const key in quadstick_buttons_right) {
        if (quadstick_buttons_right.hasOwnProperty(key)) {
            var label = document.createElement("label");
            label.for = key;
            label.textContent = key;

            var select = document.createElement("select");
            select.id = key;
            select.name = key;

            // Iterate over the dictionary again to create options
            for (const optionKey in ps_controller_buttons) {
                if (ps_controller_buttons.hasOwnProperty(optionKey)) {
                    var option = document.createElement("option");
                    option.value = ps_controller_buttons[optionKey];
                    option.text = optionKey;

                    // Append the option to the select
                    select.appendChild(option);
                }
            }

            var listItem = document.createElement("li");
            listItem.appendChild(label);
            
            // Add a line break between the label and the select
            listItem.appendChild(document.createElement("br"));
            
            listItem.appendChild(select);
            rightSelectList.appendChild(listItem);
        }
    }
    right_containers[j].appendChild(rightSelectList);
}
