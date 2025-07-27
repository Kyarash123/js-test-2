let n = parseInt(prompt("تعداد عناصر آرایه را وارد کنید:"));
let arr = [];

for (let i = 0; i < n; i++) {
  let val = prompt("عنصر " + (i + 1) + " را وارد کنید:");
  arr[i] = val;
}

let checkValue = prompt("مقداری که می‌خواهید بررسی کنید را وارد کنید:");
let found = false;

for (let i = 0; i < n; i++) {
  if (arr[i] === checkValue) {
    found = true;
    break;
  }
}

if (found) {
  console.log("مقدار در آرایه وجود دارد");
} else {
  console.log("مقدار در آرایه وجود ندارد");
}
