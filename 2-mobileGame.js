
function solution(N, users) {
    stages = {};
    maxStage = Math.max.apply(null, users);
    let key = '';
    // create an object of stages that consists of
    // stage as the key and number of users on its particular stage as the value
    users.forEach(element => {
            key = element;
            if ( !(key in stages) & key <= N ) {
                stages[key] = 1;
            } else {
                stages[key] += 1;
            };
        }
    );

    // get the failure rates
    const totalUser = users.length;
    let remainder = totalUser;
    let failureRates = {};
    const listOfFailureRates = []
    for (let i=1; i <= N; i++) {
        if (i in stages) {
            failureRates[i] = stages[i] / remainder;
            remainder -= stages[i];
        } else {
            failureRates[i] = 0;
        }
        listOfFailureRates.push(failureRates[i]);
    };

    const sortedRates = listOfFailureRates.slice().sort();
    sortedRates.reverse();
    let answer = [];
    let item;
    for (let i = 0; i < sortedRates.length; i++) {
        item = sortedRates[i];
        index = listOfFailureRates.indexOf(item);
        if (answer.includes(index+1)) {
            index = listOfFailureRates.indexOf(item, index+1);
        } 
        answer.push(index+1);
    }
    return answer;
}

const N = 5
const users = [2,1,2,6,2,4,3,3]
console.log(solution(N, users))


// the time complexity will be O(n) because in dominance we have single loop
// N will be the number of users because we place each user to its particular stage