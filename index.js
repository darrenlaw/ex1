//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {

    console.log("ready");

    $(window).ready(function () {
        
        $('#interactive').click(function () {
                                alert("Hello! My game is a click-based exploration game. PLEASE READ THE INSTRUCTIONS from the main menu first since the game is not very complete yet. Here are your tasks! 1. Figure out how to move to different areas/scene of the game. 2. Discover the definition of a word. 3.Make it to the studio. These will also be on a word document that is already opened. Please remember to fill out the questionnaire that is also opened. Thank you!");
        
        });
    });
});