/*循环链表*/

// 节点类
function Node(el) {
    this.el = el
    this.next = null
}

function CLList() {
    this.head = new Node('head')
    this.pos = this.head
    this.head.next = this.head
    this.find = find
    this.findPre = findPre
    this.insert = insert
    this.remove = remove
    this.display = display
    this.advance = advance
    this.show = show
}

function find(item) {
    var curNode = this.head
    while (curNode.el !== item && curNode.next.el !== 'head') {
        curNode = curNode.next
    }
    return curNode
}
function findPre(item) {
    var curNode = this.head
    while(curNode.next && curNode.next.el !== item && curNode.next.el !== 'head') {
        curNode = curNode.next
    }
    return curNode
}

function insert(newEl, item) {
    var node = new Node(newEl)
    var curNode = this.find(item)
    node.next = curNode.next
    curNode.next = node
}

function display() {
    process.stdout.write('head->')
    var curNode = this.head
    while(curNode.next.el !== 'head') {
        process.stdout.write(curNode.next.el + '->')
        curNode = curNode.next
    }
    console.log()
}
function remove(item) {
    var preNode = this.findPre(item)
    if(preNode.next) {
        preNode.next = preNode.next.next
    }
}
function advance(n) {
    var curNode = this.pos
    var flag = false    //是否循环过一圈
    while(n--) {
        curNode = curNode.next
        if(curNode.el === 'head'){
            flag = true
        }
    }
    this.pos = curNode
    return flag
}
function show() {
    return this.pos
}

module.exports = CLList