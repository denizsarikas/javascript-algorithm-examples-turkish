/*
node '.\Desktop\algoritma.js'
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SORU1
// [8,4,6,2,3] => output: [4,2,4,2,3] --> birbirinden çıkararak ilerleme metotları
//ÇÖZÜM1

/*
const solution = (arr) => {
    return arr.map((_,i) => {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                arr[i] = arr[i] - arr[j]
                break
            }
        }
        return arr[i]
    })
}

let s = [8, 4, 6, 2, 3]
console.log(solution(s))

*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SORU2
//input [[4,3,2,-1], [3,-2,-1,6], [5,-4,0,-1]] eksili değer sayısını output olarak ver
//ÇÖZÜM2

/*
const solution = (arr) => {

   // return arr.map(row => row.filter(r => r < 0 ).length).reduce((a,b) => a+b, 0)

   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if(arr[i][j] < 0){
            newArr.push(arr[i][j])
        }
    }
   }
   return newArr.length
}

let s = [[4,3,2,-1], [3,-2,-1,6], [5,-4,0,-1]]
console.log(solution(s))
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SORU3
//[555,901,899,1276,12] => ÇİFT basamaklı sayıların sayısını bul
//ÇÖZÜM3

/*
const solution = (arr) => {

    return arr.filter(r => r.toString().length %2 === 0).length
}


let s = [555,901,899,1276,12]
console.log(solution(s))

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SORU4
//input n = 5 => 5 elemanlı dizi yap ama toplamları 0 olsun [1,2,0,-2,-1] sadece tek sayılar için
//ÇÖZÜM4

/*
const solution = (num) => {

    let newArr = [];

    if (num % 2 === 0) {
      for (let i = 1; i <= num / 2; i++) {
        newArr.push(i);
        newArr.unshift(-i);
      }
    } else {
      newArr.push(0);
      for (let i = 1; i < num / 2; i++) {
        newArr.push(i);
        newArr.unshift(-i);
      }
    }
    return newArr;
  };

console.log(solution(5))
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SORU4
// n = 434 => 4*3*4 => 48, 4+3+4 =11 result => 48-11=37
//ÇÖZÜM4
/*
const solution = (num) => {

    let revizeNum = num.toString().split('').map(Number)
    return revizeNum.reduce((a,b) => a * b, 1) - revizeNum.reduce((a,b) => a + b, 0)
}

let num = 434
console.log(solution(num))
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SORU5
//nums = [1,2,3,4,4,3,2,1], n = 4
//output = [1,4,2,3,3,2,4,1] => numsın 4 birim ardındaki değeri koy
//ÇÖZÜM

/*
const solution = (arr, num) => {
    let newArr = [];
    for (let i = 0; i < num; i++) {
        newArr.push(arr[i])
        newArr.push(arr[i + num])
    }
    return newArr
}

let nums = [1,2,3,4,4,3,2,1]
console.log(solution(nums,4))
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SORU6
// input [-2,1,-3,4,-1,2,1,-5,4] => output: -4 ---------  [-2,1,-3,4,-1,2,-5] toplamları -4 oldugu için tekrar eden değerleri sil topla

/*
const solution = (arr) => {
    let newArr = [...new Set(arr)]
    return newArr.reduce((a,b) => a + b , 0)
}

let s = [-2,1,-3,4,-1,2,1,-5,4]
console.log(solution(s))
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SORU7
//input 123 -> 321 input -123 -> -321 input 120 -> 21
//ÇÖzüm7

/*
const solution = (num) => {

    return num <0 ? -1 * Number(num.toString().split('').filter(r => r !== '-').reverse().join('')) : Number(num.toString().split('').reverse().join(''))
}
console.log(solution(-123))
*/

//SORU8
//[2,7,11,15] , 9 ===> 2+7 9 EDİYOR 2, 0. indexte 7, 1. indexte O YUZDEN RETURN [0,1]
//ÇÖZÜM8

/*
const solution = (arr, num) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] + arr[j] === num && i != j){
                return [i, j]
            }
        }  
    }
}

let s = [2,7,11,15]
console.log(solution(s,9))

*/

//SORU9 
//input iki array ters çevir topla [2,4,3] [5,6,4] => [7,0,8]
//ÇÖZÜM9
/*
const solution = (arr1,arr2) => {
 
    return Number(arr1.reverse().join('')) + Number(arr2.reverse().join(''))
}

let s1 = [2,4,3]
let s2 = [5,6,4]
console.log(solution(s1,s2))
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SORU10
//Input: nums1 = [1,3], nums2 = [2] birleştir ortalamasını bul

/*
const solution = (arr1, arr2) => {

    arr1.push(...arr2)
    arr1.sort((a,b) => a -b)
    let decimal = arr1.length / 2 - Math.floor(arr1.length / 2)
    if (arr1.length %2 == 1) {
        return arr1[arr1.length / 2 - decimal].toFixed(5)
    }else{
        return (arr1[arr1.length / 2 - decimal]+ arr1[arr1.length /2 - decimal -1]) /2
    }
}
let s1 = [1,3,4,5]
let s2 = [2]
console.log(solution(s1,s2))

*/

//SORU11
//"5.5.5.5.5" --> "5[.]5[.]5[.]5[.]5[.]5"
//ÇÖZÜM11
/*

const solution = (arr) => {
return arr.replaceAll('.', '[.]')
}

let s1 = "5.5.5.5.5"
console.log(solution(s1))

*/

//SORU12
//Bir sayının asal çarpanlarını bul.
//ÇÖZÜM12

/*
const solution = (num) => {

    var factors = [];
    let start  = 2;
    while(num > 2){
        if (num % start == 0) {
            factors.push(start)
            num = num / start
        }
        else{
            start++
        }
    }
    return factors
}

console.log(solution(69))

*/

//SORU13
//fibonacci
//çözüm13

const solution = (num) => {

    var fibon = [0,1];
    if(num <= 2) return 1
    for (let i = 2; i <= num; i++) {
        fibon[i] = fibon[i-1] + fibon[i-2] 
    }
    return fibon[num]
}

console.log(solution(12))

