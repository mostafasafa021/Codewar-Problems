function sumMix(x) {
    let result = x.map((el)=> +el).reduce((perv, curr) => perv + curr)

    return result
}

console.log(sumMix(["21", "21", 5, 4, 2, 22, 44, 33, "21", "12"]));