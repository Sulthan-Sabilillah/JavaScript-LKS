let minute = "5";
let hour = "7";

console.log(minute.padStart(5));
console.log(hour.padEnd(5, "0"));

let trimname = "     Sulthan     ";

console.log(trimname.trimEnd.length);

trimname = trimname.trimEnd();
console.log(trimname.length);
