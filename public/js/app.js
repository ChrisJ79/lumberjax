

'use strict';

// Board Footage Calculator Code
// var calculateBF = function() {
//     var height = 4;
//     var width = 8;
//     var length = 20;
//     var quantity = 10;
//     var boardFeet = eval("height * width * length * quantity / 12");
//     var res = boardFeet;
//     document.getElementById("bf").innerHTML = res;
// };
// console.log(calculateBF);

// Function to assign variables to various parts of the inputted string that will be calculated to display the BF via //angular.
var fffTimber = function() {
    // var str = "";
    var heightNum = str.charAt(0) + str.charAt(1) + 'x';
    var widthNum = str.charAt(2) + str.charAt(3) + 'x';
    var lengthNum = str.charAt(4) + str.charAt(5) + ' - ';
    var quantityNum = str.charAt(6) + str.charAt(7) + str.charAt(8) + str.charAt(9) + str.charAt(10) + ' pcs ';
    var str = document.getElementById("timber-entry").value;
    var total = heightNum + widthNum + lengthNum + quantityNum;
    document.getElementById("output").innerHTML = str;


//
// function myFunction() {
//
};
