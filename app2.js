console.log("Rahul");












// Rock papaer scisors🤞
// const rps = () => {
// 	let p1 = ['rock', 'paper', 'scissors'];
// 	let p2 = ['rock', 'paper', 'scissors'];

// 	let x = Math.floor((Math.random() * 3) + 0);
// 	let y = Math.floor((Math.random() * 3) + 0);
// 	 if ( p1 [x] === p2[y]) 
// 		{
// 			console.log(` match draw 😎 p1 = ${p1[x]} and p2 = ${p2[y]}`);
// 		}
// 	 else if(p1[x] == 'rock' && p2[y] == 'scissors' || p1[x] == 'paper' && p2[y] == 'rock' ||
// 		  p1[x] == 'scissors' && p2[y] == 'paper') 
// 		{
// 			console.log("p1 won")
// 	 	   }
// 	else if
// 		{
// 			console.log("p2 won")
// 		}
// console.log(x + " " +y)
// 	}
// rps(); 

/// 🤞find avrage of array
// let arr = [23,56,12,4,545,5,63,23];
// let a = 0 , b;
// for (let i=0; i<arr.length;i++){
// 	a = a + arr[i];

// 	b = Math.floor(a / (i+1)) ;


// 	//console.log(arr[i])
// }
// console.log(`total = ${a} avrage = ${b}`)
//find sum all array
// const sum = (n) => {
// 	let a = 0;
// 	for(let i = 1 ; i < n ; i++){
// 		//console.log(i);
// 		a = a+i //a+=i
		

// 	}
// console.log(a)

// 	//console.log(n)
// }
// sum(8)

//[🤞]compare two arry and find vowel

// const vowel = (value) => {
// 	let a = value.split("");
// 	let v = ['a', 'e', 'i', 'o', 'u'];
// 	let count = 0;

// 	for (let i = 0; i<a.length ; i++){
// 		for(let j = 0 ; j < v.length; j++){
// 			if( a[i] == v[j]){
// 				count++;
// 			}
// 		}
// 	}
// 	console.log(`this string has ${count} vowel`)
// }

// vowel("Rahul")

//🤞pleent swich pro
// function planet(id) {
// 	let name;
// 	switch(id){
// 		case 1:
// 		name = "Earth"
// 		break;
// 		case 2:
// 		name = "moon"
// 		break;
// 		case 3:
// 		name = "venus"
// 		break;
// 		case 4:
// 		name = "neptun"
// 		break;
// 		default:
// 		name= "soory put valid name"
// 		}
// 		return name;
// }
// console.log(planet(Math.floor ((Math.random() * 4) + 1)));

//find age object🤞
// const data = [
//     {name : "Rahul", age : 45},
//     {name : "vishal", age : 45},
//     {name : "kaushal", age : undefined},
//     {name : "raju", age : null},
// ];

// let a = data.filter((x) =>  {
//     //console.log(x.age)
//     return x.age; 
    
// });

// console.log(a)




//swaap two numbers;🤞

// let a = 5;
// let b = 4;
// [a ,b] = [b ,a]
// console.log(`a = ${a}, b = ${b}`)
//{🤞{{{{{{Call.bind.apply}}}}}}}
//app🤞ly also call

// const you = {
//     name : "vinod",
//     contentt : "c++",
//     fetures : function (rating) {
//         console.log(`this is ${this.name} my ${this.contentt}and give me ${rating} star`);
//     }
// }
// const you2 = {
//     name : "rahul",
//     contentt : "python",
// }
// const you3 = {
//     name : "akash",
//     contentt : "css",
// }
// you.fetures(5)
// you.fetures.call(you2, 4);
// you.fetures.apply(you3, [5]);


//bind🤞
// const you = {
//     name: "Rahul",
//     content : "programmung",
//     fetures : function() {
//         console.log(`hello my name ${this.name} my ${this.content} topics`)
//     }
// }

// you.fetures();

// const you1 = {
//     name: "Ra21hul",
//     content : "programmung",
// }
// const you2 = {
//     name: "Rahul12safa",
//     content : "proas2fagrammung",
// }
// let youfun = you.fetures.bind(you2);
// youfun()

//call🤞
// const you = {
//     name : "rahul",
//     content : "programm",
//     fetures : function (rating){
//         console.log(`very freidly ${this.name} you like ${this.content} 
//         give me ${rating} star please`);

//     }
// }
// you.fetures(5)
// const you2 = {
//     name : "sharma",
//     content : "proglllramm"
// }

// you.fetures.call(you2,5)

//}}}}🤞}}}}}}}}}}}}hof}}}}}
// const interview = (name) => {
//     if ( name === "vinod"){
//         return function (topic) {
//             console.log(`hello ${name} your topic is ${topic}`);
//         }
//     }if ( name === "Rahul"){
//         return function (topic) {
//             console.log(`hello ${name} your topic is ${topic}`);
//         }
//     }else {
//         return function (){
//             console.log(`hello ${name} is not here pls ragister here`)
//         }
//     }

// }

// interview("Raul")("html");
// interview("vinod")("ai")

//}}🤞}}}}}}}}}}}
// let a = [5,2,4,6];
// let b = [5,3,9,4,8,8];
// const union = () => {
//     let oneA = [...a, ...b];
//     return [...new Set(oneA)]
// }
// console.log(union().sort().reverse());

//}}🤞}}}}}}}}}}}}}}}find duplicate no.}}}}}}
// let a = [12,5,12,6,6,3,7];
// const findd = a => a.filter((item, index) => 
//     a.indexOf(item) !== index);
// const dupli = findd(a);
// console.log(dupli)

//🤞++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(strs);

// if (!strs.length) return "";

// for (let i = 0; i <= strs[0] ; i++){
//     if(!strs.every((string) => string[i] === strs[0][i])){
//         return strs[0].slice(0,i);
//     }
// }
// return strs[0];

//🤞/________________
// var ages = [12,2,3,18,20]
// console.log(ages);
// const b = ages.every(check);
// console.log(b);
// function check(age) {
//     return age >= 18;
// }

//{{{🤞{{{{{{remove duplicat and sort}}}}}}}}}
// let arr = [1,1,21,2,1,3,2,45,134,64,34,64,346,4,1,5];
// let newarr = [...new Set(arr)];
// console.log(newarr)
// newarr.sort( function (a,b) {
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;

// });

// console.log(newarr)
// console.log(arr)

//🤞/_______practice________
// let names= ['rahul', 'golu', 'rajesh', 'jolu'];
// let newnames = names.splice(4,0,"sharma");
// let newnsames = names.splice(2,1,"Rajesh");
// names.push("konal")
// //console.log(b)
// console.log(names)

//🤞/_______practice________
// const a =parseInt("16 volts",10);
// const b =parseInt("3b",16);
// const c =parseFloat("15.5 kph")
// console.log(a)
// console.log(b)
// console.log(c)

//🤞/___________merge two link___________
// var mergeTwoLists = function(list1, list2) {
// //let list1 = [1,2,4];
// //let list2 = [1,3,4];
// let list3 = [list1 +','+ list2];
// let list4 = list3.toString().split(',');
// let length = list4.length;
// let arr = [];
// for (let c = 0; c< length ; c++)
//     arr.push(parseInt(list4[c]));
// arr.sort (function(a,b){
//     return a - b;
// } )
// //console.log(list4);
// console.log(arr);

// };
// //mergeTwoLists([1,2,3],[2,2,6])
// mergeTwoLists([1,2,4],[1,3,4])


