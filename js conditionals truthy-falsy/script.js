let strictA = true;
let strictB = 1;
console.log(strictA == strictB); //returns true
console.log(strictA === strictB); //returns false

console.log(strictA != strictB);  //returns false
console.log(strictA !== strictB); //returns true

let age = 64;

if (age < 18) {
    console.log("underage");
} else if (age >= 18 && age <= 65) {
    console.log("right age"); 
} else {
    console.log("overage");    
}

let check50 = (age > 50)? "Congrats 50+" : "Not quite yet";
console.log(check50);