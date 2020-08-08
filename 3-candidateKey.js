function solution(relation) {
    const cols = {};
    var newArr = [];
    for(var i = 0; i < relation.length; i++) {
        for(var j = 0; j < relation[i].length; j++) {
            const num = j + 1;
            if (!(num in cols)) {
                cols[num] = [];
            }; 
            if (j === num - 1) {
                newArr = cols[num];
                newArr.push(relation[i][j]);
                cols[num] = newArr;
            };
        };
    };

    total = 0; // number of candidate keys
    
    // check if any column is having distinct values
    for (var i = 0; i < relation[0].length; i++){
        newArr = cols[i+1];
        newArr.length === new Set(newArr).size ? total++ : total
    }
    var answer = total + 1;
    return answer;
}

const relation = [
    ['100','ryan','music','2'],
    ['200','apeach','math','2'],
    ['300','tube','computer','3'],
    ['400','con','computer','4'],
    ['500','muzi','music','3'],
    ['600','apeach','music','2']
]
console.log(solution(relation))

// the time complexity is O(n^2) or 8 * 20 since the max. length of the relation column is 8
// and the max. length of the row of relation is 20