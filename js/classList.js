'use strict';

const btn = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');


// console.log(btn[0].classList.length);
// console.log(btn[1].classList.length);
// console.log(btn[1].classList.item(0));
// console.log(btn[1].classList.add('red'));
// console.log(btn[1].classList.remove('bluee'));
// console.log(btn[1].classList.toggle('bluee'));

btn[1].addEventListener('click', () => {
	if (!btn[1].classList.contains('red')) {
		btn[1].classList.add('red');

	} else {
		btn[1].classList.remove('red');
	}

});

btn[0].addEventListener('click', () => {
	if (!btn[1].classList.contains('red')) {
		btn[1].classList.add('red');

	} else {
		btn[1].classList.remove('red');
	}

});

wrapper.addEventListener('click', (event) => {
	if (event.target && event.target.tagName == 'BUTTON') {
		console.log('!');
	}
	// console.dir(event.target);
});

const btns = document.createElement('button');
btns.classList.add('red');
document.body.append(btns);
wrapper.append(btns);
