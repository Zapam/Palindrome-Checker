let input = document.querySelector(".input");
let button = document.querySelector(".button");
let result = document.querySelector(".result");

function check() {
	const inputValue = input.value;
	const reg = /[\W_]/g;
	const filteredStr = inputValue.toLowerCase().replace(reg, "");
	let reversed = filteredStr.split("").reverse().join("");
	console.log(reversed);
	if (inputValue == "") {
		result.innerHTML = "Please enter a word to check if it's a Palindrome.";
	} else {
		if (filteredStr == reversed) {
			result.innerHTML = `Yes!! The word <span class='text-violet-500 font-bold'>'${inputValue}'</span> is a Palindrome.`;
		} else if (filteredStr !== reversed) {
			result.innerHTML = `NO :[ Word <span class='text-violet-500 font-bold'>'${inputValue}'</span> is not a Palindrome.`;
		}
	}
}

button.addEventListener("click", check);
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    check();
  }
}); 
