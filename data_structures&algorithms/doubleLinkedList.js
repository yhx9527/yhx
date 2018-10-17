/*双向链表*/

// 节点类
function Node(el) {
    this.el = el
    this.next = null
    this.prev = null
}

function DLList() {
    //头指针
    this.head = new Node('head');
    //当前位置
    this.pos = this.head
    //找出某个节点，并返回
    this.find = find
    //找出最后一个节点
    this.findLast = findLast
    //在某个节点后面插入新节点
    this.insert = insert
    //删除一个节点
    this.remove = remove
    //展示这个链表
    this.display = display
    //反向展示整个链表
    this.displayReverse = displayReverse
    //当前位置向前移动n个单位
    this.advance = advance
    //当前位置向后移动n个单位
    this.back = back
    //显示当前的节点
    this.show = show
}

function find(item) {
    var curNode = this.head
    while (curNode.el !== item) {
        curNode = curNode.next
    }
    return curNode
}
function findLast() {
    var curNode = this.head
    while(curNode.next) {
        curNode = curNode.next
    }
    return curNode
}
function insert(newEl, item) {
    var node = new Node(newEl)
    var curNode = this.find(item)
    node.next = curNode.next
    if(curNode.next) {
        curNode.next.prev = node
    }
    node.prev = curNode
    curNode.next = node 

}

function display() {
    var curNode = this.head
    process.stdout.write('null<-head<->')
    while(curNode.next) {
        process.stdout.write(curNode.next.el + '<->')
        curNode = curNode.next
    }
    console.log()
}
function displayReverse() {
    var curNode = this.findLast()
    while(curNode.prev) {
        process.stdout.write(curNode.el + '<->')
        curNode = curNode.prev
    }
    console.log()
}
function remove(item) {
    var curNode = this.find(item)
    if(curNode.next === null){
        curNode.prev.next = curNode.next
    } else{
        curNode.prev.next = curNode.next
        curNode.next.prev = curNode.prev
        curNode.next = null
        curNode.prev = null
    }
}
function advance(n) {
    var curNode = this.pos
    while(n-- && curNode.next) {
        curNode = curNode.next
    }
    this.pos = curNode
}
function back(n) {
    var curNode = this.pos
    while(n-- && curNode.prev) {
        curNode = curNode.prev
    }
    this.pos = curNode
}
function show() {
    return this.pos.el
}

module.exports = DLList