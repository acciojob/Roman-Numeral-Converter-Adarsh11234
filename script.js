function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));
 


    let roman = '';

    // Iterate over each place value (thousands, hundreds, tens, ones)
    for (let i = 0; i <= 6; i++) {
        let symbol = obj[i][0];
        let value = obj[i][1];

        // Find how many times the symbol fits into the number
        while (num >= value) {
            roman += symbol;
            num -= value;
        }

        // Handle special cases for subtractive notation (like IV, IX, etc.)
        if (i % 2 === 0 && num >= value - obj[i + 1]?.[1]) { // For 1000, 100, 10, 1 (check if subtractive is possible)
            roman += obj[i + 1][0] + symbol;
            num -= (value - obj[i + 1][1]);
        }
    }

    return roman;
}

// Example usage:
console.log(convertToRoman(36)); // Output: XXXVI





// do not edit below this line
module.exports = convertToRoman
