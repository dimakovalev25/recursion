'use strict';

const box = document.getElementById('bot');
const	btns = document.getElementsByTagName('button');
const	circles = document.getElementsByClassName('circle');
const	hearts = document.querySelectorAll('.heart');
const	oneHeart = document.querySelector('.heart');
const	wrapper = document.querySelector('.wrapper');


// box.style.backgroundColor = 'green';	
// circles.style.width = '500px';	

circles[1].style.backgroundColor = 'red';	
circles[1].style.backgroundColor = 'red';	
circles[2].style.backgroundColor = 'green';	
btns[1].style.borderRadius = '100%';
btns[1].style.cssText = 'background-color: blue; width: 500px';

for( let i = 0; i < hearts.length; i++) {
	hearts[i].style.backgroundColor = 'gold';	
}

hearts.forEach(item => {
	item.style.backgroundColor = 'gold';	/*   перебор всех элементов и задание им свойств! */
});


const div = document.createElement('div'); /*  создание внутри js */
div.classList.add('black'); 
// document.body.append(div);  /*  добавляем в наш боди наш див! */
// document.querySelector('.wrapper').append(div); /* добавляем в наш боди наш див! */
// wrapper.prepend(div); /* ставить в начало! */
hearts[0].before(div);  /* ставим элемент перед */
hearts[0].after(div);   /* ставим элемент после */
circles[0].remove(); /* удаление кружочка! */
hearts[0].replaceWith(circles[0]);  /* замена */
div.innerHTML = '<h1>Hello</h1>'; /*  добавление html  */





const box = document.getElementById('box');




function getDebt(data) {
	if (Array.isArray(data)) {
		let total = 0;
		for (let i = 0; i < data.length; i++) {
			total += data[i].debt;
		}
		console.log(total);
		return [total, data.length];
	} else { 
		let total  = [0, 0];
		for (let subData of Object.values(data)) {
			const subDataArr = getDebt(subData);
			total[0] += subDataArr[0]; 
			total[1] += subDataArr[1]; 
		}
		console.log(total);
		return total;
	}
}
getDebt(mainDebt);