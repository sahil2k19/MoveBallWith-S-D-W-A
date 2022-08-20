
var ball = document.querySelector('#ball');


//using getBoundingClientRect();

var ballAt = ball.getBoundingClientRect();
// var ballLeft = ballAt.left;
var ballHeight = ballAt.height;
var ballWidth = ballAt.width;
// var ballTop = ballAt.top;


// using offset ; offset changing in real time
var ballLeft = ball.offSetLeft;
var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;
var ballTop = ball.offsetTop;




function keycode(keypress) {
    //offset help in change in realTime 
    // here we keep updating ballTop and left

    ballTop = ball.offsetTop;
    ballLeft = ball.offsetLeft;

    //remember we only work on TOP and LEFT which means in top if we subtract we go upward and if we add then we go downward same with LEFT ;

    //w key is pressed
    if (keypress === 119 || keypress === 87) {
        if (ballTop > 55) { //here 55 , so the ball cant go -ve pixels and colide with top

            ball.style.top = (ballTop - 55) + 'px'; // here 55 shows the pixels to move upward
            // another way-> updating ballTop so balltop update makes changes
            // ballTop = ballTop-55; 
            console.log(ballTop);
        }
    }


    //A key is pressed
    else if (keypress === 97 || keypress === 65) {
        if (ballLeft > 55) { //here 55 , so the ball cant go -ve pixels and colide with left

            ball.style.left = (ballLeft - 55) + 'px'; // here 55 shows the pixels to move left

            console.log(ballLeft);
        }
    }


    // D key is pressed;
    else if (keypress === 100 || keypress === 68) {

        // let us assume (ballLeft < 1000 - 200 - 55) so it can't go behind 745 ok........

        if (ballLeft < window.innerWidth - ballWidth - 55) { //here 55 , so the ball cant go -ve pixels and colide with top

            ball.style.left = (ballLeft + 55) + 'px'; // here 55 shows the pixels to move 
            console.log(ballLeft);
        }
    }


    // S key is pressed
    else if (keypress === 115 || keypress === 83) {
        if (ballTop < window.innerHeight - ballHeight - 55) {
            ball.style.top = (ballTop + 55) + 'px';
            console.log(window.innerHeight);
        }
    }

}


// adding keypress event in window (now we have to detect the keys);
window.addEventListener('keypress', (event) => {
    keycode(event.keyCode);
})
