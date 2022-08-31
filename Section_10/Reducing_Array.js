let angka = [10,20,30];

let sum = 0;
for (let num of angka){
    sum = sum + num;
}
console.log(sum);

const MengurangiSum = angka.reduce(function(sum,num){
    return sum + num;
},0);
console.log(MengurangiSum);