function solution(a, b, c) {
  let answer = "YES",
    max;
    if(a > b) max=a;
    else max=b;
    if(c > max) max=c;
    if(max >= a + b + c -max) answer="NO";

  return answer;
}

console.log(solution(13, 33, 17)); // 가장 긴변의 길이가 다른 두변의 길이보다 작아야함
