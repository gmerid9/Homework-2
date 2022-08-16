////////////////////////////////////////////////////////////////
// easy going
for ( let i = 1; i <= 20; i++ ) {
    console.log(i)
}
///////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////
//Get even 
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0 ) {
        console.log(i)
    }
}
//////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////
//Fizz Buzz

for (let i = 0; i<=100; i++) {
    if (i %3 === 0 && i %5 === 0) {
        console.log('FizzBuzz')

    } else if  (i %3 === 0) {
        console.log('Fizz')
    }else if (i %5 ===0) {
        console.log('Buzz')
    } else 
    console.log(i)
}
//////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
//////////Wild Wild Life 


const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
 
plantee[2]= 5001;  //add 1 to  plantee age 
console.log(plantee);  
wolfy[3] = 'Gotham City'  // changed wolfy hometown to Gotham city 
console.log(wolfy);
dart.push('Hawkins');  // give dart second hometown 
console.log(dart);
wolfy.shift();      // removed wolfy name 
wolfy.unshift('Gameboy'); // changed wolfy name 
console.log(wolfy);
/////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
//// Yell at the ninja turtles

const ninjaTurtles =  ['Donatello', 'Leonardo' , 'Raphael', 'Michaelangelo']
 for (let ninja of ninjaTurtles) {
    console.log(ninja.toUpperCase())
 }
////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
//Method revisted 
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 
'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 
'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8])

favMovies.sort()   //// 
// console.log(favMovies) 
favMovies.pop()     ///// remove the last element in the array 
favMovies.push('Guardians of the Galaxy') //// push an elment to the end of the array 
// console.log(favMovies)
favMovies.reverse()    
// console.log(favMovies)
favMovies.unshift('The lion King')
// console.log(favMovies)
 
 console.log(favMovies.indexOf('Django Unchained')) ////get an index of Django Unchained'


favMovies.splice(16,0,'Avatar')   ///splice Django Unchained and add Avatar 
// console.log(favMovies)

console.log(favMovies.length)  ///// helps determine the  number of elemets in the array 

 let newFavMovies =favMovies.slice(11)    /////slice to the last half of the array and store it in a new variable 
console.log(newFavMovies)  

// console.log(indexOf'Fast and Furious') ////error message missing because the array has been permanently altered 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////where is waldo 

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
                    
whereIsWaldo.splice(1,1 )    //Remove Eggbert
// console.log(whereIsWaldo)
whereIsWaldo[1][2]= 'No One'  //cahnge 'Neff' to 'No One'
// console.log(whereIsWaldo)
console.log(whereIsWaldo[2][1][1])  //Acess and Console.log 'Waldo'


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////Excited Kitten
// 1
const message = 'Love me ,pet me! HSSSSSSS! '

for ( i=0;  i <=20 ; i++) {
    console.log(message)
}
//2
// declare a function called kitten that takes no parameter
const kitten = () => {
    // declare an array phrase that will hold the phrases
    const phrasesArr = [
      "human... whu you taking pictures of me?",
      "the catnip made me do it",
      "why does the red dot always get away...",
    ];
    // use for loop to log the the phrases 20 times
    for (let i = 1; i < 21; i++) {
      // use if statement to log the correct phrase
      // if i is even, then log one of the phrases from the phrasesArr array
      // if i is odd, log 'love me , pet me....'
      if (i % 2 === 0) {
        // declare a variable that will have the random phrase from the phrasesArr
        const randomPhrase = phrasesArr[Math.floor(Math.random() * 3)];
        console.log(randomPhrase);
      } else {
        console.log("Love me, pet me!HSSSSSS!");
      }
    }
  };
  //test

console.log(kitten());

  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//3 // challenge Median

// declare a function called median that will take one parameter
const median = (num) => {
    // sort the elements in the array in an ascending order using array sort method
    num.sort((a, b) => {
      return a - b;
    });
    // use if statement to find median
    // if the length is odd, then return the element at postion calculated using (num.length +1)/2, the middle element
    // if the length is even, then return the the average of the two middle elements
    if (num.length % 2 !== 0) {
      return num[(num.length + 1) / 2 - 1];
    } else {
      // declare a variable for getting the two middle numbers, firstNum and secondNum
      const firstNum = num[Math.floor(num.length / 2) - 1];
      const secondNum = num[Math.floor(num.length / 2)];
      //return the average of the two numbers
      return (firstNum + secondNum) / 2;
    }
  };
  
  // Tests
  const num = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,];
  
  console.log(median(num));
