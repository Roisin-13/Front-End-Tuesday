/*for (let i = 1; i <= 200; i++) {
    if (i % 3 == 0) {
        console.log("%c" + "fizz", "color: green;");
    } else if (i % 5 == 0) {
        console.log("%c" + "buzz", "color: blue;");
    }
    
}*/

for (let i = 1; i <= 200; i++) {
    switch (true) {
        case (i % 3 == 0 && i % 5 == 0):
            console.log("%c" + "fizzbuzz", "color: red;");
            break;
            case (i % 3 == 0):
                console.log("%c" + "fizz", "color: green;");
            break;
            case (i % 5 == 0):
                console.log("%c" + "buzz", "color: blue;");
                break;
            default:
                console.log("%c" + i, "color: black;");
                break;
    }
}

function bottleSong() {   
for (let i = 99; i >= 2; i--) {
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
    console.log(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
}
console.log(`1 bottles of beer on the wall, 1 bottles of beer.`);
console.log(`Take one down and pass it around, no more bottles of beer on the wall.`);
console.log("No more bottles of beer on the wall, no more bottles of beer.");
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}
bottleSong();
