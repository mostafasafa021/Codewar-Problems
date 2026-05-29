const rps = (p1, p2) => {
  let regex = /(Rock|Paper|Scissors)/gi

  if (p1 === p2) return "Draw!"

  // Check if p1 wins
  if (p1 === "rock" && p2 === "scissors" || p1 === "paper" && p2 === "rock" || p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!"
  }
  else {
    return "Player 2 won!"
  }
};

console.log(rps("Rkkfsdck", "kdlfklkf"))