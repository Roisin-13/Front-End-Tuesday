for (let A = 100; A < 200; A++)
{
    console.log("%c" + A, "color: red;");
}

for (let A = 100; A <= 200; A++) {
    if (A % 2 == 0) {
        console.log("%c" + A + "-", "color: green;");
    } else {
        console.log("%c" + A + "*", "color: blue;");
    }
    
}

for (let i = 1; i <= 10; i++)
{
    for (let j = 1; j <= 10; j++)
       {
            if (j == 10)
            {
                console.log(j);
            } else
            {
                console.log(j); 
            }
       }
}

let d = new Date();
let n = d.getDay();
switch (n) {
  case 0:
    console.log("Sunday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weekday");
    break;
  default:
    console.log("Not a Day");
}