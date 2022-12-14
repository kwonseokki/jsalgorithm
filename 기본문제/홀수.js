function solution(arr) {
  let answer = [];
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      sum += arr[i];
      if (min > arr[i]) min = arr[i];
    }
  }
  answer.push(sum, min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
