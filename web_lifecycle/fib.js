function fibonacci(num) {
  if (num < 2) {
    return num
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2)
  }
}

var onmessage = function (event) {
  console.log(this) 
  // 分线程的this不是window,所以没有document和alert等对象和方法
  // 因此分线程不能操作DOM
  var number = event.data
  console.log('分线程接收到主线程发送的数据: ' + number)
  var result = fibonacci(number)
  postMessage(result)
  console.log('分线程向主线程返回数据: ' + result)
}
