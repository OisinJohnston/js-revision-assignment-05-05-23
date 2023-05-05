
addEventListener("DOMContentLoaded", (e) => {
	let cc_num = document.getElementById('cc_num')
	cc_num.addEventListener("keypress", (e) => {
		code = (e.keyCode ? e.keyCode : e.which);
		if (code >= 48 && code <=57) {
			return
		}
		e.preventDefault();
	});

});



function verify_number() {
	var numbers = cc_num.value.split('').map((i) => Number(i));
	var last_num = numbers.splice(numbers.length-1, 1);
	numbers = numbers.reverse()
	var check_number = 0
	numbers.filter((_, i) => !Boolean(i&1)).forEach((value, i) => {
		var n = value*2;
		if (n>9) {n -= 9}
		check_number += n;
	});
	check_number += last_num;
	if (check_number%10==0) {
		alert("Credit Card Number is valid!")
	} else {
		alert("Credit Card Number is invalid.. :(")
	}
}
