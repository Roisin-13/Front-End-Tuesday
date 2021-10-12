let darthVader = {
    "allegience" : "empire",
    "weapon" : "lightsabre",
     "sith" : true   
}
console.log(darthVader);


console.log(`Darth Vader's allegiance is to the ${darthVader.allegience}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a Sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true" }`);


let myArray = ["hello", "everyone"];
console.log(myArray.length);
myArray.push("I", "am", "array");
console.log(myArray.length);
myArray.shift();

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);   
}