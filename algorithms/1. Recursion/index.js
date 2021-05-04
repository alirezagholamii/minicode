// function findFactorialRecursive(number){
//   if(number < 2){
//     return 1
//   }
//   return findFactorialRecursive(number-1) * number
// }

// console.log(findFactorialRecursive(5));

// function rangeOfNumbers(startNum, endNum) {
//   if(startNum >= endNum){
//     return [startNum]
//   }

//   const result = rangeOfNumbers(startNum, endNum -1);
//   result.push(endNum)
//   return result
// };

// rangeOfNumbers(4,4)

// 0 1 1 2 3 5 8 12 21
// function fib(n){ // O(2^n)
//   if(n < 2){
//     return n
//   }
//   return fib(n-1) + fib(n-2)
// }
// console.log(fib(8));

// fibonacciIterative(n){ // O(n)
//   const arr = [0,1]
//   for(i = 2; i<n+1; i++){
//     arr.push(arr[i-2] + arr[i-1])
//   }
//   return arr[n]
// }

// Anything you do with a recursion CAN be done iteratively (loop)

// let denom = [
//   { name: 'ONE HUNDRED', val: 100.00 },
//   { name: 'TWENTY', val: 20.00 },
//   { name: 'TEN', val: 10.00 },
//   { name: 'FIVE', val: 5.00 },
//   { name: 'ONE', val: 1.00 },
//   { name: 'QUARTER', val: 0.25 },
//   { name: 'DIME', val: 0.10 },
//   { name: 'NICKEL', val: 0.05 },
//   { name: 'PENNY', val: 0.01 }
// ];

// function checkCashRegister(price, cash, cid) {
//   let cashRegister = { status: null, change: [] };
//   let change = cash - price;
//   let sumCid = parseFloat(cid.map(function (x) { return x[1] }).reduce((a, b) => a + b, 0).toFixed(2));
//   cid = cid.reverse();
//   let currentValue = 0;

//   let changeArray = denom.reduce(function (acc, next, index) {
//     let currentValueArray = 0;
//     // Built this first if() just for the last GODDAMN test case!
//     if (cid[index][1] === 0) {
//       acc.push(cid[index]);
//       return acc;
//     } else {
//       if (change >= next.val) {
//         while (change >= next.val && cid[index][1] >= next.val) {
//           change -= next.val;
//           change = Math.round(change * 100) / 100;
//           cid[index][1] = Math.round(cid[index][1] * 100) / 100;
//           cid[index][1] -= next.val;
//           currentValueArray += next.val;
//         }
//         currentValue = currentValueArray;
//         acc.push([next.name, Math.round(currentValueArray * 100) / 100]);
//         return acc;
//       } else {
//         return acc;
//       }
//     }
//   }, []);


//   if (change > sumCid || change > 0) {
//     cashRegister.status = "INSUFFICIENT_FUNDS";
//     cashRegister.change = [];
//     console.log(cashRegister);
//     return cashRegister
//   } else if (sumCid - Math.round(currentValue * 100) / 100 === 0) {
//     cashRegister.status = "CLOSED";
//     cashRegister.change = changeArray.reverse();
//     console.log(cashRegister);
//     return cashRegister
//   } else {
//     cashRegister.status = "OPEN";
//     cashRegister.change = changeArray;
//     console.log(cashRegister);
//     return cashRegister
//   }

// }
// const currenciesInCent = {
//   "PENNY": 1,
//   "NICKEL": 5,
//   "DIME": 10,
//   "QUARTER": 25,
//   "ONE": 100,
//   "FIVE": 500,
//   "TEN": 1000,
//   "TWENTY": 2000,
//   "ONE HUNDRED": 10000
// }


// function checkCashRegister(price, cash, cid) {
//   const cashRegister = { status: null, change: [] };
//   const originalMoneyToReturn = ((cash * 100) - (price * 100)) ;
//   let returningMoney = originalMoneyToReturn;
//   const unemptyCid = cid.filter((item) => item[1] > 0).reverse();
//   let sumOfCid = 0;

//   unemptyCid.forEach(item => {
//     const currencyName = item[0];
//     let currencySum = item[1] * 100;
//     sumOfCid += currencySum;
//     let amount = 0;
//     while (returningMoney >= currenciesInCent[currencyName] && currencySum > 0) {
//       amount = amount + currenciesInCent[currencyName];
//       currencySum = currencySum - currenciesInCent[currencyName];
//       returningMoney = returningMoney - currenciesInCent[currencyName];

//     }
//     if (amount !== 0) {
//       cashRegister.change.push([currencyName, amount / 100]);
//     }
//   });

//   if (returningMoney > 0) {
//     cashRegister.status = 'INSUFFICIENT_FUNDS';
//     cashRegister.change = [];
//   } else if (originalMoneyToReturn === sumOfCid && returningMoney === 0 ) {
//     cashRegister.status = 'CLOSED';
//     cashRegister.change = cid;
//   } else {
//     cashRegister.status = 'OPEN';
//   }

//   return cashRegister;
// }

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


function palindrome(str) {
  str = str.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  str = str.toLowerCase()
  return str === str.split('').reverse().join('');
}