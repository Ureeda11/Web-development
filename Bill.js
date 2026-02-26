let units = 150;
let bill = 0;
if (units <= 100){ bill = units * 10;
}else if (units <= 200){
 bill = 100 * 10 + (units - 100) * 15;
}
else {bill = 100 * 10 + 100 * 15 + (units - 200) * 20;
}
console.log( bill);