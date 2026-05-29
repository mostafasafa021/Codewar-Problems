function crap(x, bags, cap) {
  let currentCrap = 0;
  let isDogExist = false;
  let capacity = cap * bags;
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      if (x[i][j] === "@") currentCrap++;

      if (x[i][j] === "D") {
        isDogExist = true;
        break;
      }
    }
  }
  if (isDogExist) return "Dog!!"

  if (bags === 0 && currentCrap !== 0) return "Cr@p"

  if (currentCrap > capacity) return "Cr@p"

  if (currentCrap <= capacity) return "Clean"

}

console.log(
  crap(
    [
      ["_", "@", "@", "_", "_", "_"],
      ["_", "_", "_", "_", "_", "_"],
      ["_", "_", "_", "_", "_", "_"],
    ],
    1,
    1,
  ),
);

// bags = 2
// cap = 2
// x (or garden) =
// [[ _ , _ , _ , _ , _ , _ ],
//  [ _ , _ , _ , _ , @ , _ ],
//  [ @ , _ , _ , _ , _ , _ ]]
