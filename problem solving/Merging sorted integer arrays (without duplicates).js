      function mergeArrays(a, b) {
        // your code here
        let concat = Array.from(new Set([...a,...b]))

      return  concat.sort((a, b) => a - b) 
      }

    console.log(mergeArrays([1, 3, 3, 5], [2, 9, 6,15]))