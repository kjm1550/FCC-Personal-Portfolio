$(document).ready(() => {
	$("#pc_submit").click(function() {
		var str = document.getElementById("pc_input").value;
		var back = [];
		//str = str.replace(/[\W_]/g, '').replace(/ /g, '').toLowerCase();
		var arr = str.replace(/[\W_]/g, '').replace(/ /g, '').toLowerCase().split('');
		//arr = str.split('');
		for (x=0; x < arr.length; x++) {
			back[x] = arr[arr.length - (x+1)];
		}
		if (arr.join('') == back.join('')) {
			document.getElementById("pc_output").innerHTML = "A Palidrome";
		} else {
			document.getElementById("pc_output").innerHTML = "Not A Palidrone";
		}
	});


	const realNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	const romanNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

	$("#rnc_submit").click(function() {
		var num = document.getElementById("rnc_input").value;
		var romanized = '';
		for (x = 0; x < realNums.length; x++) {
			while (realNums[x] <= num) {
				if (num >= realNums[x]) {
					romanized += romanNums[x];
					num -= realNums[x];
				}
			}
		}
		document.getElementById("rnc_output").innerHTML = romanized;
	});

	
});
