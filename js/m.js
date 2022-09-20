
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


// function getTotalProgress(data) {
// 	let total = 0;
// 	let students = 0;
	
// 	for (let course of Object.values(data)) {
// 		if (Array.isArray(course)) {
// 			students += course.length;
			
// 			for (let i = 0; i < course.length; i++) {
// 				total += course[i].progress;
// 			}
// 		} else {
// 			for (let subcourse of Object.values(course)) {
// 				students += subcourse.length;
				
// 				for (let i = 0; i < subcourse.length; i++) {
// 					total += subcourse[i].progress;
// 				}
// 			}
// 		}
// 	}
// 	return total / students;
// }

// console.log(getTotalProgress(students));



function getTotalProgressRec (data) {

	if (Array.isArray(data)) {
		let total = 0;
				for (let i = 0; i < data.length; i++) {
			total += data[i].progress;
		}
		return [total, data.length];

	} else {

		let total = [0, 0];
		for (let subdata of Object.values(data)) {
			const subDataArr = getTotalProgressRec(subdata);
			total[0] += subDataArr[0]; 
			total[1] += subDataArr[1]; 
		}
		return total;
	}
}

const res = getTotalProgressRec(students);
console.log(res[0]/res[1]);