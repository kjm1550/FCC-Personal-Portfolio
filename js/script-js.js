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
});
