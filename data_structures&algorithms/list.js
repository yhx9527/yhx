function List() {
    // 列表的元素个数
    this.listSize = 0;
    // 列表中当前为哪个元素
    this.pos = 0;
    // 保存列表元素的空数组
    this.dataStore = []
    // 在列表末尾添加一个元素
    this.append = append
    // 清空列表元素的方法
    this.clear = clear
    // 返回某个元素在列表中的位置
    this.find = find
    // 返回列表的字符串形式
    this.toString = toString
    // 插入一个元素
    this.insert = insert
    // 从列表中删除元素
    this.remove = remove
    // 将pos移到第一个元素
    this.front = front
    // 将pos移到最后一个元素
    this.end = end
    // 将pos向前移动一个元素
    this.prev = prev
    // 将pos向后移动一个元素
    this.next = next
    // 返回列表长度
    this.length = length
    // 返回列表目前所在位置--pos
    this.currPos = currPos
    // 将pos移动到指定位置
    this.moveTo = moveTo
    // 获取当前位置的元素
    this.getElement = getElement
    // 判断列表中是否有某个元素
    this.contains = contains
}

function append(el) {
    this.dataStore[this.listSize++] = el
}
function find(el) {
    for (var i = 0; i < this.listSize; i++) {
        if (this.dataStore[i] === el) {
            return i
        }
    }
    return -1
}
function remove(el) {
    var index = this.find(el)
    if (index > -1) {
        this.dataStore.splice(index, 1)
        --this.listSize
        return true
    }
    return false
}
function toString() {
    return this.dataStore
}
function length() {
    return this.listSize
}
function insert(el, elBF) {
    var index = this.find(elBF)
    if(index > -1) {
        this.dataStore.splice(index, 0, el)
        return true
    }
    return false
}
function clear() {
    delete this.dataStore
    this.dataStore = []
    this.listSize = this.pos = 0
}
function contains(el) {
    var index = this.find(el)
    if (index > -1) {
        return true
    }
    return false
}
function front() {
    this.pos = 0
}
function end() {
    this.pos = this.listSize-1
}
function prev() {
    if(this.pos > 0){
        --this.pos
    }
}
function next() {
    if (this.pos < this.listSize) {
        ++this.pos        
    }
}
function currPos() {
    return this.pos
}
function moveTo(pos) {
    this.pos = pos
}
function getElement() {
    return this.dataStore[this.pos]
}

module.exports = List