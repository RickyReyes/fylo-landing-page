/* function from stack overflow */
function validateEmail(email) {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
}

const heroInput = document.querySelector(".hero-email");
const earlyAccessInput = document.querySelector(".early-access-email");
const heroBtn = document.querySelector(".hero-btn");
const badHeroEmail = document.querySelector(".bad-hero-email");
const badEarlyAccessEmail = document.querySelector(".bad-early-access-email");

heroInput.addEventListener("input", checkHeroEmail);
earlyAccessInput.addEventListener("input", checkEarlyAccessEmail);

function checkHeroEmail(e) {
	let email = e.target.value;
	console.log(email);
	if (!validateEmail(email)) {
		heroInput.style.border = "1px solid red";
		badHeroEmail.innerText = 'Please check your email'
	} else {
		heroInput.style.border = "0.9px solid black";
		badHeroEmail.innerText = ''
    }
	if (email === '') {
		heroInput.style.border = "0.9px solid black";
		badHeroEmail.innerText = ''
	}
}

function checkEarlyAccessEmail(e) {
    let email = e.target.value;
    if (!validateEmail(email)) {
		earlyAccessInput.style.border = "1px solid red";
		badEarlyAccessEmail.innerText = 'Please check your email'
	} else {
		earlyAccessInput.style.border = "0.9px solid black";
		badEarlyAccessEmail.innerText = ''
    }
	if (email === '') {
		earlyAccessInput.style.border = "0.9px solid black";
		badEarlyAccessEmail.innerText = ''
	}
}