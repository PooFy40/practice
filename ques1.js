let arr = [1,2,3,4,5,6,7,8,9,10]
let evens = 0
let odds = 0

	
for (let i = 0; i < arr.length; i++) {
		
	if (arr[i]%2 == 0)
		evens++
	else
		odds++
	}
console.log("No. of even's = " + evens)

console.log("No. of odd's = " + odds)
