# 判断Array类型

### 使用instanceof

arr instanceof Array

### 使用constructor

arr.constructor == Array

### 使用Object的toString

Object.prototype.toString.call(arr) ==="[Object Array]"

### 使用Array对象的isArray方法

Array.isArray(arr)

### 使用isPrototypeOf方法

Array.prototype.isPrototypeOf(arr)

