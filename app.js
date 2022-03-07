// console.log("Hello,");

//_________________________***this function***__________________   

// var intToRoman = function (num) {
//     const M = ["", "M", "MM", "MMM"];
//     const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
//     const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
//     const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
//     return M[Math.floor(num / 1000)] + C[Math.floor((num % 1000) / 100)] + X[Math.floor((num % 100) / 10)] + I[num % 10];
// };

// console.log(intToRoman(3));
// console.log(intToRoman(4));
// console.log(intToRoman(9));
// console.log(intToRoman(58));
// console.log(intToRoman(1994));
//____________________________________________________
// var romanToInt = function(s) {
    

//     let romanToInt = {
//         I : 1,
//         V : 5, 
//         X : 10, 
//         L : 50,
//         C : 100,
//         D : 500,
//         M : 1000
//    };
//     let total = 0;
//     for ( let i =0; i< s.length ; i++){
//         let a= s.toString();
//         let curPos = romanToInt[a.charAt(i)];
//         let nextPos = romanToInt[a.charAt(i+1)];
//     if (nextPos){

//         if ( curPos >= nextPos){
//             total += curPos;
//         }else{
//             total += (nextPos - curPos);  
//             i++;
//         }
//     }else {
//             total += curPos;
//         }
//     }
//     return total;
//     console.log(total)
//  }
//  romanToInt();
//_____________roman to srtirn____
// function car(name) {
//     this.brand= name;
// }

// const carData = new car("maruti");
// console.log(carData)

//______next______
// function displayname() {
//     console.log(`the name is ${this.name} and their class is ${this.class}`)
// }
// let obj1 = {
//     name : "rhaul",
//     class : "msc",
//     fun : displayname
// }
// let obj2 = {
//     name : "simran",
//     class : "mba",
//     fun : displayname
// }
// obj1.fun()
// obj2.fun()

 //function btnclick () {


//_________________________***palindrone***__________________   

//console.log("this btn call fun")


//_________________________***palindrone***__________________   
// let value = "madam";
// const revValue = () => {
//     let myRev = value.toString().split("").reverse().join("");
//     let myStr = value.toString();
//     console.log(myRev)

//     if( myRev == value ){
//         console.log("palindron");
//     }else
//     {
//         console.log("not palindron")
//     }
// }
// revValue();
//______***Find the sum of all the multiples of 3 or 5 below 1000.***________   
// for (let i=1; i <= 1000; i++){
//      if (i%3 == 0 || i%5 == 0){
//         console.log(i)
//      }
// }
//_________________________***convert time***__________________   
// const timeH = document.getElementById("t1").value;
// const timeS = timeH*3600;
// document.getElementById("t2").value = timeS;
//_________________________***swipe string***__________________   
// const text1 = document.getElementById("t1").value;
// document.getElementById("t1").value = document.getElementById("t2").value;
// document.getElementById("t2").value = text1;
//}