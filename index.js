
addEventListener("DOMContentLoaded", (e) => {
	// Ensure that only numbers can be typed into the text-box
	let cc_num = document.getElementById('cc_num')
	cc_num.addEventListener("keypress", (e) => {
		code = (e.keyCode ? e.keyCode : e.which);
		if (code >= 48 && code <=57) { // unicode range for [0-9]
			return
		} 
		e.preventDefault();
	});

});



function verify_number() {
	// we can assume that every value is a number as we've already sanitized the input
	var numbers = cc_num.value.split('').map((i) => Number(i)); // Convert the string into a list of numbers
	
	var last_num = numbers.splice(numbers.length-1, 1); // remove the last number and store it in a variable
	
	numbers = numbers.reverse() // reverse the remaining numbers
	
	var check_number = 0
	numbers.filter((_, i) => !Boolean(i&1)).forEach((value, i) => { // iterate over all the even numbers
		var n = value*2;
		if (n>9) {n -= 9}
		check_number += n; // add it to the check string
	});
	check_number += last_num;
	if (check_number%10==0) {
		alert("Credit Card Number is valid!")
	} else {
		alert("Credit Card Number is invalid.. :(")
	}
}
