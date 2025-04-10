function addNumbers() {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var sum = parseInt(num1) + parseInt(num2);
  alert("The sum of the two numbers is: " + sum);
}
function getdate(){
  var date = new Date().toString();
  alert(date);
}
function check(){
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  if ( parseInt(num1) == 216 && parseInt(num2)>= 100 ){
	alert("Discount Success!");
	var finmoney = parseFloat(num2) * 0.85;
	document.getElementById('num2').value = finmoney;
  }else if ( parseInt(num1) != 216){
	alert("Discount Fail! ID not approved!");
	window.location.reload();
	}else if ( parseInt(num2) < 100 ){
		alert("Discount Fail! Amount not approved!");
		window.location.reload();
		}
}
function updateID(){
	const input = document.getElementById('num1').value;
	document.getElementById('displayID').textContent = "Customer Number: "+ input;
}
function updatemoney(){
	const input = document.getElementById('num2').value;
	document.getElementById('displaymon').textContent = "Total Purchase: "+ input;
}