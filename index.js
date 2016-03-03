//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {

    console.log("ready");

    $(window).ready(function () {
        
        $('#interactive').click(function () {
                                alert("Hello! My game is a click-based exploration game. It's not very complete yet, but here are your tasks! 1. Figure out how to move to different areas/scene of the game. 2. Learn one thing about art from the game. 3.Make it to the end of the game. GOOD LUCK!");
        
        });
    });
});