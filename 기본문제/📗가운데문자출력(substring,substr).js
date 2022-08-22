/* 풀이
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s[mid];
  else answer = s[mid - 1] + s[mid];

  return answer;
}
console.log(solution("good"));
*/

/* substring
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);

  return answer;
}
console.log(solution("good"));
*/

// substr
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substr(mid, 1);
  else answer = s.substr(mid - 1, 2);

  return answer;
}
console.log(solution("good"));
