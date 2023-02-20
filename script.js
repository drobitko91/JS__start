// 1 task

/* const wrongName = 2; */

const firstName = 'Anastatisa';
const lastName = 'Drobitko';
const fullName = `${firstName} ${lastName}`;

// console.log(fullName);


// 2 task
function promptGuestNameAndAge() {
    const guestName = prompt('What is your name?');

    console.log(guestName);

    alert('Hi! ' + guestName);

    const CURRENT_YEAR = 2023;
    let guestYear = prompt('What is your year of birth?');
    let guestAge = CURRENT_YEAR - guestYear;

    while(!guestAge || !guestYear) {
        alert('Please, input corect year');
        guestYear = prompt('What is your year of birth?');
        guestAge = CURRENT_YEAR - guestYear;
    }

    alert('Your age is ' + guestAge);

}
promptGuestNameAndAge();


//  3 task

function promptSquarePerimeter() {
    const squareLength = prompt('What is the length side of your square?');
    const squarePerimeter = 4 * squareLength;

    alert(squarePerimeter);
}
// promptSquarePerimeter();



// Max tasks
// 1 task

function promptCircleRadius() {
    const PI = 3.14;
    const circleRadius = prompt('What is the radius of your circle?');
    const circleSquare = PI * circleRadius * circleRadius;
    alert(circleSquare);
}
// promptCircleRadius();


// 2 task

function promptSpeed() {
    const promptDistance = prompt('What distanse is between two cities?');
    const promptVelocity = prompt('How fast do you want get there?');
    const speed = promptDistance / promptVelocity;
    alert(`The speed at which it is necessary to move in order to be on time is ${speed}`);
}

// promptSpeed();


// 3 task 

function convertCurrency() {
    const USDToEURRate = 0.94;
    const promptUSDAmount = prompt('What amount of USD do you want to convert to EUR?');
    const EURAmount = promptUSDAmount * USDToEURRate;
    alert(EURAmount);
}
// convertCurrency();
