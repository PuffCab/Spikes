console.log("algo")


// Extra Function Exercise 1 & 3  ----------------------
const myOp = function (num1, num2) {
    const result = num1 * num2
    console.log(result)
}

myOp(2, 10)



var numeros = 45 * 56
console.log(numeros)

// Extra Function Exercise 4  -------------------------
const triangulo = function (side1, side2, side3) {
    if (side1 != side2 && side1 != side3 && side1 != side2) {
        console.log("escaleno")
    } else if (side1 == side2 && side2 == side3) {
        console.log("equilatero")
    } else {
        console.log("isosceles")
    }
}


const trianguloType = triangulo(2, 2, 2)

console.log(trianguloType)


// Exercise 1 Writing expressions with variables  ---------------------

const myName = "John"
console.log(myName)

// Exercise 2 Writing expressions with variables  ---------------------------

const myAge = 40

console.log(myName, myAge)

// Exercise 3  Writing expressions with variables  ----------------------------

const juliaAge = 40
const ageDiff = myAge - juliaAge
console.log(ageDiff)

// Exercise 4 & 5 Writing code with conditionals  ------------------------

if (myAge < 42) {
    console.log("you drink too much")
} else {
    console.log("dont lie")
}

if (myAge > juliaAge) {
    console.log("mas viejete que Julia")
} else if (myAge < juliaAge) {
    console.log("te has quitado anhos, Julia es mas mayor")
} else {
    console.log("sois mellizos")
}

//---------------------------------------------------------------
// ARRAY ////////////////////////////
//---------------------------------------------------------------
//---------------------------------------------------------------
// exercise 1  Sorting an Array  ------------------
//---------------------------------------------------------------


const myTeam = ["Sos", "Nads", "Fabs", "Mazs", "Obs", "Lucs"]
myTeam.sort()
console.log(myTeam)
// console.log(myPuffs.sort())
console.log(myTeam[0])
console.log(myTeam[myPuffs.length - 1])

for (var i = 0; i < myTeam.length; i++) {
    console.log(myPuffs[i])
}

const myArray = function (algo) {
    console.log(algo)
}

const printArray = myArray(myTeam)
console.log(printArray)

myPuffs.forEach(function (algo) {
    console.log(algo);
});

//---------------------------------------------------------------
// Exercise 2 Looping over an Array  ---------------------
//---------------------------------------------------------------

const myTeamsAge = [34, 25, 31, 26, 43, 38, 15]
var h = 0

while (h < myTeamsAge.length) {
    console.log(myPuffsAge[h]);
    h++;
}

// for (var i = 0; i < myTeamsAge.length; i++) {
//     console.log(myPuffsAge[i])
// }

// myTeamsAge.forEach(function (loquesea) {
//     console.log(loquesea);
// })

    
// for (var h = 0; h < myTeamsAge.length; h++) {
//     console.log(myPuffsAge[h])
// }


// while (h < myTeamsAge.length) {
//     if (myTeamsAge[h] % 2 == 0) {
//         console.log(myTeamsAge[h])
//     };
//     h++;
// }

for (h = 0; h < myTeamsAge.length; h++) {
    if (myTeamsAge[h] % 2 == 0) {
        console.log(myTeamsAge[h])
    }

}

//---------------------------------------------------------------
// Exercise 3 FUNCTIONS THAT USE ARRAYS -----------------------
//---------------------------------------------------------------

// const myNumbersAr = [-1300, 120, 12, -200, -58]


// for (i = 0; i < myNumbersAr.length; i++) {
//     const minNumber = Math.min(...myNumbersAr) // los ... es el spread operator. causes values in an Array to be expanded/"spread" into a function's argument. Problem is browser compatibility
//     console.log(minNumber)
// } // FUNCIONA ****************

// for (i = 0; i < myNumbersAr.length; i++) {
//     const myNumbersSorted = myNumbersAr.sort()
//     console.log(myNumbersSorted[0])
// } // FUNCIONA ************. Ordenamos descendentemente e imprimimos el primer Index. Pero es un ORDEN LEXICOGRAFICO. No numertico. (pero imprime 1 vey por numero)

// var minNumber = myNumbersAr[0] //selecciono la primera posicion
// for (i = 0; i < myNumbersAr.length; i++) {
//     if (myNumbersAr[i] < minNumber) { // comparo cada elemento del array con el index[0] del array. Si es menor, le asigno ese valor. Para el Maximo, lo contrario.
//         minNumber = myNumbersAr[i];
//     }
// }
// console.log(minNumber)  // FUNCIONA *************** SOLUCION PREFERIA ...pero no es una funcion

// for (i = 0; i < myNumbersAr.length; i++) {
//     var minNumero = myNumbersAr.sort(function (a, b) {
//         return a.myNumbersAr - b.myNumbersAr
//     })
// }

// var minNumero = minNumero[0]
// var maxNumero = minNumero[minNumero.length - 1]
// console.log(maxNumero)  // Funciona ******* parcialmente, el maximo da undefined

// var minNumero = myNumbersAr[0]
// var findMinNumber = function (theArray) {
   
//     for (i = 0; i < myNumbersAr.length; i++) {
    
//         if (myNumbersAr[i] < minNumero) {
//         minNumero = myNumbersAr[i]
//         console.log(minNumero)
//         }
//     }
// }

// findMinNumber(myNumbersAr)  // esta funcionando, pero veo cosas mal. porque da igual el argumento,esta hecha para que funcione solo con el myNumbersAr

const myNumbersAr = [-1300, 120, 12, -2000, -58]
const mySecondAr = [-100, 200, -300, 400, 500]

// var findMinNumber = function (oneArray) {
//     var minNumber = oneArray[0]
//     for (i = 0; i < oneArray.length; i++) {
        
//         if (oneArray[i] < minNumber) {
//         minNumber = oneArray[i]
        
//         } 
//     } 
    
//     console.log(minNumber)
// }


// findMinNumber(myNumbersAr)
// findMinNumber(mySecondAr)  // FUNCIONA ***************SOLUCION PREFERIA. funciona con cualquier arraz. Ojo a la colocacion de la var minNumber y del clg


//---------------------------------------------------------------
// // Exercise 4 FUNCTIONS THAT USE ARRAYS -----------------------
//---------------------------------------------------------------

// var findMaxNumber = function (someArray) {
//     var maxNumber = someArray[0];
//     for (i = 0; i < someArray.length; i++) {
//         if (someArray[i] > maxNumber) {
//             maxNumber = someArray[i]
//         }
//     }
//     console.log(maxNumber)
// }

// findMaxNumber(mySecondAr)
// findMaxNumber(myNumbersAr) // FUNCIONA *************** 

// transformo en FOREACH !!!!!!!! <-<-<-<-<-<-<-<-<-<-<-<-<-<

// var findMinNumber = function (someArray) {
//     var minNumber = someArray[0];
//     someArray.forEach(function (someItem) {
//         if (someItem[i] < minNumber) {
//             minNumber = someItem[i]
//         }  
//     })
//    console.log(minNumber)
// }
// findMinNumber(myNumbersAr) // NO FUNCIONA. da siempre la [0] value. 

var findMinNumber = function (someArray) {
    var minNumber = someArray[0];
    someArray.forEach(function (someItem) {
        
        if (someItem < minNumber) {
            
            minNumber = someItem        
        }
    })
   console.log(minNumber)
}
findMinNumber(myNumbersAr) // FUNCIONA ***************  atencion a como se define el for each. Ver documentacion de mozzilla para forEach. lo que se pasa como argumento. En este caso, un elemento especidifoc del array

//---------------------------------------------------------------
// Exercise 5  FUNCTIONS THAT USE ARRAYS -----------------------
//---------------------------------------------------------------

var arrayNumbers = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 4;


var printNumber = function (a, b) {
    console.log(b[a])
}
printNumber(index, arrayNumbers) // FUNCIONA *************** atencion al orden de los argumentos. da igual si es (array,index) o al reves, el primero ira a (a) y 2o a (, b)
    
//---------------------------------------------------------------
// Exercise 6  FUNCTIONS THAT USE ARRAYS -----------------------
//---------------------------------------------------------------

var printRepeatedNumber = function (unArray) {
    var repeatedNumbers = [];
    var doubleCheck = 0;
    for (i = 0; i < unArray.length; i++) {
        for (j = 0; j < unArray.length; j++) {

            if (i !== j) {
                if (unArray[i] === unArray[j] && unArray[i] !== doubleCheck) {
                
                    repeatedNumbers.push(unArray[i]);
                    doubleCheck = unArray[j];
                }
                
        } 

        } 
        
    }
    console.log(repeatedNumbers)
}

printRepeatedNumber(arrayNumbers) // FUNCIONA parcialment **** pero hay que entender mejor como funciona el doubleChck para los valores que se repiten. Sin el, crea un array con los repetidos, pero repitiendolos, es decir return [6, 6, 23, 100, 33, 33, 23, 100] . Tambien estudiar la parte de if(i != j)  (!!!!!!!!!!revisar con mas de un numero que se repite. Mirar clase lucas!!!!!! y repasar la mia....)

// var arrayWithRepeteadedNumers = []

// arrayWithRepeteadedNumers = arrayNumbers.filter(function (itemInArray, indexOfItem, arrayReference) {
//     return arrayReference.indexOf(itemInArray) !== indexOfItem;
// });
// console.log(arrayWithRepeteadedNumers) // FUNCIONA *************** DUDA!!!! no entiendo bien como compara (el index del item con el index del item)

//---------------------------------------------------------------
// Exercise 7  FUNCTIONS THAT USE ARRAYS -----------------------
//---------------------------------------------------------------

myColor = ["Red", "Green", "White", "Black"];
myColorString = myColor.toString();

console.log(myColorString)

//---------------------------------------------------------------
// Exercise 1  JAVASCRIPT STRING -----------------------
//---------------------------------------------------------------

var x = 12345

const reverseString = function (elNumber) {

    numberString = elNumber + '' // transforms number into String (see more ways)

    var splitSring = numberString.split(''); // split the string into 1 string per characther (hence the '')

    var reverseString = splitSring.reverse(); // Reverse the splitted group of strings

    var joinString = reverseString.join('') // join the group of strings removing the '' , hence turning into a number again
   
    console.log(joinString)
}

reverseString(x) // FUNCIONA *****************

// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(reverse_a_number(123456789)); 

// var word = "123456"

// function reverseString(str) {
//     console.log(str.split("").reverse().join(""))
// }

// reverseString(word); // FUNCIONA solo con Strings, no con numbers

// var one = "hello"
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//      console.log(newString)
// }
// reverseString(one); 


//---------------------------------------------------------------
// Exercise 2  JAVASCRIPT STRING -----------------------
//---------------------------------------------------------------

var palabra = "webmaster"

function alphabOrder(str) {
    console.log(str.split("").sort().join(''))
}

alphabOrder(palabra);  // FUNCIONA *********** igual que metodo anterior. Importante separar primero el string en strings individuales.


//---------------------------------------------------------------
// Exercise 3  JAVASCRIPT STRING -----------------------
//---------------------------------------------------------------

var title = "prince of persia"

x = "prince of persia"

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// console.log(capitalizeFirstLetter('foo el tonto')); // funciona solo con la 1a letra

function firstToCapital(anyString)
{
    var stringSplited = anyString.split(" "); // Separo el string por palabras ATENCION al ESPACIO. Sin espacio, separa por letras
    console.log(stringSplited)
    for ( var i = 0; i < stringSplited.length; i++ )
    {
        var j = stringSplited[i].charAt(0).toUpperCase(); // loop sobre esos strings, y creo una var en la que su valor sera el primer caracter de cada palabra [0] en mayusculas
        stringSplited[i] = j + stringSplited[i].substr(1); // a cada palabra del string, le anhado el valor de j (una letra en mayusculas)en la primera posicion, y le resto una letra a la palabra original (sin la mayuscula)
        
    }
    //console.log(stringSplited.join(" "))
    newString = stringSplited.join(" ")
     console.log(newString) ;
}


firstToCapital(title) 

//---------------------------------------------------------------
// Exercise 4  JAVASCRIPT STRING -----------------------
//---------------------------------------------------------------

var frase = "Web Development Tutorial"


function findLongest(unString) {
    var splittedSentence = unString.split(' '); 
    var longestWord = '';                    
    for (i = 0; i < splittedSentence.length; i++) { 
        if (splittedSentence[i].length > longestWord.length) { 
            longestWord = splittedSentence[i]
        }
    }
    console.log(longestWord)
}

findLongest(frase)


//---------------------------------------------------------------
// Exercise 1  DOM MANIPULATION -----------------------
//---------------------------------------------------------------

// const bands = ['Dire Straits', 'Kansas', 'Steely Dan', 'U2', 'depeche mode']


// const ul = document.querySelector('ul')

// function addBands(bands) {

//     for (i = 0; i < bands.length; i++){
    
//         let bandItem = bands[i]

//         const listItem = document.createElement('li');
//         ul.appendChild(listItem);
//         listItem.textContent = bandItem
        
//     }

    
//     // bandas.forEach(function (elemento) {
//     //     let bandItem = elemento;
//     //     const listItem = document.createElement('li');
//     //     ul.appendChild(listItem);
//     //     listItem.textContent = bandItem

//     // })

// }

// addBands(bands) 

//---------------------------------------------------------------
// Exercise 2  DOM MANIPULATION -----------------------
//---------------------------------------------------------------


function addMultTable(fila, columna) {

    const body = document.querySelector('body')
    const table = document.createElement('table');
    body.appendChild(table);

    for (i = 0; i < fila; i++) {
        const tr = document.createElement('tr');
        tr.textContent = i;
        table.appendChild(tr);

        for (j = 1; j < columna; j++) {
        const td = document.createElement('td');
        td.textContent = j;
        tr.appendChild(td);
        }

    }

}

addMultTable(4, 8) 

//---------------------------------------------------------------
// EXTRA Exercise 5  -----------------------
//---------------------------------------------------------------


const normalArray = ['Javascript']



// function turnLetter(theArray) {
    
//     const arrayToString = theArray.toString()
//     console.log(arrayToString)
//     const arrayToStringSplitted = arrayToString.split('')
//     console.log(arrayToStringSplitted)

//     var repeatedLetter = ''
//     var newString = ''

//     for (i = 0; i < arrayToStringSplitted.length; i++) {
//         if (arrayToStringSplitted[i] == "a") {
//             arrayToStringSplitted[i] = 1
//         }
//     }
//     console.log(arrayToStringSplitted.join(''))
// }
    
// turnLetter(normalArray) 





// function myFunction(thisArr) {
    
//     var arrayToStr = thisArr.toString() // Turn Array into a String 
//     var arrayToStr= arrayToStr.split("").join(' '); // put a space between each letter
//     var changedString = arrayToStr.replace(/a/g, 1) // change every "a" for an "1"
//     var changedString = changedString.replace(/\s/g, '')//take out every space (\s regex "espace")
//     var stringToArray = changedString.split(' ') /turn string into array without spaces 
//     console.log(changedString)
//     console.log(stringToArray)
// }
// myFunction(normalArray) //  



function turnLetter(theArray) {
    
    const arrayToString = theArray.toString() // turn array into a single world string
    const arrayToStringSplitted = arrayToString.split('') // turn string into several comma separated strings, to iterate over them
    var repeatedLetter = ''
    var arrayOfChar= []
    for (i = 0; i < arrayToStringSplitted.length; i++) {
        
        if (arrayToStringSplitted.indexOf(arrayToStringSplitted[i]) !== arrayToStringSplitted.lastIndexOf(arrayToStringSplitted[i])) {
            // repeatedLetter += arrayToStringSplitted[i];
           // arrayOfChar.push(arrayToStringSplitted[i])
            arrayOfChar.push('1')
        } else {
            arrayOfChar.push(arrayToStringSplitted[i])
        }
    }
    console.log(repeatedLetter)
    console.log(arrayOfChar)   
}
turnLetter(normalArray) 


//---------------------------------------------------------------
// EXTRA Exercise 6  -----------------------
//---------------------------------------------------------------

const nextArray = [4, 15, 3, 4, 5]
 let result = 0
function sumArray(anyArray) {

    result = nextArray.reduce(getSum, 0);
    function getSum(a, b) {
        return a + b
    }
    // var result = nextArray.reduce((a, b) => a + b, 0); /
    
    let minNum = anyArray[0]; 
    for (i = 0; i < anyArray.length; i++) {
        if (anyArray[i] < minNum) {
            minNum = anyArray[i];
        }
    }
    
    
    // let minNum = Math.min.apply(Math, anyArray);
    // let minNum = Math.min.apply(null, anyArray);//does the same as  (Math, array). 
    // let minNum = Math.min(...anyArray);// spread operator. ECMAScript 6
    console.log(result);
    console.log(minNum);
}

sumArray(nextArray) // FUNCIONA ********** ver las distintas formas de encontrar min/max, desde for loop a math.min/max,

//---------------------------------------------------------------
// EXTRA Exercise 7  -----------------------
//---------------------------------------------------------------

// var arrayWithEven = [1, 2, 8, 3, 2, 3, 4]
// var otroNum = []

// function addEvenNum(anyArray) {
    
//     let evenNum = [];
    
//     let repeatedEven = []
//     for (i = 0; i < anyArray.length; i++) {

//         if (anyArray[i] % 2 == 0 && anyArray[i]) {
//            otroNum = evenNum.push(anyArray[i]);
            

            

//             }

//         for (j = 0; j < evenNum.length; j++) {

//             let index = evenNum.indexOf(j)

//                 if (index < -1) {
                    
//                     evenNum.splice (index, 1)
//                 }
            
//             }
        
//         // console.log(evenNum)
//         // for (j = 0; j < anyArray.length; j++) {

            
//         // }

//     }

//     console.log(evenNum)
//     console.log(repeatedEven)

// }

// addEvenNum(arrayWithEven)
// console.log(otroNum)


// var printRepeat = function (unArray) {
//     var repeatedNumbers = [];
//     var doubleCheck = 0;
//     for (i = 0; i < unArray.length; i++) {
//         for (j = 0; j < unArray.length; j++) {

//             if (i !== j) {
//                 if (unArray[i] === unArray[j] && unArray[i] !== doubleCheck) {
                
//                     repeatedNumbers.push(unArray[i]);
//                     doubleCheck = unArray[j];
//                 }
                
//         } 

//         } 
        
//     }
//     console.log(repeatedNumbers)
// }

// printRepeat(otroNum) // NO RESUELTO !!!!!!!!!!!!!!!!!!!!!!!! try again


//---------------------------------------------------------------
// EXTRA Exercise 8  -----------------------
//---------------------------------------------------------------

    var arrayWithEven = [1, 2, 8, 3, 2, 3, 4]

    function addEvenIndex(anyArray) {
        let evenIndex = [];
        let sumEvenIndex = 0
        
        for (i = 1; i < anyArray.length; i++) {

            if (i % 2 == 0) {
               evenIndex.push(anyArray[i])  
            }
            sumEvenIndex = evenIndex.reduce(doTheSum, 0)
            function doTheSum(a, b) {
            return a + b
             }
        }
        console.log(evenIndex)
        console.log(sumEvenIndex)
    }
addEvenIndex(arrayWithEven) // FUNCIONA ***************** 
    

//---------------------------------------------------------------
// EXTRA Exercise 9  -----------------------
//---------------------------------------------------------------

function findEvenNumBefore(theNumber) {
    let evenNumbers = []
    // let numBefore = theNumber - 1
    for (i = 0; i < theNumber; i++) { //opcion "trampa" , si haces el for (....; i += 2), va contando de 2 en 2. 
         
        if (i % 2 == 0) {
            evenNumbers.push(i)
        }
    }
    console.log(evenNumbers)
}

findEvenNumBefore(9) // FUNCIONA ************ pero no estoy muy contento con la solucion. REalmente usamos el index, y querria usar los numeros


//---------------------------------------------------------------
// EXTRA Exercise 10  -----------------------
//---------------------------------------------------------------

function findOddNumbers(firstNumber, secondNumber) {
    let oddNumbers = []
    for (i = firstNumber; i < secondNumber; i++) {
        
        if ( i % 2 !== 0) {
            oddNumbers.push(i)
        }
    }
    console.log(oddNumbers)
}

findOddNumbers(1, 13)