// Write a function called `superbowlWin()` in `index.js`:

// * The function should receive 1 argument, an `Array` of JavaScript `Object`s
// * Each object has two properties: `year` and `result`
// * It should use `find()` to test each `Object` to see if the `result` is `"W"` —
//   a win!
// * It should return the `year` when the win occurred (if it occurred at all!)
// * If no win is found, it should return, sadly, `undefined`

function superbowlWin (listOfGames){
    const found = listOfGames.find(function (listOfitems){
        return listOfitems.result === "W";
    }) 
  return found ? found.year : found
    // if (found){
    //     return found.year;
    //     } else {
    //         return found;
    //     }
    };
    
    

// function superbowlWin (seasons){
//     const wins = seasons.find(function (listOfitems){
//         return listOfitems.result === "W";
//     });
//    return wins.year
// }





