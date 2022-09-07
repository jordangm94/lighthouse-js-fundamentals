const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
var w = 0;
while (w < ingredients.length) {
console.log(ingredients[w]);
w++;
}
// Write a for loop that prints out the contents of ingredients:
for (let f = 0; f < ingredients.length; f++) {
  console.log(ingredients[f]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let fBack = ingredients.length -1; fBack >= 0; fBack--) {
  console.log(ingredients[fBack]);
}