/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = strs[0].toLowerCase().split(""); //[]
    for(let i=1; i<strs.length; i++){
        let temp = strs[i].toLowerCase().split('');
        for(let j=0; j<res.length; j++){
            if(temp[j] !== res[j]){
                res.splice(j);
                break;
            }else continue
        }
    }
    return res.join('');
};