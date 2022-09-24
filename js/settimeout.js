
// const timer = setTimeout(function() {
// 	console.log("!");
// }, 1000);

// const tim = setTimeout((text) => {
// 	console.log(text);
// }, 1000, 'hello!!!');



// function logger() {
// 	console.log('logger');
//  setTimeout(logger, 1000);
// 	clearInterval(ti);
// }



// const btn = document.querySelector('.btn-block');
// let ti;
// let i = 0;


// btn.addEventListener('click', () => {
// 	// ti = setTimeout(logger, 1000);
// 	ti = setInterval(logger, 1000);
// });

// function logger() {
// 	if (i === 3) {
// 		clearInterval(ti);
// 	}
// 	console.log('logger');
// 	i++;
// }



let id = setTimeout(function log(){
	console.log("2");
	id = setTimeout(log, 500);

}, 500);





















// const timerId = setTimeout(function(){
// 	console.log("!");
// }, 1500);


// const timerId = setTimeout(function(text){
// 	console.log(text);
// }, 1500, "RR");

// const btn = document.querySelector('.btn-block');

// let timer;

// btn.addEventListener('click', () => {
// 	timer = setTimeout(logger, 1499);
// });


// function logger () {
// 	console.log('R');
// }



