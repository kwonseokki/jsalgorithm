// 풀이
/*
function solution(arr) {
  let answer = [];
  let sum=0;
  for(let x of arr) {
    sum += x;
  }
  console.log(sum)
  for(let i=0; i<arr.length; i++) {
      if(sum - (arr[i] + arr[i+1]) === 100 || sum - (arr[i-1] + arr[i]) === 100) continue;
      answer.push(arr[i]);
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
*/

// 정답
function solution(arr) {
    let sum = arr.reduce((acc, cur)=> acc+cur);
    let answer= [...arr];
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(sum - (arr[i] + arr[j])===100) {
                answer.splice(i, 1);
                answer.splice(j-1, 1);
            }
        }
    }3
    return answer;
  }
  
  let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
  console.log(solution(arr));

