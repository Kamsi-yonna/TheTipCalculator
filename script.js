// Script.js

// Custom Function

function calculateTip(){
    // first thing to do is to store the data of the inputs we need in variables.
    
    var billAmount = document.getElementById("billAmount").value;
    // Store the value within the billAmount..once you click the calculate button.
    
    var serviceQuality = document.getElementById("serviceQuality").value;
    
    var numPeople = document.getElementById("totalPeople").value;
    
    //2nd step is to do some quick validations. For when people click without inputing real numbers/values
    
    // === is 'exactly equal to
    // || is OR
    // Return kills a function and stops it from running. it prevents the function from continuing
    if(billAmount === "" || serviceQuality == 0 ) {
        window.alert("Please enter some values!");
        return;
    }
    
    // we need to tell the button to add the word 'each' when the totalPeople is more than 1. 
    // We will check to see if the input is empty or less than or equal to 1.
    if(numPeople === "" || numPeople <= 1 ) {
        numPeople = 1;
        
        document.getElementById("each").style.display = "none"; // This will hide/remove the each id.
    } else {
        document.getElementById("each").style.display = "block"; // This will take it back to the normal display style.
    }
    
    //Now we do some math
    var total = (billAmount * serviceQuality) / numPeople;
    
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
//    window.alert(total); This will give figures in decimal and we need a whole number or to two decimal places.
    
    // Now we will display the total tip here
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    
}

//To hide the tip amount till the calculation has been done
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Now we will build functions to tell javascript what to do when we click some buttons

// We are building a function that will enable us to calculate the tip.

// The on click simply means that this would be carried out when we click whatever has the id of calculate. The function would be created above the page.
document.getElementById("calculate").onclick = function() {calculateTip();};