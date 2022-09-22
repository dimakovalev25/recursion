
'use strict';


// const box = document.getElementById('box');
// const	btns = document.getElementsByTagName('button');
// const	circles = document.getElementsByClassName('circle');
// const	hearts = document.querySelectorAll('heart');
// const	oneHeart = document.querySelector('.heart');
// const	wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';

// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// // console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#btn'));
// console.log(document.querySelector('#current'));
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentNode.parentElement);

// console.log(document.querySelector('[data-btn="7"]'));
// console.log(document.querySelector('[data-btn="7"]').nextElementSibling.nextElementSibling);
// console.log(document.querySelector('[data-btn="7"]').nextSibling);

// for (let node of document.body.childNodes) {

// 	if(node.nodeName == '#text'){
// 		continue;
// 	} else {

// 		console.log(node);
// 	}
// }

// function pow(x, n) {
// 	let res = 1;

// 	for(let i = 0; i < n; i++) {
// 		res *=x;
// 	}
// 	return res;
// }


// function pow(x,n) {
// 	if (n === 1) {
// 		return x;
// 	} else {
// 		return x * pow(x, n-1);
// 	}
// }

// console.log(pow(2,1));
// console.log(pow(2,18));
// console.log(pow(2,2));
// pow(2,2);
// pow(2,3);
// pow(2,4);
// pow(2,7);



let students = {
	js: [{
		name: 'jo',
		progress: 100 
	}, {
		name: 'ivan',
		progress: 60 
	}], 

	html: {
		basic: [{
			name: 'pet',
			progress: 20 
		}, {
			name: 'ann',
			progress: 18 
		}],

		pro: [{
			name: 'sam',
			progress: 10 
		}]
	}
};

// function getTotalProgress(data) {
// 	let total = 0;
// 	let students = 0;

// 	for (let course of Object.values(data)) {
// 		if (Array.isArray(course)) {
// 			// console.log(course[0]);
// 			students += course.length;
			
// 			for (let i = 0; i < course.length; i++) {
// 				// console.log(course[i].name);
// 				total += course[i].progress;
// 			}
// 		} else {

// 				for (let subcourse of Object.values(course)) {

// 				students += subcourse.length;

// 				for (let i = 0; i < subcourse.length; i++) {
// 					total += subcourse[i].progress;
// 				}
// 			}
// 		}
// 	}

// 	return total/students;
// }


// console.log(getTotalProgress(students));

function getTotalProgressRec(data) {
	if (Array.isArray(data)) {
		let total = 0;

		for (let i = 0; i < data.length; i++) {
			total += data[i].progress;
		}

		return [total, data.length];
		
	} else {
		let total = [0, 0];

		for (let subData of Object.values(data)) {
			const subDataArr = getTotalProgressRec(subData);
			total[0] += subDataArr[0];
			total[1] += subDataArr[1];

		}
		return total;
	}
}

const result = getTotalProgressRec(students);

console.log(result[0]/result[1]);