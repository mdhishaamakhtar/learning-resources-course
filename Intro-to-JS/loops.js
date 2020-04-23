//jshint esversion:6
let a = ["Hishaa", "ang", "sha"];
for (let p of a) {
    console.log(p);
}

a.forEach(data => {
    console.log(data);
});

for (let a1 of a) {
    console.log(a1);
}

for (let a1 in a) {
    console.log(a1);
}

let a2 = 0;
while (a2 < a.length) {
    console.log(a[a2]);
    a2 += 1;
}