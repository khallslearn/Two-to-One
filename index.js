//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.//

function longest(s1, s2) {
    let combine = s1 + s2 
    let sorted = combine.split('').sort().join('')
    let remove =[...new Set(sorted)].join("");
    return remove 
   }

