// 풀이
/*
function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      answer += "#";
      continue;
    }
    answer += s[i];
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));

*/

// replace 내장함수
function solution(s) {
  s = s.replace(/A/g, "#");
  let answer = s;
  return answer;
}

let str = "BANANA";
console.log(solution(str));
