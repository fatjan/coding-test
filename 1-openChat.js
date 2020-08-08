function solution(record) {
    var words = [];
    let newSentences = [];
    let users = {};
    let sentence = '';
    let key = '';
    record.forEach(element => {
            words = element.split(' '); // change each string into array
            key = words[1];
            // create an object of key-value pair between uid and the user name 
            users[key] = words[2];
            if (words[0] === 'Enter') {
                sentence = words[1] + ' came in.';
                newSentences.push(sentence);
            }
            else if (words[0] === 'Leave') {
                sentence = words[1] + ' has left.';
                newSentences.push(sentence);
            } else if (words[0] === 'Change') {
                //  change user name when the string is "Change"
                users[key] = words[2];
            };
        }
    );
    var answer = [];
    var userName = '';
    let itemSeparated = [];
    newSentences.forEach(element => {
            itemSeparated = element.split(' ');
            key = itemSeparated[0];
            userName = users[key]; // replace the user id with its name
            sentence = element.split(key).join(userName);
            answer.push(sentence);
        }
    );

    return answer;
};

// const data = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
// console.log(solution(data));

// time complexity is O(n) because we have single loop twice. 
// N is the number array of record