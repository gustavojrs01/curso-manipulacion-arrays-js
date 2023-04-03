const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
]

const aplanadora = (array)=>{
    let rta =[]
    for (let i=0;i<=array.length;i++){
        for(let j=0;)
    }



    return rta
}

/********************************
 * SOLUCION USANDO RECURSIVIDAD *
 ********************************/
const flatten = arr => arr.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
  );
  flatten( [1, [2,3], [4,[5,[6]]]] ) // [1, 2, 3, 4, 5, 6]