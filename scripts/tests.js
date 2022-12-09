//Uncomplete section

var test = document.getElementById("test")
test.addEventListener("click", function () {tests()})

/*
0 = division
1 = multiplication
2 = subtraction
3 = addition
*/

function tests()
{
    var factors = [10, 5]
    var modificators = [0]
    if (calculation(factors, modificators) == 2)
    {
        console.log("Test 1 Succeeded");
    }
    else
    {
        console.log("Test 1 Failed");
    }

    var factors = [8, 19]
    var modificators = [1]
    if (calculation(factors, modificators) == 152)
    {
        console.log("Test 2 Succeeded");
    }
    else
    {
        console.log("Test 2 Failed");
    }

    var factors = [85, 72]
    var modificators = [2]
    if (calculation(factors, modificators) == 13)
    {
        console.log("Test 3 Succeeded");
    }
    else
    {
        console.log("Test 3 Failed");
    }

    var factors = [55, 28]
    var modificators = [3]
    if (calculation(factors, modificators) == 83)
    {
        console.log("Test 4 Succeeded");
    }
    else
    {
        console.log("Test 4 Failed");
    }

    var factors = [15, 5, 22, 110]
    var modificators = [0, 2, 3]
    if (calculation(factors, modificators) == 91)
    {
        console.log("Test 5 Succeeded");
    }
    else
    {
        console.log("Test 5 Failed");
    }

    var factors = [50, 1, 10, 99, 606, 547]
    var modificators = [1, 2, 1, 0, 3]
    if (calculation(factors, modificators) == 595)
    {
        console.log("Test 6 Succeeded");
    }
    else
    {
        console.log("Test 6s Failed");
    }
}
