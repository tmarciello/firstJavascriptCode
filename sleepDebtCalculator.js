const getSleepHours = day => {
  switch(day) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 8;
      break;
    case 'Wednesday':
      return 8;
      break;
    case 'Thursday':
      return 8;
      break;
    case 'Friday':
      return 8;
      break;
    case 'Saturday':
      return 8;
      break;
    case 'Sunday':
      return 8;
      break;
    default:
      console.log('Invalid input');
              }
};
// put in the hours you slept each day for a week

const getTotalSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
// calculates actual sleephours per week by adding all your sleep hours of the week

const getIdealSleepHours = () => {
  let idealHours = 9; // put in your ideal hours of sleep per night
  return idealHours * 7; // ideal hours of sleep per week
};

const calculateSleepDebt = () => {
  const actualSleepHours = getTotalSleepHours(); // 8 * 7
  const idealSleepHours = getIdealSleepHours(); // 9 * 7
  
  if (actualSleepHours === idealSleepHours) {
    console.log('Congradulations, you slept the perfect amount of hours!');
  } 
  
  if (actualSleepHours < idealSleepHours) {
    console.log(`You slept ${idealSleepHours - actualSleepHours} hours less than you wanted to this week. Get some rest!`);
  }  
  
  if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours} hours more sleep than you wanted to this week!`);
  }
  
};

calculateSleepDebt(); // calling the calculate sleep function to actually run it
