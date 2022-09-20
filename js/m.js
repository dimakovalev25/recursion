
// function pow(x,n) {
// 	let result = 1;
// 	for (let i = 0; i < n; i++) {
// 		result *= x;
// 		console.log(result);
// 	}
	// 	console.log(result);
// }
// pow(2, 3);
// pow(2, 2);

// function pow(x,n) {
// 	if( n === 1) {
// 		return x;
// 	} else {
// 		return	x * pow(x, n - 1);
// 	}
// }
// console.log(pow(2, 40));
// console.log(pow(2, 4));
// pow(2, 3);


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

function getTotalProgress(data) {
	let total = 0;
	let students = 0;

	


	return total / students;
}

console.log(getTotalProgress(students));