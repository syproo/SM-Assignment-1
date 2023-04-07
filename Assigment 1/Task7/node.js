
let a, b, c;
for (a = 1; a <= 6; a++) {
    for (b = 1; b < a; b++) {
        c = c + ("*");
    }
    console.log(c);
    c = '';
}
