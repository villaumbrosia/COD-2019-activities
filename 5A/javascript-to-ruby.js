/** Part 1 **/
// A

var myVariable = 7.4543;

// B

console.log(myVariable);

/** Part 2 **/

var mostSpokenLanguages = ['English', 'Mandarin Chinese', 'Spanish', 'Arabic', 'Hindi', 'Russian', 'Malay'];
mostSpokenLanguages[0];
mostSpokenLanguages[mostSpokenLanguages.length - 1]

mostSpokenLanguages.indexOf('Arabic'); 


/** Part 3 **/

var dogProfile = {
  name: 'Fido',
  age: 3, 
  gender: 'male', 
  breed: 'mixed', 
  pattern: 'spotted'
}

dogProfile["name"]; // 'Fido'

/** Part 4 **/

function everyOtherElement(array) {
  var finalArray = []; 
  array.forEach(function(element, index) {
    if (index % 2 === 1) {
      finalArray.push(element);
    }
  });
  return finalArray;
}

