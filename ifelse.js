let x; 

for (x = 2; x <= 4; x++) { 
	console.log("Value of x:" + x); 
} 

let languages = { 
	first: "C", 
	second: "Java", 
	third: "Python", 
	fourth: "PHP", 
	fifth: "JavaScript", 
}; 

for (itr in languages) { 
	console.log(languages[itr]); 
} 

let y = 1; 

while (y <= 4) { 
	console.log("Value of y:" + y); 

	x++; 
} 

let z = 21; 

do { 

	console.log("Value of z:" + z); 

	z++; 
} while (z < 20); 
