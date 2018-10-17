/*单链表*/

// 节点类
function Node(el) {
    this.el = el
    this.next = null
}

function LList() {
    this.head = new Node('head');
    this.pos = this.head
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
    while (curNode.el !== item) {
        curNode = curNode.next
    }
    return curNode
}
function findPre(item) {
    var curNode = this.head
    while(curNode.next && curNode.next.el !== item) {
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
    var curNode = this.head
    while(curNode.next) {
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
    while(n-- && curNode.next) {
        curNode = curNode.next
    }
    this.pos = curNode
}
function show() {
    return this.pos.el
}
module.exports = LList