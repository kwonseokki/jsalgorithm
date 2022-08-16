function solution(n){
    let answer;
    answer = Math.ceil( n / 12);
    // ceil:무조건올림 round:반올림 floor: 내림
    return answer;
}

console.log(solution(178));