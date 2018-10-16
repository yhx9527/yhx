const list = require('./list')

var movieList = new list()
// 已租列表
var rentList = new list()
var customers = new list()
var persons = new list()

//租借人的类
function Customer(name, movie) {
    this.name = name
    this.movie = movie
}
//Person类
function Person(name, sex) {
    this.name = name
    this.sex = sex
}
//显示person列表中相同性别的人
function showSomeSex(list, sex) {
    console.log(sex + '性名单:')
    for(var i = 0; i < list.length(); i++){
        if (list.dataStore[i].sex === sex){
            console.log(list.dataStore[i].name)
        }
    }
}
//读取文件将其转成数组,'\n'为分割
function creatArr(filepath) {
        var fs = require('fs')
        var data = fs.readFileSync(filepath, 'utf8')
        var arr = data.split('\n')
        for(var i=0; i< arr.length; i++) {
            arr[i] = arr[i].trim() //清除元素的开头和末尾的空格
        }
        return arr
    }
// 打印list
function display(list) {
    for(list.front(); list.currPos() < list.length(); list.next()) {
        if(list.getElement() instanceof Customer) {
            console.log(list.getElement()['name'] + '租借' 
                + list.getElement()['movie'])
        } else {
            console.log(list.getElement())
        }
    }
}
// 租借
function checkOut(name, movie, movieList, customers) {
    if(movieList.contains(movie)) {
        customers.append(new Customer(name, movie))
        movieList.remove(movie)
        rentList.append(movie)
        console.log('已租列表:')
        display(rentList)
    } else {
        console.log(movie + 'is unable')
    }
}
// 归还
function checkIn(movie) {
    rentList.remove(movie)
    movieList.append(movie)
    console.log('尚在租借的电影:')
    display(rentList)
}

// movies列表初始化
var temp = creatArr('./file.txt')
for(var i = 0; i<temp.length; i++){
    movieList.append(temp[i])
}

// persons列表初始化
for(var i = 0; i < 12; i++) {
    var sex = (i%2 === 0 ? '男' : '女')
    persons.append(new Person('people'+i, sex))
}
// showSomeSex(persons, '男')

// display(movieList)
// display(customers)

checkOut('yhx', 'asldjfal', movieList, customers)
checkOut('yhx', 'adfafda', movieList, customers)
checkIn('adfafda')
