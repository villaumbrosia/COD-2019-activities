/** Part 1 **/
// A

var myVariable = 7.4543;

// B

console.log(myVariable);

/** Part 2 **/

var mostSpokenLanguages = ['English', 'Mandarin Chinese', 'Spanish', 'Arabic', 'Hindi', 'Russian', 'Malay'];
mostSpokenLanguages[0];
mostSpokenLanguages[mostSpokenLanguages.length]

mostSpokenLanguages.indexOf('Arabic'); 

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

