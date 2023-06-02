function extractValue(arr, key) {
    return arr.map(obj => obj[key]);
}

function vowelCount(str) {
    const vowels = 'aeiou';
    const result = {};
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            if (result[char]) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}

function addKeyAndValue(arr, key, value) {
    return arr.map(obj => {
        return {...obj, [key]: value};
    });
}

function partition(arr, callback) {
    const arr1 = arr.filter(callback);
    const arr2 = arr.filter(val => !callback(val));
    return [arr1, arr2];
}

