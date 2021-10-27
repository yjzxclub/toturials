let cat1 = {
    name: "Ket",
    say: function() {
        console.log("My name is " + this.name);
    }
}
let cat2 = Object.create(cat1);
cat2.name = "Bill";
cat1.say();
cat2.say();

let badCat1 = { // 一个不好的例子
    name: "Steve",
    say: function() {
        console.log("My name is " + badCat1.name); 
    } 
};
let badCat2 = Object.create(badCat1);
badCat2.name = "重干";
badCat1.say();
badCat2.say();