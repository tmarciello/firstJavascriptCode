// Pick a userName or not...
let userName = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Type your question here
let userQuestion = 'Will it rain tommorrow'; 

// Making sure there will be 7 random answers to choose from
let randomNumber = Math.floor(Math.random() * 8);

// The anwer of the magic eight ball will be stored in this variable
let eightBall = '';

// This flow assigns a value to the eightBall variable according to the randomNumber
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Better not tell you now';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Dont count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    console.log('Reply hazy try again');
    }

// Either with or without a userName the string logged to the console will be suitable
if (userName) {
  console.log(`${userName} asked: ${userQuestion}?`);
} else {
  console.log(`You asked: ${userQuestion}?`);
}

// Logging the eightBall's anwer to the console
console.log(`Magic Eight Ball answers: ${eightBall}.`);
