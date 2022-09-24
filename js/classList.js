'use strict';

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// btns[1].classList.add('red', 'fff');
// btns[0].classList.remove('ff', 'blue');
// btns[1].classList.remove('fff', 'bluee');
// btns[2].classList.add('blue');
// // console.log(btns[0].classList);
// if (btns[1].classList.contains('red')) {
// 	console.log('!');
// }

// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.item(0));

// btns[1].addEventListener('click', () => {
// 	if (!btns[1].classList.contains('red')) {
// 		btns[1].classList.add('red');
// 	} else {
// 		btns[1].classList.remove('red');
// 	}
// });

btns[1].addEventListener('click', () => {
	btns[1].classList.toggle('red');
});

wrapper.addEventListener('click', (event) => {
	if(event.target && event.target.tagName === 'BUTTON') {

	}

	// console.dir(event.target);

});


const bt = document.createElement('button');
bt.classList.add('red');
wrapper.append(bt);






















// const btn = document.querySelectorAll('button');
// const wrapper = document.querySelector('.btn-block');


// // console.log(btn[0].classList.length);
// // console.log(btn[1].classList.length);
// // console.log(btn[1].classList.item(0));
// // console.log(btn[1].classList.add('red'));
// // console.log(btn[1].classList.remove('bluee'));
// // console.log(btn[1].classList.toggle('bluee'));

// btn[1].addEventListener('click', () => {
// 	if (!btn[1].classList.contains('red')) {
// 		btn[1].classList.add('red');

// 	} else {
// 		btn[1].classList.remove('red');
// 	}

// });

// btn[0].addEventListener('click', () => {
// 	if (!btn[1].classList.contains('red')) {
// 		btn[1].classList.add('red');

// 	} else {
// 		btn[1].classList.remove('red');
// 	}

// });

// wrapper.addEventListener('click', (event) => {
// 	if (event.target && event.target.tagName == 'BUTTON') {
// 		console.log('!');
// 	}
// 	// console.dir(event.target);
// });

// const btns = document.createElement('button');
// btns.classList.add('red');
// document.body.append(btns);
// wrapper.append(btns);
