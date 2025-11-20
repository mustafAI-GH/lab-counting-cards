let count = 0;

function cc(card) {
  if (typeof card === "number") {
    if (card >= 2 && card <= 6) {
      count += 1;
    } else if (card >= 7 && card <= 9) {

    } else {
      count -= 1;
    }
  } else {

    count -= 1;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(cc(5));
console.log(cc("K"));
console.log(cc(9));
console.log(cc(7));
console.log(cc("Q"));
console.log(cc(3));
