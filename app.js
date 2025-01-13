const paragraph = document.querySelector(".card-holder");
const inputField = document.querySelector(".card-holder-name");
const cardNumber = document.querySelector(".card-number");
const cardNumberName = document.querySelector(".cardNumber2");

inputField.addEventListener("input", (e) => {
	const value = e.target.value;
	paragraph.textContent = value || "Jane Appleseed";
});

cardNumberName.addEventListener("input", (e) => {
	const value = e.target.value; //"01234567"
	let text = "";

	for (let i = 0; i < value.length; i++) {
		text += value[i];

		if ((i + 1) % 4 == 0) {
			text += " ";
		}
	}

	console.log(text);

	cardNumber.textContent = text || "0000 0000 0000 0000";
});
