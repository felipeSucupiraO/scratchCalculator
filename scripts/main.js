//Elements setting

var numberButtons = new Array (10);
for (let i = 0; i < numberButtons.length; i++)
{
    numberButtons[i] = document.getElementById("button" + i);
}

var screen = document.getElementById("displayScreen");

var deleteButton = document.getElementById("deleteButton");

var modificationButtons = new Array(4);
for (let i = 0; i < modificationButtons.length; i++)
{
    modificationButtons[i] = document.getElementById("modifier" + (i + 1));
}

var equalButton = document.getElementById("equalTo");


// Displaying

for (let i = 0; i < numberButtons.length; i++)
{
    numberButtons[i].addEventListener ("click", function() {addToScreen (i)});
}

for (let i = 0; i < modificationButtons.length; i++)
{
    modificationButtons[i].addEventListener ("click", function() {addToScreen (modificationButtons[i].firstElementChild.textContent)});
}

function addToScreen (number)
{
    screen.textContent += number;
}


//Deleting
// The following code will first take out the deleted number/modificator from the array, to then take it out from the screen

deleteButton.addEventListener("click", function () {
    if (screen.textContent[screen.textContent.length - 1] == "x" || screen.textContent[screen.textContent.length - 1] == "+" || screen.textContent[screen.textContent.length - 1] == "÷" || screen.textContent[screen.textContent.length - 1] == "-")
    {
        modificators.splice(modificators.length - 1, 1);
    }
    else
    {
        if (factors[factors.length - 1].length == 1)
        {
            factors.splice(factors.length - 1, 1);
        }
        else
        {
            factors[factors.length - 1] = factors[factors.length - 1].substring(0, factors[factors.length - 1].length - 1);
            // I know this thing over here seems crazy, but it basically takes out the last char of the string that is inside the array, I hope you understand it becase I myself didn't after writing this
        }
    }

    screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1)

    if (factors.length == 0)
    {
        firstFactorNumber = true;
    }
});


// Data reading
// The following code organizes all the fators typed in the calculator into a single array with all the factors

for (let i = 0; i < numberButtons.length; i++)
{
    numberButtons[i].addEventListener ("click", function() {factorsSetting(i)});
}

var factors = new Array;
var firstFactorNumber = true;

function factorsSetting (number)
{
    if (firstFactorNumber == true)
    {
        factors.push(number.toString());
        firstFactorNumber = false;
    }
    //If it is the first digit of the factor, it creates a new element in the array corresponding to the factor. It is made in string because it is easier to add the other digits later.
    else
    {
        factors[factors.length - 1] += number.toString();
    }
    //If it is just adding a digit to an existing factor, then it will do so.
}   

for (let i = 0; i < modificationButtons.length; i++)
{
    modificationButtons[i].addEventListener ("click", function() {firstFactorNumber = true;});
}
//When a new modificator is added, it means that the factor before is complete and there is no more digits to add, therefore the next number clicked on the calculator must be a new factor.


// Now the following code will create an array with all the calculations that will be made with the factors
// The index of each calculation will be the index of the first factor's calculation and it's value will represent the kind of calculation
/*
0 = division
1 = multiplication
2 = subtraction
3 = addition
*/

var modificators = new Array;

for (let i = 0; i < modificationButtons.length; i++)
{
    modificationButtons[i].addEventListener ("click", function() {modificatorsSetting(i)});
}

function modificatorsSetting (modificator)
{
    switch (modificator)
    {
        case 0:
            modificators.push(0)
            break;
        case 1:
            modificators.push(1)
            break;
        case 2:
            modificators.push(2)
            break;
        case 3:
            modificators.push(3)
            break;
    }
}


// Count making
//The algorith down is not good for big amounts of data because it has O(n^2), but once the program only uses small amounts of data, it works fine.

var result;

equalButton.addEventListener ("click", function() { calculation(factors, modificators) } );

function calculation(factors, modificators)
{
    let result = null;

    while (factors.length > 1)
    {

        //The following "while" loop will run while we have multiplications and divisions, because these operations must be make first
        while (modificators.indexOf(0) != -1 || modificators.indexOf(1) != -1)
        {

            //The following if statement decides if we have a multiplication or a division first
            if ((modificators.indexOf(0) < modificators.indexOf(1) || modificators.indexOf(1) == -1) && modificators.indexOf(0) != -1)
            {
                result = parseInt(factors[modificators.indexOf(0)], 10) / parseInt(factors[modificators.indexOf(0) + 1], 10);

                //The next three lines will reorganize the arrays in a way that one of the factors is removed and only the result remains
                //It also deletes the used modifier
                factors[modificators.indexOf(0)] = result;
                factors.splice(modificators.indexOf(0) + 1, 1);
                modificators.splice(modificators.indexOf(0), 1);
            }
            else
            {
                result = parseInt(factors[modificators.indexOf(1)], 10) * parseInt(factors[modificators.indexOf(1) + 1], 10);

                factors[modificators.indexOf(1)] = result;
                factors.splice(modificators.indexOf(1) + 1, 1);
                modificators.splice(modificators.indexOf(1), 1);
            }
        }

        //Now the following if statement defines if there is a addition or subtraction first
        if (modificators.indexOf(2) < modificators.indexOf(3) && modificators.indexOf(2) != -1)
        {
            result = parseInt(factors[modificators.indexOf(2)], 10) - parseInt(factors[modificators.indexOf(2) + 1], 10);

            factors[modificators.indexOf(2)] = result;
            factors.splice(modificators.indexOf(2) + 1, 1);
            modificators.splice(modificators.indexOf(2), 1);
        }
        else if (modificators.indexOf(3) != -1)
        {
            result = parseInt(factors[modificators.indexOf(3)], 10) + parseInt(factors[modificators.indexOf(3) + 1], 10);
            
            factors[modificators.indexOf(3)] = result;
            factors.splice(modificators.indexOf(3) + 1, 1);
            modificators.splice(modificators.indexOf(3), 1);
        }
    }

    factors[0] = factors[0].toString();
    screen.textContent = factors[0];
}


//Trying to import the calculation method into tests.js, also very sleepy right now

