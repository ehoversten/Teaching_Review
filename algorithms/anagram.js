function isAnagram(str_1, str_2) {
    // add whatever parameters you deem necessary - good luck!

    let obj_1 = {};
    let obj_2 = {};

    for (let char of str_1) {
        if (!obj_1[char]) {
            obj_1[char] = 1;
        } else {
            obj_1[char]++;
        }
    }

    for (let char of str_2) {
        if (!obj_2[char]) {
            obj_2[char] = 1;
        } else {
            obj_2[char]++;
        }
    }

    for(let key in obj_1) {
        if(obj_1[key] !== obj_2[key]) {
            return false;
        }
        return true;
    }

}


console.log(isAnagram("aaz", "zza"));
console.log(isAnagram("aazs", "zza"));
console.log(isAnagram("tan", "ant"));