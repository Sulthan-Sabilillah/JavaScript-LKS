let map = new Map();

map.set("Rambutan", "Mangga");
map.set("Pisang", "Fery");
map.set("Score", 100);

console.log(map);

for (let el of map) {
  console.log(el);
}

console.log(map.has("awikwok"));

map.delete("Banana");
console.log(map);

console.log(map.values());
console.log(map.keys());

map.clear();
console.log(map);
