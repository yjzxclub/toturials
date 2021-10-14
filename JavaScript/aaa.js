let fibonacci = [1, 1];
for (let i = 2; i < 45; i++) {
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
}
console.log(fibonacci);
