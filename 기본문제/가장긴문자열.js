function solution(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;
  str.forEach((str) => {
    if (str.length > max) {
      max = str.length;
      answer = str;
    }
  });
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
