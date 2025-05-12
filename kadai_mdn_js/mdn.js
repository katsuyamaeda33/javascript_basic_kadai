const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // 0から開始するので+1
const date = today.getDate();

console.log(year + '年' + month + '月' + date + '日');