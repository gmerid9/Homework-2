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
favMovies.pop()
favMovies.push('Guardians of the Galaxy')
// console.log(favMovies)
favMovies.reverse()
// console.log(favMovies)
favMovies.unshift('The lion King')
// console.log(favMovies)
let index =favMovies.index('Django Unchained')
console.log(index)

// favMovies.splice('d')



//////////////////////////////////////////////////////////