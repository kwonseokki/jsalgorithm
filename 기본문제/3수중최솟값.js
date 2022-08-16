function solution(a, b, c){
     let answer;
     if(a > b) answer=b;  // a b 비교
     else if(b > c) answer=c; //b c 비교
     else if(c > a) answer=a; //
     return answer;
 }

 console.log(solution(3, 5, 11));

 /* 정답코드 */
 function solution(a, b, c){
     let answer;
     if(a > b) answer=b;  // a b 비교
     else answer=a;
     if(answer>c) answer=c;
     return answer;
 }

 console.log(solution(3, 5, 11));