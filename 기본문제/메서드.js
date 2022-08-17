// forEach, map, filter, reduce

// .map()
a = [10, 11, 12, 13, 14, 15];
let answer_map = a.map(
  function (v, i) {
      console.log(this);
    if (v % 2 === 0) return v; // map은 원본배열을 탐색하면서 새배열을 생성하기에 [ 10, undefined, 12, undefined, 14, undefined ]
  },
  [1, 2]
);

console.log(answer_map);

// .filter()
let answer_filter = a.filter(
  function (v, i) {
    return v % 2 === 0;
  },
  [1, 2]
);

console.log(answer_filter);

// filter의 내부
function filter(predicate, thisArg) {
  let list = [];
  for (let i = 0; i < a.length; i++) {
    if (predicate(a[i], i)) list.push(a[i]);
  }
  return list;
}

// reduce 내부
function reduce(predicate, val) {
  let result = val;
  for (let i = 0; i < a.length; i++) {
    result += predicate(result, a[i]);
  }
  return result;
}

// reduce
a = [10, 11, 12, 13, 14, 15];
let answer_reduce = a.reduce(function (acc, v) {
  return acc + v;
}, 0);

console.log(answer_reduce);

b = [10, 2, 7, 8, 9];
let result = b.reduce((acc, v)=> acc + v );

Array
