// 풀이
function solution(day, arr){
    let answer=0;
    for(let x of arr) {
       if(x.toString().includes(day.toString())) {
           answer +=1;
       }
    }
    return answer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

// 정답

function solution(day, arr){
    let answer=0;
    for(let x of arr) {
        if(x%10 === day) {
            answer++;
        }
    }
    return answer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

/* 
 어떠한 숫자든 10으로 나눈 나머지는 일의자리가 된다.
 ex) 25/10 몫:2 나머지:5 336/10 목:33 나머지:6
  
*/