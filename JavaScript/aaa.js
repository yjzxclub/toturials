let cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let cur;
for (let i = 0; i < cats.length; i++) {
    console.log("i = " + i);
    if ('Jeff' === cats[i] ) {
        cur = i;
        break;
    }
}
console.log(cur);