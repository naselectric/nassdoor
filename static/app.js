// let number = prompt("Please enter a number:", "0");
// if (number !== null) {
//    console.log(`You entered: ${number}`);
// } else {
//    console.log("Input was canceled.");
// }

// var x=number*50

// console.log(x);

// document.getElementById("Cost").innerHTML = x;



const form = document.getElementById('myForm');


form.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop form from submitting to server


          var x = parseInt(document.getElementById('x').value, 10);     
          var y= parseInt(document.getElementById('y').value, 10);

          var area = x*y;
          var cost = (area/1000000)*195
          var cost2 = cost + 1100
          const formatter = new Intl.NumberFormat('en-US', {
           style: 'currency',
           currency: 'USD',
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2
          });
        
          const currency = formatter.format(cost);
          const currency2 = formatter.format(cost2);
          const output=`The Price of the Door ${currency}`
          const output2=`The Price of the Door with installation and motor ${currency2}`
          document.getElementById("cost").innerHTML = output;
          document.getElementById("cost2").innerHTML = output2;


})
