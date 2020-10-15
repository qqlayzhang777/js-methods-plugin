// for循环的封装
function forvali(arr, fn) {
  for (let i = 0, len = arr.length; i < len; i++) {
    fn(arr[i], i)
  }
}

// 使用
let arrArr = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }];

forvali(arrArr, function (item, index) {
  console.log(item, index)
})