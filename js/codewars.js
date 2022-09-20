function htmlspecialchars(formData) {
	let str = '';
	str = formData.replace(/</g, '&lt;').replace(/>/g, '&gt;');
	str = str.replace(/"/g, '&quot;').replace(/&/g, '&amp;');
	// console.log(str);
	return (str);
}

htmlspecialchars('<<');
htmlspecialchars("<h2>Hello World</h2>");

// alert( '11-31-56'.replace( /-/g, ":" ))  // 11:31:56





// assert.property("", "isUpperCase", 'Must define the prototype isUpperCase')
//     assert.strictEqual('c'.isUpperCase(), false, 'c is not upper case');
//     assert.strictEqual('C'.isUpperCase(), true, 'C is upper case');
//     assert.strictEqual('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
//     assert.strictEqual('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
//     assert.strictEqual('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');


const str = "pokVRPOVkw439ujgIOOPR";
const str2 = "qwerty34аujikkjhg555fdcvxbbnmasdf";

String.prototype.isUpperCase = function () {
	function check(str) {
		return !!str.localeCompare(str.toLowerCase());
	}
	console.log(check(str));
	console.log(check(str2));
};
String.prototype.isUpperCase();






// const str = "pokVRPOVkw439ujgIOOPR";
// const str2 = "qwerty34аujikkjhg555fdcvxbbnmasdf";

// function checkContainsUppercaseLetters(str) {
//   return !!str.localeCompare(str.toLowerCase());
// }

// const str = "pokVRPOVkw439ujgIOOPR";
// const str2 = "qwerty34аujikkjhg555fdcvxbbnmasdf";




// Test.assertEquals(checkForFactor(653,7), false)
// Test.assertEquals(checkForFactor(2453,5), false)
// Test.assertEquals(checkForFactor(63,7), true)
// Test.assertEquals(checkForFactor(2450,5), true)


function checkForFactor(base, factor) {
	if (base % factor == 0) {
		console.log(true);
		return true;
	} else {
		console.log(false);
		return false;
	}
}
checkForFactor(63, 7);
checkForFactor(2450, 5);
checkForFactor(653, 7);


// assert.strictEqual(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
// args = [78,56,232,12,8];

// findSmallestInt([78,56,232,12,8]);
// var args = [78,56,232,12,8];

function findSmallestInt(args) {
	console.log(Math.min(...args));
	// return Math.min(...args);
}
findSmallestInt([78, 56, 232, 12, 8]);






// Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
// Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
// Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")


function longest(s1, s2) {
	return (Array.from(new Set(s1 + s2)).sort()).join('');
}
longest("aretheyhere", "yestheyarehere");



// let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
// let expected = [8, -50];

function countPositivesSumNegatives(input) {
	if (input.length < 0) {
		console.log([]);
		return [];
	}

	for (let value in input) {
		if (value == null) {
			return [];
		}
	}

	let res = [];
	let count = 0;
	let neg = 0;

	for (let i = 0; i < input.length; i++) {
		if (input[i] > 0) {
			count++;
		} if (input[i] < 0) {
			console.log(neg);
			neg += input[i];
		}
	}

	res.push(count);
	res.push(neg);
	console.log(res);

}
countPositivesSumNegatives([null, 1]);
countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]);




// assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
// assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano'); 
// assert.strictEqual(high('take me to semynak'), 'semynak');   
// assert.strictEqual(high('aa b'), 'aa');
// assert.strictEqual(high('b aa'), 'b');

// function high(x){
// 	let arr = [];
// 	arr = x.split(' ');
// 	console.log(arr);

// 	for (let i = 0; i < arr.length; i++) {

// 	}

// }
// high('man i need a taxi up to ubud');




// assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
// assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
// assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
// assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);


function findUniq(arr) {
	console.log(Number(arr.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))));
}
findUniq([1, 1, 1, 2, 1, 1]);





function findUniq(arr) {

	arr.sort((a, b) => a - b);
	console.log(arr);
	console.log(arr[0] == arr[1] ? arr.pop() : arr[0]);

}
findUniq([1, 1, 1, 2, 1, 1]);

// opis.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))







// Test.assertEquals(areaOrPerimeter(4 , 4) , 16);
// Test.assertEquals(areaOrPerimeter(6 , 10) , 32);

const areaOrPerimeter = function (l, w) {

	if (l == w) {
		return l * w;
	} else {
		return (l + w) * 2;
	}
};
areaOrPerimeter(4, 4);
areaOrPerimeter(6, 10);


// assert.strictEqual(lovefunc(1,4), true)
// assert.strictEqual(lovefunc(2,2), false)
// assert.strictEqual(lovefunc(0,1), true)

function lovefunc(flower1, flower2) {
	const a = flower1;
	const b = flower2;

	if ((a + b) % 2 == 0) {
		return false;
	} else {
		return true;
	}
}
lovefunc(1, 4);
lovefunc(2, 2);


// Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
// Test.assertEquals(doubleChar("1337"), "11333377");
// Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");

function doubleChar(str) {
	let res = str.split("").map(c => c + c);
	console.log(res.join(''));
}
doubleChar('Adidas');


const doubleChar = (str) => str.split("").map(c => c + c).join("");

function doubleChar(str) {
	return str.replace(/(.)/g, "$1$1")
}



// assert.strictEqual(hero(10, 5), true);
// assert.strictEqual(hero(7, 4), false);

function hero(bullets, dragons) {
	let a = bullets;
	let b = dragons;

	if ((b * 2) <= a) {
		return true;
	} if ((b * 2) > a) {
		return true;
	}

}
hero(10, 5);

function hero(bullets, dragons) {
	return bullets >= dragons * 2
}


// [[1,2,3],          4,     [0,2]],
// [[1234,5678,9012], 14690, [1,2]],
// [[2,2,3],          4,     [0,1]],
// [[2,3,1],          4,     [1,2]]

function twoSum(numbers, target) {

	let res = [];
	for (let i = 0; i < numbers.length; i++) {
		if ((numbers[i] + numbers[n]) == target) {
			let a = numbers[i];
			let b = numbers[i + 1];

			res.push(numbers.findIndex(i => i == a));
			res.push(numbers.findIndex(i => i == b));
			console.log(res);

			return res;
		}
	}
}
twoSum([1, 2, 3], 4);
twoSum([3, 1, 1, 7], 4);
twoSum([1234, 5678, 9012], 14690);
twoSum([1, 1, 7, 3], 10);
twoSum([0, 0, 0, 0, 4], 4);




function twoSum(numbers, target) {

	let res = [];
	let a;
	let b;
	for (let i = 0; i < numbers.length; i++) {
		if ((numbers[i] + numbers[n]) == target) {

			a = numbers[i];
			b = numbers[n];
			n--;

			// console.log(numbers[i] + numbers[n]);

			res.push(numbers.findIndex(x => x == a));
			res.push(numbers.findIndex(x => x == b));
			console.log(res);

			return res;
		}
	}
}
twoSum([0, 2, 1], 3);
twoSum([3, 2, 1], 4);
twoSum([1234, 5678, 9012], 14690);
twoSum([3, 1, 1, 7], 4);
twoSum([1234, 5678, 9012], 14690);
twoSum([1, 1, 7, 3], 10);
twoSum([0, 0, 0, 0, 4], 4);



Object.freeze(MrFreeze);




// assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
// assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
// assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
// assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");


function sumTwoSmallestNumbers(numbers) {

	let arr = [];
	arr = numbers.sort((a, b) => a - b);
	console.log(arr);

	let result = arr[0] + arr[1];
	console.log(result);

}

sumTwoSmallestNumbers([15, 28, 4, 2, 43]);
sumTwoSmallestNumbers([23, 71, 33, 82, 1]);



// assert.strictEqual(smash(["hello", "world"]), "hello world");
// assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");

function smash(words) {

	console.log(words.join(' '));


}

smash(["hello", "world"]);




// Test.assertEquals(solution('abcde', 'cde'), true)
// Test.assertEquals(solution('abcde', 'abc'), false)

function solution(str, ending) {

	if (ending.length === 0) {
		return true;
	}

	let i = -ending.length;
	console.log(str.slice(i));

	let start = str.slice(i);

	if (start === ending) {
		console.log(true);
		return true;
	} else {
		console.log(false);
		return false;
	}

}
solution('abcde', 'cde');
solution('abcde', '');



function solution(str, ending) {
	return str.endsWith(ending);
}




// Test.assertEquals(validatePIN("12"),false, "Wrong output for '12'")
// Test.assertEquals(validatePIN("123"),false, "Wrong output for '123'")
// Test.assertEquals(validatePIN("12345"),false, "Wrong output for '12345'")
// Test.assertEquals(validatePIN("1234567"),false, "Wrong output for '1234567'")
// Test.assertEquals(validatePIN("-1234"),false, "Wrong output for '-1234'")
// Test.assertEquals(validatePIN("1.234"),false, "Wrong output for '1.234'")
// Test.assertEquals(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
// Test.assertEquals(validatePIN("00000000"),false, "Wrong output for '00000000'")



function validatePIN(pin) {

	if (pin.length < 4) {
		return false;
	}

	let res = [];

	for (let i = 0; i < pin.length; i++) {
		if (pin[i] === '\t' || pin[i] === ' ' || pin[i] == (/[a-z]/) || isNaN(pin[i])) {
			console.log(false);
			// return false;
		} else {
			res.push(pin[i]);
		}
	}
	console.log(res);

	if (res.length === 4 || res.length === 6) {
		console.log(true);
	} else {
	}
}

validatePIN('111');
validatePIN('1.2');


function validatePIN(pin) {
	return /^(\d{4}|\d{6})$/.test(pin);
}


// Test.assertEquals(contamination("abc","z"), "zzz")
// Test.assertEquals(contamination("","z"), "")
// Test.assertEquals(contamination("abc",""), "")
// Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
function contamination(text, char) {

	let res = [];

	for (let i = 0; i < text.length; i++) {
		res.push(char);
	}

	console.log(res.join(''));


}
contamination("abc", "z");
contamination("", "z");
contamination("zzz", "");


function contamination(text, char) {
	return char.repeat(text.length)
}


// assert.strictEqual(nameShuffler('john McClane'),'McClane john');
// assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')

function nameShuffler(str) {
	let res = [];

	res = str.split(' ').reverse().join(' ');

	console.log(res);
}

nameShuffler('john McClane');



// Test.assertEquals(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0

function points(games) {

	let res = 0;

	for (let i = 0; i < games.length; i++) {
		if (games[i][0] > games[i][2]) {
			res += 3;
		} if (games[i][0] === games[i][2]) {
			res += 1;
		} else {
			continue;
		}
	}
	console.log(res);
}

points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]);
points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "6:3", "2:4", "3:4"]);


const points = games => games.reduce((output, current) => {
	return output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0)

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }



// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


function getSum(a, b) {

	let res = 0;
	let A;
	let B;

	if (a === b) {
		return a;

	} if (a > b) {
		A = b;
		B = a;

	} if (a < b) {
		A = a;
		B = b;
	}

	for (let i = A; i <= B; i++) {
		res += i;
	}
	console.log(res);
}

getSum(39, 334);
getSum(-1, 2);
getSum(-1, 3);


const GetSum = (a, b) => {
	let min = Math.min(a, b),
		max = Math.max(a, b);
	return (max - min + 1) * (min + max) / 2;
}





// assert.strictEqual(enough(10, 5, 5), 0);
// assert.strictEqual(enough(100, 60, 50), 10);
// assert.strictEqual(enough(20, 5, 5), 0);


function enough(cap, on, wait) {

	let a = cap - on - wait;

	if (a < 0) {
		console.log(-a);
	} else {
		console.log(0);
	}

}
enough(10, 5, 5);
enough(100, 60, 50);



// assert.strictEqual(expressionMatter(2, 1, 1), 4);
// assert.strictEqual(expressionMatter(1, 1, 1), 3);
// assert.strictEqual(expressionMatter(1, 2, 3), 9);
// assert.strictEqual(expressionMatter(1, 3, 1), 5);
// assert.strictEqual(expressionMatter(2, 2, 2), 8);

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9

function expressionMatter(a, b, c) {

	let res = [];
	res.push(a*(b+c));
	res.push(a*b*c);
	res.push(a+b*c);
	res.push((a+b)*c);
	res.push((a+b)+c);

	console.log(Math.max(...res));
	console.log(res);
}
expressionMatter(2, 10, 3); /* 60); */
expressionMatter(1, 8, 3); /* 27); */
expressionMatter(9, 7, 2); /* 126); */
expressionMatter(1, 1, 10); /* 20); */
expressionMatter(9, 1, 1);/*  18); */
expressionMatter(10, 5, 6); /* 300); */
expressionMatter(1, 10, 1); /* 12) */
expressionMatter(5, 6, 1);
expressionMatter(3, 5, 7);
expressionMatter(1, 3, 1);



// assert.strictEqual(squareSum([1,2]), 5);
// assert.strictEqual(squareSum([0, 3, 4, 5]), 50);

function squareSum(numbers){

	// (numbers[0] * 2) + (numbers[1] * 2) + (numbers[0] * 2)
console.log((numbers[0] * numbers[0]) + (numbers[1] * numbers[1]) + (numbers[2] * numbers[2]));
}
squareSum([1,2,2]);

// Math.pow(0, 2)

function squareSum(numbers){

	let res = 0;g
	for (let i = 0; i < numbers.length; i++) {
		res += Math.pow(numbers[i], 2);
		console.log(res);
	}
}
squareSum([-19,15,-17,3,17,-20,3,-2,9]);
squareSum([1,2,2]);


// Test.assertEquals(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
// Test.assertEquals(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
// Test.assertEquals(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.")

function greet(language) {
	let obj = {
		english: 'Welcome',
		czech: 'Vitejte',
		danish: 'Velkomst',
		dutch: 'Welkom',
		estonian: 'Tere tulemast',
		finnish: 'Tervetuloa',
		flemish: 'Welgekomen',
		french: 'Bienvenue',
		german: 'Willkommen',
		irish: 'Failte',
		italian: 'Benvenuto',
		latvian: 'Gaidits',
		lithuanian: 'Laukiamas',
		polish: 'Witamy',
		spanish: 'Bienvenido',
		swedish: 'Valkommen',
		welsh: 'Croeso'
	};

		
		if (typeof(language) === 'string' || language === "english" || language === "czech" || language === "danish" || language === "dutch" || language === "estonian" || language === "finnish" || language === "flemish" || language === "french" || language === "german" || language === "irish" || language === "italian" || language === "latvian" || language === "lithuanian" || language === "lithuanian" || language === "polish" || language === "spanish" || language === "swedish" || language === "welsh") {
			return obj[language];
		} else {
			return 'Welcome';
		}
}
greet('welsh');
greet('weh');
greet(1);
greet('english');


function greet(lang) { 
	console.log(langs[lang]||langs['english']);
  // return langs[lang]||langs['english'];
}

var langs = {
'english': 'Welcome',
'czech': 'Vitejte',
'danish': 'Velkomst',
'dutch': 'Welkom',
'estonian': 'Tere tulemast',
'finnish': 'Tervetuloa',
'flemish': 'Welgekomen',
'french': 'Bienvenue',
'german': 'Willkommen',
'irish': 'Failte',
'italian': 'Benvenuto',
'latvian': 'Gaidits',
'lithuanian': 'Laukiamas',
'polish': 'Witamy',
'spanish': 'Bienvenido',
'swedish': 'Valkommen',
'welsh': 'Croeso'
};
greet('welsh');
greet('weh');
greet(1);
greet('english');



// assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
// assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
// assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
// assert.strictEqual(oddOrEven([0, -1, 2]), 'odd')
// assert.strictEqual(oddOrEven([0, 1, -4]), 'odd')


function oddOrEven(array) {
	let arr = array;
	if (array.length === 0) {
		arr = [0];
	}

	if ((arr.reduce((a, b) => a + b)) % 2 === 0) {
		console.log('even');
		return 'even';
	}  else {
		console.log('odd');
		return 'odd';
	}


}
oddOrEven([0, 1, 5]);
oddOrEven([0, -1, 2]);
oddOrEven([1023, 1, 2]);


// assert.equal(domainName("http://google.com"), "google");
// assert.equal(domainName("http://google.co.jp"), "google");
// assert.equal(domainName("www.xakep.ru"), "xakep");
// assert.equal(domainName("https://youtube.com"), "youtube");

function domainName(url){
  let res = [];
	let result = [];
	let tik = [];
	let tak = [];
	res = url.split('.');
	result = url.split('/');
	tak = url.split('.');
	console.log(res);
	// console.log(result);
	if (res[0] === 'www' || res[0] === 'https://www') {
		// console.log(res);
		console.log(res[1]);	
		return res[1];
	} if (result[0] === 'http:' || result[0] === 'https:') {
		console.log(result);
		tik = result[2].split('.');
		console.log(tik);
		console.log(tik[0]);
		// return tik[0];
	} if (result[0] === 'http:' || result[0] === 'https:') {
	
	} else {
		console.log(tak);
		// return tak[0];
	}
}


function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
}


domainName("https://www.wpxt39wrebgvq201rymxma57w.io/users");
domainName("https://qk4gf2mh.io/warez/");
domainName("24-j4jneg2my.fr");
domainName("http://oyc6py3.de/warez/");
domainName("http://google.com");
domainName("http://google.co.jp");
domainName("https://8i9cdib8mvar9yxj5z1h3f7-h5e4qz.co.uk/index.php");
domainName("https://3vtwxr.tv/default.html");
domainName(" g5qvuxqisbfsf6dkkxm2lv.biz/index.php");
domainName("www.xakep.ru");




// Test.assertEquals(expandedForm(12), '10 + 2');
// Test.assertEquals(expandedForm(42), '40 + 2');
// Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');

function expandedForm(num) {

	let res = num + '';
	let result = [];
	let rez = [];

		for (let i = 0; i < res.length; i++) {
			if(res[i] > 0) {
				result.push(res.slice(i, ));
			}
			// console.log(result);
		}
	
		for (let i = 0; i < result.length; i++) {
			if (result[i+1] === undefined) {
				rez.push(result[i] - 0);

			} else {
				rez.push(result[i] - result[i + 1]);

			}
			console.log(rez);
		}
		return rez.join(' + ');
	}
	
	expandedForm(703040);
	expandedForm(70304);
	expandedForm(70304000);
	expandedForm(703044487);


expandedForm(70304014);

// console.log(`0`);

// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");

function expandedForm(num) {
	let res;
	res = num.toString().split('').reverse();
	
	
	res = res.map( (a, i) => a * Math.pow(10, i));
	res = res.filter(a => a > 0).reverse();
	console.log(res);

}
	
	expandedForm(703040);


	// assert.strictEqual(calculateYears(1000, 0.05, 0.18, 1100), 3)
	// assert.strictEqual(calculateYears(1000,0.01625,0.18,1200), 14)

	function calculateYears(principal, interest, tax, desired) {

		let profit;
		let cleanProfit;

		
		for (let i = 0; i < 250; i ++) {	
			if (principal > desired ) {
				console.log(i);
				return (i);
			}
			
			profit = (principal * (interest)); 
			cleanProfit = profit - (profit * tax); 
			principal = principal + cleanProfit;
			console.log(principal);


	}
}
calculateYears(589073, 0.01, 0.2, 1660421);
calculateYears(1000, 0.05, 0.18, 1100);
calculateYears(11590133, 0.06, 0.17, 11932317);
calculateYears(1000,0.01625,0.18,1200); /* 14) */


function calculateYears(principal, interest, tax, desired) {
	// your code
	var years = 0;
	while(principal < desired){
		principal += (principal * interest) * (1 - tax);
		years++;
	}
	return years;
}

// Let P be the Principal = 1000.00      
// Let I be the Interest Rate = 0.05      
// Let T be the Tax Rate = 0.18      
// Let D be the Desired Sum = 1100.00
// After 1st Year -->
// P = 1041.00
// After 2nd Year -->
// P = 1083.86
// After 3rd Year -->
// P = 1128.30




// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// bmi(80, 1.80), "Normal");

function bmi(weight, height) {

	let caf = weight / (height * height);

	if (caf <= 18.5 ) {
		return "Underweight";
	} if (caf <= 25 ) {
		return "Normal";
	} if (caf <= 30 ) {
		return "Overweight";
	} else if (caf > 30) {
		return "Obese";
	}
}
bmi(80, 1.80);
bmi(90, 1.80);
bmi(100, 1.80);
bmi(180, 1.80);

const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";




																		
// // function testFunc(){

// // 	const x = 5;
// // 	const y = 5;
// // 	console.log(x+y);
// // } 

// // function hello(){
// // 	// testFunc();
// // 	console.log('hello!');

// // 	function test2(){
// // 		console.log('test2');
// // 	}
// // 	test2();
// // }

// // hello();



// // function unixTime() {
// // 	let time = Math.floor(new Date().getTime());
// // 	console.log(time);
// // }

// // unixTime();

// let min = 100;
// let max = 200;

// function randomInt() {

// 	let rand = Math.floor(min + Math.random() * (max + 1 - min));
// 	console.log(rand);
// }
// randomInt();

// let c=9;
// function count(){
// 	c++;
// 	console.log(c);
// }
// count();
// count();
// count();
// count();






// // twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
// //     assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 

// function twoSort(s) {
// 	let res = s.sort();
// 	res = res[0].split('');
// 	res = res.join('***');
// 	return res;
// }
// twoSort(["over","bitcoin", "take",  "the", "world", "maybe", "who", "knows", "perhaps"]);


// function greet (name, owner) {
// 	if (name === 'Daniel' && owner === 'Daniel') {
// 		return 'Hello boss';
// 	} else {
// 		return 'Hello guest';
// 	}
// }
// greet ('Daniel', 'Daniel');

// Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
// Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')



// // assert.strictEqual(correct("L0ND0N"),"LONDON");
// // assert.strictEqual(correct("DUBL1N"),"DUBLIN");
// // assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
// // assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
// // assert.strictEqual(correct("PAR15"),"PARIS");

// function correct(string) {
// 	string = string.replace(/0/g, 'O');
// 	string = string.replace(/1/g, 'I');
// 	string = string.replace(/5/g, 'S');

// 	return string;
// }
// correct("L0ND0N");
// correct("DUBL1N");
// correct("51NGAP0RE");
// correct("BUDAPE5T");
// correct("PAR15");


// // it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
// // it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
// // it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));

// function isPalindrome(x) {

// 	x = x.toLowerCase();
// 	let q;
// 	q = x.split('')
// 				.reverse()
// 				.join('')
// 				.toLowerCase();

// 	if (q == x) {
// 		console.log('+');
// 		return true;
// 	} else {
// 		console.log('-');
// 		return false;
// 	}
// 	console.log(q);
// }
// isPalindrome("Abba");
// isPalindrome("");



// // assert.strictEqual(updateLight("green"), "yellow");
// // assert.strictEqual(updateLight("yellow"), "red");
// // assert.strictEqual(updateLight("red"), "green");

// function updateLight(current) {

// 	if (current === "green") {
// 		return "yellow";
// 	} if (current === "yellow") {
// 		return "red";
// 	} else {
// 		return "green";
// 	}
// }

// updateLight("green");
// updateLight("yellow");
// updateLight("red");

// const updateLight = current => ({
//   green: 'yellow',
//   yellow: 'red',
//   red: 'green',
// })[current]






// // assert.deepEqual(count("aba"), { a: 2, b: 1 }); 
// // assert.deepEqual(count(""), {});    

// function count (string) {  

// 	let arr = [];
// 	arr = string.split('');

// 	let res = {};

// 	for (let i = 0; i < arr.length; i++) {
// 		const current = arr[i];

// 		if (res[current]) {
// 			res[current]++;
// 		} else {
// 			res[current] = 1;
// 		}
// 	}
// 	console.log(res);
// 	return res;
// }

// count("");
// count("aba");
// count("abagkrgrkhgrukghghghghhgg");
// count("aba");


// function count (string) {  
//   var count = {};
//   string.split('').forEach(function(s) {
//      count[s] ? count[s]++ : count[s] = 1;
//   });
//   return count;
// }




// // Test.assertEquals(getDivisorsCnt(10) , 4);
// // Test.assertEquals(getDivisorsCnt(11) , 2);
// // Test.assertEquals(getDivisorsCnt(54) , 8);

// function getDivisorsCnt(n){

// 	let count = 0;

// 	for (let i = 0; i <= 500000; i++) {
// 		if (n % i === 0) {
// 			count++;
// 		}
// 	}
// 	console.log(count);
// }

// getDivisorsCnt(10);
// getDivisorsCnt(11);
// getDivisorsCnt(54);



// Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
// Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
// Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");

function encrypt(text, n) {
	let res = [];
	res = text.split('');
	
	if (n === 0) {
	console.log(text);
	return text;
	}
	
	let honest = [];
	let odd = [];
	let arr = [];
	
	function encr(a) {
	for (let i = 0; i < a.length; i++) {
	if (i % 2 === 0) {
	honest.push(a[i]);
	} if (i % 2 !== 0) {
	odd.push(a[i]);
	console.log(arr);
	}
	}
	}
	
	encr(res);
	arr = [...odd, ...honest];
	encr(arr);
	// encr(arr);
	// encr(A);
	// encr(res);
	// console.log(arr);
	// console.log(res);
	
	let result = arr.join('');
	console.log(result);
	
	}
	
	encrypt("0123", 2);
	encrypt("This is a test!", 2);
	encrypt("This is a test!", 1);
	encrypt("This is a test!", 0);
	encrypt("This is a test!", 4);
	
	
	// function decrypt(encryptedText, n) {
	
	
	
	
	
	
	
	
	
	// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
	
	
	function encrypt(arr, n) {
	let honest = [];
	let odd = [];
	let res = [];
	let A = [];
	
	function conv(a) {
	for (let i = 0; i < a.length; i++) {
	if (i % 2 === 0) {
	honest.push(a[i]);
	} else {
	odd.push(a[i]);
	
	}
	}
	res = [...odd, ...honest];
	A = res;
	
	}
	conv(arr);
	conv(A);
	
	// for (let k = 0; k < n; k++) {
	// 	conv(res);
	// }
	
	
	console.log(A);
	// console.log(arr);
	// console.log(res);
	}
	
	encrypt([0, 1, 2, 3, 4], 2);
	encrypt([3, 2, 1, 0, 4], 2);
	encrypt([1, 3, 0, 2, 4], 2);
	
	
	
	// assert.strictEqual( sumArray(null)                     , 0 );
	// assert.strictEqual( sumArray([ ])                      , 0 );
	// assert.strictEqual( sumArray([ 3 ])                    , 0 );
	// assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
	// assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
	// assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
	// assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
	// assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
	
	
	function sumArray(array) {
	
	for (let value of array) {
	if (value == null || value == undefined) {
		console.log(0);
		return 0;
	}
	}
	
	if (array.length < 1) {
	return 0;
	}
	
	
	let result = [];
	let res = [];
	res = array.sort((a, b) => a - b);
	
	for (let i = 1; i < res.length - 1; i++) {
	result.push(res[i]);
	
	}
	result = result.reduce((a, b) => a+b, 0);
	console.log(result);
	
	}
	sumArray([ -6, -20, -1, -10, -12 ]);
	sumArray([ -6, null, 20, -1, 10, -12 ]);
	sumArray([ 3 ]); 
	
	
	
	// assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
	// assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
	// assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
	
	function findShort(s){
	
	let res = [];
	let result = [];
	
	res = s.split(' ');
	console.log(res);
	
	for (let value of res) {
	result.push(value.length);
	}
	
	result = result.sort((a, b) => a-b);
	console.log(result);
	return result[0];
	
	}
	
	findShort("Let's travel abroad shall we");
	
	function findShort(s){
	return Math.min.apply(null, s.split(' ').map(w => w.length));
	}
	
	
	
	
	
	
	
	
	
	
	
	// assert.strictEqual(quarterOf(3), 1)
	// assert.strictEqual(quarterOf(8), 3)
	// assert.strictEqual(quarterOf(11), 4)
	
		const quarterOf = (month) => {
	
			const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
			return arr[month-1];
	
		};
		quarterOf(3);
		quarterOf(8);
		quarterOf(11);
	
	
	
		function getAge(inputString){
		
			if (inputString === 1) {
				console.log(inputString + ' year old');
				return (inputString + " year old");
			} if (inputString > 1) {
				console.log(inputString + ' years old');
				return (inputString + " years old");
			}
			
		}
		getAge(7);
	
	
	
	
	
		// Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
	
		function sortByLength (array) {
	
			let res = [];
			
			let n = 1;
			for (let value of array) {
				if(value.length === n) {
					res.push(value);
					n += 1;
					console.log(res);
				} else {
					continue;
				}
			}
	
	
	
		}
		sortByLength(["Beg", "Life", "I", "To"]);
	
	
		function sortByLength (array) {
	
			array.sort(function (a, b) {
				if (a.length < b.length) {
						return -1;
				}
		
				if (a.length > b.length) {
						return 1;
				}
		
				return 0;
		});
	
		console.log(array);
		}
		sortByLength(["Beg", "Life", "I", "To"]);
	
	
	
	
	
	
	
	
		// assert.strictEqual(sumStr("4","5"), "9");
		// assert.strictEqual(sumStr("34","5"), "39");
	
		function sumStr(a,b) {
		
		a = Number(a);
		b = Number(b);
		console.log(a + b + "");
		return a + b + ""; 
	
		}
	
		sumStr('4', '5');
		sumStr('4', '');
	
	
		// doTest([2.1, 3.2, 1.4], 0);
		// doTest([5.9, 10.4, 14.2], 1);
	
		function gimme (tri) {
	
			let arr = [0, 1, 2];
			
			let res = [];
			for (let value of tri) {
				res.push(value);
	
			}
			res = res.sort((a,b) => a-b );
			// console.log(res);
			// console.log(tri);
	
			if (res[1] == tri[1]) {
				console.log(arr[1]);
				return 1;
			} if (res[1] == tri[0]) {
				console.log(arr[0]);
				return 0;
			} if (res[1] === tri[2]) {
				console.log(arr[2]);
				return 2;
			}
		}
	
		// [ 1, 2!!, 3 ]res
		gimme ([2, 1, 3]);
		gimme ([2, 3, 1]);
		gimme ([3, 2, 1]);
		gimme ([3, 1, 2]);
		gimme ([1, 2, 3]);
		gimme ([1, 3, 2]);
	
		const gimme = function (arr) {
			return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
		};
	
	
		// 20  8  5    19  21  14  19  5  20    19  5  20  19    1  20    20  23  5  12  22  5    15      3  12  15  3  11   
		// '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
	
	
		function alphabetPosition(text) {
			text = text.toLowerCase();
			let result = text.split('');
			let res = [];
			for (let i = 0; i < result.length; i++) {
				switch (result[i]) {
					case 'a':
						res.push('1');
						break;
					case 'b':
						res.push('2');
						break;
					case 'c':
						res.push('3');
						break;
					case 'd':
						res.push('4');
						break;
					case 'e':
						res.push('5');
						break;
					case 'f':
						res.push('6');
						break;
					case 'g':
						res.push('7');
						break;
					case 'h':
						res.push('8');
						break;
					case 'i':
						res.push('9');
						break;
					case 'j':
						res.push('10');
						break;
					case 'k':
						res.push('11');
						break;
					case 'l':
						res.push('12');
						break;
					case 'm':
						res.push('13');
						break;
					case 'n':
						res.push("14");
						break;
					case 'o':
						res.push('15');
						break;
					case 'p':
						res.push('16');
						break;
					case 'q':
						res.push('17');
						break;
					case 'r':
						res.push('18');
						break;
					case 's':
						res.push('19');
						break;
					case 't':
						res.push('20');
						break;
					case 'u':
						res.push('21');
						break;
					case 'v':
						res.push('22');
						break;
					case 'w':
						res.push('23');
						break;
					case 'x':
						res.push('24');
						break;
					case 'y':
						res.push('25');
						break;
					case 'z':
						res.push('26');
						break;	
				
					default:
						continue;
				}
			}
			console.log(res.join(' '));
			// return res.join(''); 
		}
		alphabetPosition("fljr0/i_");
	
		
		function alphabetPosition(text) {
			return text
				.toUpperCase()
				.match(/[a-z]/gi)
				.map( (c) => c.charCodeAt() - 64)
				.join(' ');
		}
	
	
		// assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
		// assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
		// assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
		// assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
		// assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
		// assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
	
		function arrayDiff(a, b) {
			if(b.length==0 || a.length==0)
				return a;
			for(let i =0;i<a.length;i++){
				for(let j=0;j<b.length;j++){
					if(a[i]==b[j]){
						a.splice(i,1);
						i--;
					}
				}
			}
			return a;
		}
		arrayDiff([1,2,2], [2]);
		arrayDiff([1,2,2], [1]);
		arrayDiff([1,2,2], []);
		arrayDiff([1,2,3], [1,2]);
		arrayDiff([1,2], [1]);
		
	
	
	
	
	// 	setAlarm(true, true) -> false
	// setAlarm(false, true) -> false
	// setAlarm(false, false) -> false
	// setAlarm(true, false) -> true
	
	
	function setAlarm(employed, vacation){
		if (employed === true && vacation === false ) {
			return true;
		} else {
			return false;
		}
	
	}
	setAlarm(true, true);
	
	
	// 0    ->   0
	// 2    ->   5
	// 3    ->   5
	// 12   ->   15
	// 21   ->   25
	
	function roundToNext5(n){
	
		for (let i = 0; i < 5; i++) {
			if ((i + n) % 5 === 0) {
				console.log(i+n);
			}
		}
	
	}
	
	roundToNext5(-5);
	roundToNext5(-3);
	roundToNext5(0);
	roundToNext5(12);
	roundToNext5(2);
	
	function roundToNext5(n){
		while(n % 5 !== 0) n++;
		return n;
	}
	
	
	
	
	
	// assert.strictEqual(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
	// assert.strictEqual(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
	// assert.strictEqual(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
	// assert.strictEqual(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");
	
	function arithmetic(a, b, operator){
		if (operator === "add") {
			return a+b;
		} if (operator === "subtract") {
			return a-b;
		} if (operator === "multiply") {
			return a*b;
		} else {
			return a/b;
		}
	
	}
	arithmetic(1, 2, "add");
	arithmetic(8, 2, "subtract");
	arithmetic(5, 2, "multiply");
	arithmetic(8, 2, "divide");
	
	
	
	
	
	
	
	// const first = firstNonConsecutive([1,3,4,6,7,8])
	// assert.strictEqual(first, 6)
	
	function firstNonConsecutive (arr) {
	
	
	
	}
	firstNonConsecutive(1,2,3,4,5,6);
	firstNonConsecutive(-2,-1,1,2,3,4,5,6);
	firstNonConsecutive([0,2,3,4,6,7,8]);
	
	
	
	
	// assert.strictEqual(finalGrade(100, 12), 100);
	// assert.strictEqual(finalGrade(85, 5), 90);
	// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
	// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
	// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
	
	function finalGrade (exam, projects) {
	
		if (exam > 90 && projects > 10) {
			return 100;
		} if (exam > 75 && projects >= 5) {
			return 90;
		} if (exam > 50 && projects >= 2) {
			return 75;
		}
	
	
	}
	finalGrade(100, 12);
	
	
	
	// Test.assertEquals(SeriesSum(1), "1.00")
	// Test.assertEquals(SeriesSum(2), "1.25")
	// Test.assertEquals(SeriesSum(3), "1.39")
	// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
	// Test.assertEquals(SeriesSum(4), "1.49")
	
	
	function SeriesSum(n) {
		let res = 0;
		let fres = 1;
	
		if (n === 0) {
			return 0.00;
		}
	
		for (let i = 0; i < n; i++) {
			res = (res + (1/fres));
			fres +=3;
		}
		return res.toFixed(2);
	}
	SeriesSum(2);
	SeriesSum(0);
	SeriesSum(4);
	
	
	
	
	
	// assert.strictEqual(check([66, 101], 66), true);
	// assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
	// assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
	// assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
	
	function check(a, x) {
	
		let res = [];
	
		for (let value of a) {
			if (value === x) {
				console.log(true);
				return true;
			} else {
				continue;
			}
		}
		return false;
	}
	check(['what', 'a', 'great', 'kata'], 'kat');
	check([101, 45, 75, 105, 99, 107,55], 107);
	
	const check = (a,x) => a.includes(x);
	
	
	
	
	
	
	
	// assert.deepEqual(number([]), [], 'Empty array should return empty array');
	// assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"]
	
	
	
	
	
	var number=function(array){
	
		array = ['k', ...array];
		const obj = Object.assign({}, array);
		delete obj[0];
	
		console.log(obj[1]);
	
		// console.log(obj[0]);
		// console.log(typeof(obj));
	
	};
	number(["a", "b", "c"]);
	
	number([]);
	
	
	
	
	
	var number=function(array){
		let res = [];
		let h = 1;
	
		for (let i = 0; i < array.length; i++) {
			res.push(`${h}:  ${array[i]}`);
			h++;
	
	}
		console.log(res);
	
	};
	number([]);
	number(["a", "b", "c"]);
	
	
	var number = function(array) {
		return array.map(function (line, index) {
			return (index + 1) + ": " + line;
		});
	}
	
	
	
	
	
	
	
	
	
	
	// assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
	// assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
	
	
	function sortArray(array) {
	
		let arr = [];
	
		for (let i = 0; i < array.length; i++) {
			if (array[i] % 2 !== 0) {
				arr.push(array[i]);
			} else {
				continue;
			}
		}
	
		arr= arr.sort((a,b) => a-b);
		console.log(arr);
	
		let k = 0;
		let result = [];
		for (let j = 0; j < array.length; j++) {
			if (array[j] % 2 !== 0) {
				result.push(arr[k]);
				k++;
			} else {
				result.push(array[j]);
			}
		}
	
		console.log(result);
	
	}
	sortArray([5, 3, 1, 8, 0]);
	sortArray([5, 3, 2, 8, 1, 4]);
	
	
	function sortArray(array) {
		const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
		return array.map((x) => x % 2 ? odd.shift() : x);
	}
	
	
	
	
	
	
	
	
	
	// Test.assertEquals(testEven(0), true, "testEven for 0");
	// Test.assertEquals(testEven(0.5), false, "testEven for 0.5");
	// Test.assertEquals(testEven(1), false, "testEven for 1");
	// Test.assertEquals(testEven(2), true, "testEven for 2");
	// Test.assertEquals(testEven(-4), true, "testEven for 2");
	
	function testEven(n) {
	
		if (n % 1 === 0) {
			return false;
		}
	
		if (n % 2 === 0) {
			return true;
		} else {
			return false;
		}
	
	}
	testEven(1);
	testEven(2);
	testEven(0.5);



	// var arr = [1,2,3,4,5,6,7,8,9,10];
// arr=arr.map(function(elem) {
// return elem *= elem;
// });


let resp = [
	{'index':0,
	'isActive':true,
	'age':21,
	'name':"John Grem",
	'gender': 'male',
	'email': "jg@gmail.com",
},
{'index':0,
'isActive':false,
'age':21,
'name':"Johffn Grem",
'gender': 'male',
'email': "jfg@gmail.com",
},
{'index':0,
'isActive':true,
'age':20,
'name':"Jofhn Grem",
'gender': 'male',
'email': "jsssg@gmail.com",
},
];



let arrNew = [];

arrNew = resp.map((elem) => {
	return {
		name: elem.name,
		email: elem.email
	};
});

// console.log(arrNew);






var arr = [1,2,3,4,5,6,7,8,9,10, -8];

arr = arr.filter((elem) => {
	// return elem % 2 === 0; 
	return elem < 0; 
});



arr = resp.filter((elem) => {
	// return elem.isActive;
	return elem.age === 20;
});
console.log(arr);


var arr = [1,2,3,4,5,6,7,8,9,10, -8];

arr = arr.reduce((sum, elem) => {
	return sum += elem;
});

console.log(arr);


var flat = [[1,1,],[2,2,],[3,3]];
flat = flat.reduce((sum, elem) => {
	return sum.concat(elem);
});

console.log(flat);

var res = [];

var friends = [
	{name: 'Anna', books: ['bbb', 'rrrrr']},
	{name: 'Anna', books: ['bbeeeeb', 'eee']},
	{name: 'Anna', books: ['bbqqqqb', 'rqqqqrrrr']},
];

res = friends.reduce((sum, elem) => {
	// return sum.concat(elem.books);
	return [...sum, ...elem.books];
}, ['11']);

console.log(res);



function set() {
	var arr = [];
	// console.log(arguments);
	console.log(arr.concat(['f']));
}

set(['a','b']);



var f = function factorial(n) {
	return n ? n * factorial(n -1) : 1; 
};
var g = f;
f = null;
console.log(g(5));




function rot13(message){
	let result = '';
	result = message.split('');
	
	let res = [];

	for (let i = 0; i < result.length; i++) {
		switch (result[i]) {
			case 'a':
				res.push('n');
				break;
			case 'b':
				res.push('o');
				break;
			case 'c':
				res.push('p');
				break;
			case 'd':
				res.push('q');
				break;
			case 'e':
				res.push('r');
				break;
			case 'f':
				res.push('s');
				break;
			case 'g':
				res.push('t');
				break;
			case 'h':
				res.push('u');
				break;
			case 'i':
				res.push('v');
				break;
			case 'j':
				res.push('w');
				break;
			case 'k':
				res.push('x');
				break;
			case 'l':
				res.push('y');
				break;
			case 'm':
				res.push('z');
				break;
			case 'n':
				res.push("a");
				break;
			case 'o':
				res.push('b');
				break;
			case 'p':
				res.push('c');
				break;
			case 'q':
				res.push('d');
				break;
			case 'r':
				res.push('e');
				break;
			case 's':
				res.push('f');
				break;
			case 't':
				res.push('g');
				break;
			case 'u':
				res.push('h');
				break;
			case 'v':
				res.push('i');
				break;
			case 'w':
				res.push('j');
				break;
			case 'x':
				res.push('k');
				break;
			case 'y':
				res.push('l');
				break;
			case 'z':
				res.push('m');
				break;
				case 'A':
					res.push('N');
					break;
				case 'B':
					res.push('O');
					break;
				case 'C':
					res.push('P');
					break;
				case 'D':
					res.push('Q');
					break;
				case 'E':
					res.push('R');
					break;
				case 'F':
					res.push('S');
					break;
				case 'G':
					res.push('T');
					break;
				case 'H':
					res.push('U');
					break;
				case 'I':
					res.push('V');
					break;
				case 'J':
					res.push('W');
					break;
				case 'K':
					res.push('X');
					break;
				case 'L':
					res.push('Y');
					break;
				case 'M':
					res.push('Z');
					break;
				case 'N':
					res.push("A");
					break;
				case 'O':
					res.push('B');
					break;
				case 'P':
					res.push('C');
					break;
				case 'Q':
					res.push('D');
					break;
				case 'R':
					res.push('E');
					break;
				case 'S':
					res.push('F');
					break;
				case 'T':
					res.push('G');
					break;
				case 'U':
					res.push('H');
					break;
				case 'V':
					res.push('I');
					break;
				case 'W':
					res.push('J');
					break;
				case 'X':
					res.push('K');
					break;
				case 'Y':
					res.push('L');
					break;
				case 'Z':
					res.push('M');
					break;		
			default:
				res.push(' ');
				continue;
		}
	}
	console.log(res.join(''));
	return res.join('');
}
rot13('T est');


function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

// for (const [input, expected] of [["test", "grfg"], ["Test", "Grfg"]]) {




	function removeEveryOther(arr){
		let res = [];
		for (let i = 0; i < arr.length; i++) {
			if( i % 2 == 0) {
				res.push(arr[i]);
			}
			} 
			console.log(res);
		return res;
	}
	removeEveryOther(['Hello', 'Goodbye', 'Hello Again']);





	// Test.assertEquals(stray([1, 1, 2]), 2);
	function stray(numbers) {
		console.log(numbers.filter((elem, i, numbers) => numbers.indexOf(elem) === numbers.lastIndexOf(elem) ));

		console.log(numbers.indexOf(9));
		console.log(numbers.indexOf(9));

	}
	stray([1, 1, 1, 9, 2,]);
	stray([1, 1, 2]);

	// console.log(Number(arr.filter((el, i ,arr) => arr.indexOf(el) === arr.lastIndexOf(el) )));




	// assert.strictEqual(switchItUp(1),"One");
	// assert.strictEqual(switchItUp(3),"Three");
	// assert.strictEqual(switchItUp(5),"Five");


	function switchItUp(number){
		let res = '';
		switch (number) {
		case 1:
			res = 'One';
			break;
		case 2:
			res = 'Two';
			break;
		case 3:
			res = 'Three';
			break;
		case 4:
			res = 'Four';	
			break;
		case 5:
			res = 'Five';
			break;
		case 6:
			res = 'Six';
			break;
		case 7:
			res = 'Seven';
			break;
		case 8:
			res = 'Eight';
			break;	
		case 9:
			res = 'Nine';	
			break;

		default:
			res = 0;
			
		}
		console.log(res);
	}

		switchItUp(9);








		// assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')

		function removeUrlAnchor(url){
			url = url.split('');

			let res = [];
			console.log(url);

			for (let i = 0; i < url.length; i++) {
				if (url[i] !== "#") {
					res.push(url[i]);
				} else {
					return res.join('');
				}
			}
			return res.join('');

		}
		removeUrlAnchor('www.codewars.com#about');





		console.log(099 + 1);



// Test.assertEquals(incrementString("foobar000"), "foobar001");
// Test.assertEquals(incrementString("foo"), "foo1");
// Test.assertEquals(incrementString("foobar001"), "foobar002");
// Test.assertEquals(incrementString("foobar99"), "foobar100");
// Test.assertEquals(incrementString("foobar099"), "foobar100");
// Test.assertEquals(incrementString(""), "1");

function incrementString (strng) {
	let digits = (strng.replace(/\D/g, ""));
  let letters = strng.replace(/[^a-z]/gi, "");  
	
	digits = digits.split("");
	digits = digits.map(str => str *1);
	console.log(digits);

	let res = [];

	for (let i = 0; i < digits.length; i++) {
		if(digits[i] === 0) {
			res.push(0);
		} if (digits[i] > 0 && digits[i] < 9) {
			res.push(digits[i]+1);
		} if (digits[i] === 9 ) {
			res.pop();
			res.push(10);

		}
	}
	res = res.join('');
	console.log(letters + res);
}

incrementString("foobar1000");
incrementString("foobar");
incrementString("foobar0009");
incrementString("foobar0007");
incrementString("");


// var digits = str.replace(/\D/g, ""),
//     letters = str.replace(/[^a-z]/gi, "");   



// Test.assertEquals(reverseLetter("krishan"),"nahsirk")
// Test.assertEquals(reverseLetter("ultr53o?n"),"nortlu")
// Test.assertEquals(reverseLetter("ab23c"),"cba")


function reverseLetter(str) {
	
	let res = [];
	let letters = str.replace(/[^a-z]/gi, ""); 

	res = letters.split('').reverse().join("");
	console.log(res);

  
  
}
reverseLetter("ultr53o?n");


function pickIt (arr) {
  
  let odd = []
  let even =[]
      
  for (var x of arr) {
      ((x % 2) ? odd : even).push(x)    
  }
      
  return [odd, even]
}



function pangrams(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const regex = /\s/g;
  const lowercase = s.toLowerCase().replace(regex, "");
  
   for(let i = 0; i < alphabet.length; i++){
    if(lowercase.indexOf(alphabet[i]) === -1){
      return "not pangram";
    }
   }
  
  return "pangram";
}




function strUpAndDown(str){
	var newStr = '';
for(var i =0; i < str.length;i++){
	if(str[i].toLowerCase() === str[i]){
	 newStr += str[i].toUpperCase();       
 }else {
	 newStr += str[i].toLowerCase();
 }
}
return newStr;
} 
// Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
// Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')

function solution(string) {

	let res = "";

	for (let i = 0; i < string.length; i++) {
		if (string[i].toLowerCase() === string[i]) {
			res += string[i];
		} else {
			res += " ";
			res += string[i];
		}
	}
	console.log(res);

}
solution('camelCasingTT');


String.prototype.isUpperCase = function(str) {
	
	let res = "";

	// console.log(str);

	for (let i = 0; i < str.length; i++) {
		if (str[i].toUpperCase() === str[i]) {
			res += str[i];
			console.log(str[i]);
		}
	}
	console.log(res);

	if (res.length === str.length) {
		console.log(true);
		return true;
	} else {
		console.log(false);
		return false;
	} 

};

String.prototype.isUpperCase('');
String.prototype.isUpperCase('DONALD');
String.prototype.isUpperCase('C');





// Test.assertSimilar(saleHotdogs(1),100);
// Test.assertSimilar(saleHotdogs(4),400);
// Test.assertSimilar(saleHotdogs(5),475);
// Test.assertSimilar(saleHotdogs(9),855);
// Test.assertSimilar(saleHotdogs(10),900);

function saleHotdogs(n){

	if (n > 1 && n < 5) {
		return n *100;
	} if (n >= 5 && n < 10) {
		return n *95;
	} else {
		return n *90;
	}
}
saleHotdogs(9);



// assert.strictEqual(findDifference([3, 2, 5], [1, 4, 4]), 14);
// assert.strictEqual(findDifference([9, 7, 2], [5, 2, 2]), 106);
// assert.strictEqual(findDifference([11, 2, 5], [1, 10, 8]), 30);

function findDifference(a, b) {

	let res;
	let sec;

	res = a.reduce((a,b) => a*b);
	sec = b.reduce((a,b) => a*b);

	if (res >= sec) {
		return res -sec;
	} else {
		return sec - res;
	}
}
findDifference([10, 2, 1], [1, 4, 4]);




function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {
	return 5;
}
function six() {}
function seven() {
	return 7;
}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times(a, b) {
	return a * b;
}
function dividedBy() {}

console.log(seven(times(five())));

// Test.assertEquals(seven(times(five())), 35);
// Test.assertEquals(four(plus(nine())), 13);
// Test.assertEquals(eight(minus(three())), 5);
// Test.assertEquals(six(dividedBy(two())), 3);







var rgbToHex = function (r,g,b) { 
  var hexr = Number(r).toString(16);
  var hexg = Number(g).toString(16);
  var hexb = Number(b).toString(16);

  if (hexr.length < 2) {
       hexr = "0" + hexr;
  }
	if (hexg.length < 2) {
		hexg = "0" + hexg;
  }  
  if (hexb.length < 2) {
	hexb = "0" + hexb;
}
	console.log("#"+hexr+hexg+hexb);
	return("#"+hexr+hexg+hexb);

};

rgbToHex(1, 2 ,3);
rgbToHex(255,0,0);

function colorOf(r,g,b)
{
   return "#" + toHex(r)+ toHex(g)+ toHex(b);  
}

function toHex(n)
{
  var result = n.toString(16);
  return result.length == 1 ? "0" + result : result;  
}


function getChar(c){

  var x = c;
  var asc = x.codePointAt(0);
  console.log(asc);
}

getChar('A');




// Test.assertSimilar(howManySmaller([1.234,1.235,1.228],1.24), 2);
// Test.assertSimilar(howManySmaller([1.1888,1.1868,1.1838],1.19), 1);

function howManySmaller(arr,n){

	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		let num = arr[i].toFixed(2);
		if(num < n) {
			count++;
		}
	}
  console.log(count);
}

howManySmaller([1.234,1.235,1.228],1.24);
howManySmaller([1.1888,1.1868,1.1838],1.19);














// Test.assertSimilar(cutIt(["ab","cde","fgh"]) , ["ab","cd","fg"]);
// Test.assertSimilar(cutIt(["abc","defgh","ijklmn"]) , ["abc","def","ijk"]);

function cutIt(arr){

	let len = [];
	for (let i = 0; i < arr.length; i++) {
		len.push(arr[i].length);
	}
	
	len = Math.min(...len);
  console.log(len);
	let res = [];

	for (let i = 0; i < arr.length; i++) {
		res.push(arr[i].slice(0, len));
	}

	console.log(res);
}
cutIt(["codewars","javascript","java"]);
cutIt(["abc","defgh","ijklmn"]);


function cutIt(arr){
  const minLength = Math.min(...arr.map(x => x.length));
  return arr.map(x => x.slice(0, minLength));
}
// let low = Math.min(...arr)+"";











// Test.assertSimilar(firstToLast("ababc","a") , 2);
// Test.assertSimilar(firstToLast("ababc","c") , 0);
// Test.assertSimilar(firstToLast("ababc","d") , -1);

function firstToLast(str,c){

	let first = str.indexOf(c);
	let end = str.lastIndexOf(c);

	if (first === -1) {
		return -1;
	} else {
		return end-first;
	}
}
firstToLast("ababc","d");
firstToLast("ababc","a");
firstToLast("ababc","c");








// Test.assertSimilar(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
// Test.assertSimilar(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
// Test.assertSimilar(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
// Test.assertSimilar(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");


function splitAndMerge(string, separator) {

	let res = [];
	res = string.split(' ');
	let result = [];

	for (let i = 0; i < res.length; i++) {
		let str = res[i].split("");
		str = str.join(`${separator}`);
		result.push(str);
	}
	console.log(result.join(' '));
	return (result.join(' '));

}

splitAndMerge("Hello World!",".");
splitAndMerge("My name is John","-");


function splitAndMerge(str, sp) {
  return str.split(" ").map(word => word.split("").join(sp)).join(" ");
}









// Test.assertSimilar(alienLanguage("My name is John") , "My NAMe Is JOHn");
// Test.assertSimilar(alienLanguage("this is an example") , "THIs Is An EXAMPLe");
// Test.assertSimilar(alienLanguage("Hello World") , "HELLo WORLd");


function alienLanguage(str){

	str = str.toUpperCase();
	let res = [];
	res = str.split(' ');

	let string = []; 

	for (let i = 0; i < res.length; i++) {
		let result = [];
		result.push((res[i].split('').pop().toLowerCase()));
		let word = res[i].slice(0, -1);
		string.push(word+result);
	}
	console.log(string.join(" "));
  
}

alienLanguage("this is an example");
alienLanguage("Hello World");

function alienLanguage(str){
  return str.replace(/\w+/g, w => w.slice(0,-1).toUpperCase() + w.slice(-1).toLowerCase());
}













// Test.assertSimilar(fiveLine("  a") , "a\naa\naaa\naaaa\naaaaa");
// Test.assertSimilar(fiveLine("\txy \n") , "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");

function fiveLine(s){

	s = s.trim();

	let result = '';
	const length = 5;

	for (let i = 1; i <= length; i++) {
		for (let j = 0; j < i; j++) {
			result += s;
		}
		result += '\n';
	}
	console.log(result);
}

fiveLine("  a");








// Test.assertSimilar(findMultiples(5, 25), [5, 10, 15, 20, 25])
// Test.assertSimilar(findMultiples(1, 2), [1, 2])
// Test.assertSimilar(findMultiples(5, 7), [5])
// Test.assertSimilar(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
// Test.assertSimilar(findMultiples(11, 54), [11, 22, 33, 44])

function findMultiples(integer, limit) {
	let res = [];

	for (let i = 0; i < limit; i++) {
		let num = integer + i;
		if (num % integer === 0 && num <= limit) {
			res.push(num);
		}
	}
	console.log(res);
}
findMultiples(1, 2);
findMultiples(5, 7);
findMultiples(4, 27);
findMultiples(11, 54);







// Test.assertSimilar(shuffleIt([1,2,3,4,5],[1,2]) , [1,3,2,4,5]);
// Test.assertSimilar(shuffleIt([1,2,3,4,5],[1,2],[3,4]) , [1,3,2,5,4]);

function shuffleIt(arr,n){
	
let ar = arr;
	[ar[1], ar[2] = ar[2], ar[1]];
	console.log(ar);


}
shuffleIt([1,2,3,4,5],[1,2]);

// var [a,b]=[1,2];
// [b,a]=[a,b];
// console.log(a);
// console.log(b);